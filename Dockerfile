FROM node:alpine

RUN npm install -g pnpm

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

CMD [ "pnpm", "preview"]