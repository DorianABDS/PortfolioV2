# PortfolioV2

## Description

PortfolioV2 est une application web full-stack qui sert de portfolio interactif. Elle permet de présenter vos projets et compétences avec un frontend moderne en React et un backend robuste en Node.js/Express connecté à MongoDB Atlas.

---

## Stack Technique

### Frontend

* **React 19** avec **Vite** pour un build rapide et un hot-reload efficace.
* **Tailwind CSS** pour un design responsive et modulable.
* **React Router v7** pour la navigation côté client.
* **Node 20** et **pnpm** comme gestionnaire de paquets.

### Backend

* **Node.js / Express 5** pour le serveur et les routes API.
* **MongoDB Atlas** pour la base de données en cloud.
* **Mongoose 8** pour gérer les modèles et la connexion MongoDB.
* **CORS** pour la communication frontend-backend.
* **dotenv** pour gérer les variables d'environnement.

### DevOps

* **Docker & Docker Compose** pour un environnement isolé et reproductible.
* **.gitignore / .dockerignore** configurés pour éviter de versionner les dépendances et fichiers temporaires.

---

## Installation & Setup

### Prérequis

* Node.js 20
* pnpm
* Docker (optionnel pour travailler en conteneur)

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

### Backend

```bash
cd backend
pnpm install
node server.js
```

> ⚠️ Remplace `MONGO_URI` dans `backend/.env` avec ton URI MongoDB Atlas.

---

## Utilisation avec Docker

```bash
docker-compose up --build
```

* Le frontend sera disponible sur `http://localhost:5173`
* Le backend sera disponible sur `http://localhost:5000`

---

## Notes

* Le projet utilise **pnpm** pour gérer les dépendances, ce qui permet des installations rapides et reproductibles.
* `.gitignore` et `.dockerignore` sont configurés pour ignorer `node_modules`, logs, builds et fichiers secrets.
* Conçu pour être facilement clonable et fonctionnel sur plusieurs machines sans réinstaller toutes les dépendances.
