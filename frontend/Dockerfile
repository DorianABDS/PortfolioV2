FROM node:20

WORKDIR /app

# Copier uniquement package.json et lockfile pour installer les deps d'abord
COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm
RUN pnpm install

# Copier le reste du code
COPY . .

EXPOSE 5173

# Lancer Vite en mode dev avec host accessible
CMD ["pnpm", "dev", "--host", "0.0.0.0"]
