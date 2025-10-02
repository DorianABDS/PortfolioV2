FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN echo "node-linker=hoisted" > .npmrc

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]