FROM node:18-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk add --no-cache libc6-compat
RUN apk add postgresql-client
RUN apk update
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm add -g turbo

FROM base AS builder

WORKDIR /usr/src

COPY . .

RUN turbo prune --scope=@unknown-co/blog-api --docker

FROM base AS installer

WORKDIR /usr/src

COPY turbo.json .
COPY --from=builder /usr/src/out/json/ .
COPY --from=builder /usr/src/out/pnpm-lock.yaml .
COPY --from=builder /usr/src/out/pnpm-workspace.yaml .
COPY --from=builder /usr/src/out/full/ .

RUN pnpm install

FROM base AS sourcer

WORKDIR /usr/src

COPY --from=installer /usr/src/ .

RUN turbo build --scope=blog-api --include-dependencies --no-deps

FROM base as runner

WORKDIR /usr/src

COPY --from=sourcer /usr/src/ .

RUN chmod +x apps/blog-api/init.sh

ENTRYPOINT ["apps/blog-api/init.sh"]

CMD node apps/blog-api/dist/main.js