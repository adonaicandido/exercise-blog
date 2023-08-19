FROM node:18-alpine AS base

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
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

RUN turbo prune --scope=@unknown-co/admin-app --docker

FROM base AS installer

WORKDIR /usr/src

COPY turbo.json .
COPY --from=builder /usr/src/out/json/ .
COPY --from=builder /usr/src/out/pnpm-lock.yaml .
COPY --from=builder /usr/src/out/pnpm-workspace.yaml .
COPY --from=builder /usr/src/out/full/ .

RUN pnpm install

RUN turbo build --filter=admin-app

FROM base AS production

WORKDIR /usr/src

ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /usr/src/apps/admin-app/next.config.js .
COPY --from=installer /usr/src/apps/admin-app/package.json .
COPY --from=installer --chown=nextjs:nodejs /usr/src/apps/admin-app/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /usr/src/apps/admin-app/.next/static ./apps/admin-app/.next/static

CMD node apps/admin-app/server.js
