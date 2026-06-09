![Node](https://img.shields.io/badge/Node.js-18+-green)![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)![Prisma](https://img.shields.io/badge/Prisma-ORM-blueviolet)![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon.tech-blue)

# Mini-Gestionnaire de Bibliothèque - Backend Node.js
  Ce projet est un mini-backend développé en TypeScript avec Node.js, Prisma ORM et une base de données PostgreSQL hébergée sur Neon. L'objectif principal de cet exercice est de concevoir et de manipuler la couche d'accès aux données (CRUD) ainsi que de gérer des relations entre deux entités, sans utiliser de framework Web comme Express ou Next.js.  

## Fonctionnalités du Projet  
  Le système gère un catalogue de livres et le suivi de leurs emprunts à travers deux modèles liés par une relation de 1 à plusieurs (1-N) :

## Gestion du catalogue (Livre) : Création (Seed), lecture globale, filtrage (disponibilité, recherche partielle par auteur), mise à jour et suppression (simple ou conditionnelle).  

## Gestion des emprunts (Emprunt) : Création d'un emprunt, mise à jour automatique de la disponibilité du livre, historique des emprunts avec inclusion des données du livre et retour de livre.  

## Stack Technique  

  Runtime : Node.js LTS
  Langage : TypeScript (exécuté avec tsx)
  ORM : Prisma
  Base de données : PostgreSQL (hébergé sur Neon.tech)

## Installation et Configuration

  ### 1. Prérequis
    Assurez-vous d'avoir installé Node.js LTS.  

  ### 2. Cloner le projet
    git clone URL_DE_VOTRE_DEPOT_GITHUB
    cd biblio-api  

  ### 3. Installer les dépendances
    npm install  

### 4. Configurer les variables d'environnement
    Créez un fichier .env à la racine du projet et ajoutez-y votre chaîne de connexion fournie par Neon :
    DATABASE_URL="postgresql://USER:PASSWORD@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require"  

### Attention : Le fichier .env contient des identifiants sensibles et est configuré dans le .gitignore pour ne pas être poussé sur GitHub.  

### 6. Appliquer les migrations de la base de données
    Pour créer les tables Livre et Emprunt sur votre instance Neon et générer le client Prisma, exécutez :
    npm run db:migrate  

## Utilisation et Commandes

  ### Lancer le script principal (Seed et Tests CRUD) :
    npm run dev  

  ### Ouvrir l'interface de gestion de données (Prisma Studio) :
    npm run db:studio  

  ### Regénérer le client Prisma :
    npm run db:generate  

## Membres de l'équipe
    Francis Boisvert
    Mathieu Gosselin
    Clement Laflamme
    Pascal Mercier

