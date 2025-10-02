# 1. Base Node
FROM node:20-alpine

# 2. Créer le dossier de travail
WORKDIR /app

# 3. Copier uniquement les fichiers de dépendances pour profiter du cache Docker
COPY package.json pnpm-lock.yaml* ./

# 4. Installer pnpm globalement
RUN npm install -g pnpm

# 5. Installer toutes les dépendances
RUN pnpm install --frozen-lockfile

# 6. Copier tout le code source
COPY . .

# 7. Exposer le port
EXPOSE 5000

# 8. Commande pour démarrer le backend
CMD ["node", "server.js"]
