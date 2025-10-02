FROM node:20-alpine

# Dossier de travail
WORKDIR /app

# Copier package.json et pnpm-lock.yaml pour installer les dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer pnpm et les dépendances
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copier le code source
COPY . .

# Exposer le port Vite
EXPOSE 5173

# Commande de démarrage
CMD ["pnpm", "run", "dev"]
