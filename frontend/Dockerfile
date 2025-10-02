FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 5173

# Ajouter --host pour que Vite écoute sur toutes les interfaces
CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0"]