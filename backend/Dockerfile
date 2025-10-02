# Étape 1 : base node
FROM node:20-alpine

# Étape 2 : dossier de travail
WORKDIR /app

# Étape 3 : copier package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Étape 4 : installer pnpm et les dépendances
RUN npm install -g pnpm
RUN pnpm install

# Étape 5 : copier le code source
COPY . .

# Étape 6 : exposer le port Vite
EXPOSE 5173

# Étape 7 : démarrer le dev server
CMD ["pnpm", "run", "dev"]
