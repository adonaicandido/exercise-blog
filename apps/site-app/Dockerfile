FROM node:18-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm add -g turbo

FROM base AS builder

WORKDIR /usr/src

COPY . .

RUN turbo prune --scope=@unknown-co/site-app --docker

FROM base AS installer

WORKDIR /usr/src

COPY turbo.json .
COPY --from=builder /usr/src/out/json/ .
COPY --from=builder /usr/src/out/pnpm-lock.yaml .
COPY --from=builder /usr/src/out/pnpm-workspace.yaml .
COPY --from=builder /usr/src/out/full/ .

RUN pnpm install
RUN turbo build --filter=site-app

FROM base AS production

WORKDIR /usr/src

ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /usr/src/apps/site-app/next.config.js .
COPY --from=installer /usr/src/apps/site-app/package.json .
COPY --from=installer --chown=nextjs:nodejs /usr/src/apps/site-app/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /usr/src/apps/site-app/.next/static ./apps/site-app/.next/static
COPY --from=installer --chown=nextjs:nodejs /usr/src/apps/site-app/public ./apps/site-app/public

CMD node apps/site-app/server.js
