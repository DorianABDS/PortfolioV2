# Utiliser Node LTS
FROM node:20

# Créer le répertoire de travail
WORKDIR /app

# Copier package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Installer pnpm
RUN npm install -g pnpm

# Installer les dépendances
RUN pnpm install

# Copier tout le code
COPY . .

# Exposer le port
EXPOSE 5000

# Lancer le serveur
CMD ["node", "server.js"]
