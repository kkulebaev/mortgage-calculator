FROM node:alpine

# Activate corepack for pnpm: https://dev.to/cloudx/corepack-the-node-js-manager-of-package-managers-44dd
RUN corepack enable

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

CMD [ "pnpm", "preview"]