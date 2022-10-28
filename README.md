# Multi-roles-mern-authentification
Je suis  developpeurs Fullstack javascript, je vais  développer une application pour la restaurant mar7aba avec un service de livraison à domicile. Les Clients pourront donc passer commande directement depuis l’ application et payer avant livraison à domicile. Le travail consiste à réaliser une application de Livraison Marhaba. Cette application sera réalisée en utilisant les SPA (Single Page Application) avec CSR (Client Side Rendering).

En tant que Team de Développement, nous sont amenés à programmer l’application proposant les fonctionnalités suivantes :

​

1 - Le Manager :

• Web Admin : portail Internet pour voir les nouvelles commandes entrantes et les détails affecté par Livreur .

• Annonce : le manager peut créer des annonces de repas (Modifier / Ajouter /Supprimer).

• Gestion Utilisateurs : le manager peut gérer les infos client/ livreur , et aussi il peut banner des comptes

​

bonus

​

les statistiques de l'application.

​

​

2- Le client :

​

​

• Inscription: Les clients s’inscrivent directement via l’application.

• Commander un repas: Option permettant à l’ utilisateur de commander les repas disponibles

• Paiement cash: Une fois la livraison est complète .

​

bonus:

• Le lieu de livraison: L’ utilisateur peut sélectionner directement ramasser et déposer l’ emplacement de l’ ordre à partir de l’application(GPS).

• Historique: Capacité de suivre les antécédents des livraisons effectuées en utilisant l’application.

• Paiement par STRIPE.

​

3 - Le livreur :

​

​

• La laivraison de la commande aux clients.

• Statut: Livreur peut mettre à jour le client quand il / elle a: a. Accepté / Rejeté la réservation b. Ramassé Ordre. c. Livré l’Ordre.

• Historique de livraison: Le courrier peut suivre l’historique de livraison et de surveiller l’état de chaque y compris les livraisons annulées.

​

Ce que tu dois faire ?

​

Programmer une authentification avec Json Web Token :

**Partie Backend **: (NodeJS (ExpressJs) :

Authentification avec JWT token Création d’une REST API (GET - POST - PUT - DELETE) qui prend en charge les CRUD Gestion des erreurs (Error Handling) Utilisations des variables d’environnement

​

​

• Inscription

​

​

o En tant qu’un utilisateur non inscrit, je veux avoir l’occasion de m’inscrire sur l’application afin d’accéder à ses fonctionnalités.

o En tant qu’un utilisateur qui effectue l’inscription, je devrai vérifier l’adresse courriel fournie afin de prouver que l’adresse courriel fournie m’appartient.

​

​

• Se connecter :

​

​

o En tant qu’un utilisateur soit (Livreur ou Client) inscrit, je veux pouvoir ouvrir une session dans mon compte afin d’accéder aux options de chaque rôle d’application

o En tant qu’un utilisateur inscrit et authentifié, je veux avoir la possibilité de modifier mon mot de passe au cas où je l’aurais oublié ou perdu, ou autrement.

​

​

• **Se déconnecter **:

​

​

o En tant qu’un utilisateur authentifié, je veux avoir l’option de fermer la session du compte afin de garder mon compte privé et sécuritaire.

​

​

Pour les routes d’ authentification il faut etre comme suite :

​

​

• api/auth/login

• api/auth/register

• api/auth/forgetpassword

• api/auth/resetpassword/:token

​

​

Une fois l'utilisateur est authentifié. Il est redirigé vers un route de user Profile mentionnant son rôle comme un

message de console voici les exemples :

​

​

• Route : api/user/livreur/me ***** message de console : Bonjour Anass, votre rôle est : livreur

• Route : api/user/manager/me ****** message de console : Bonjour Riad, votre rôle est : Manager

• Route : api/user/client/me ****** message de console : Bonjour Omaima, votre rôle est : Client

​

​

Liste des bibliothèques(librarys) requises :

​

​

• Bcryptjs

• Dotenv

• Express

• Jsonwebtoken :

• Mongoose

• Nodemailer

• Nodemoon

​

​

L’objectif de brief est Se familiariser avec :

​

​

• MongoDB

• mongoose

• RestFul API

• JWT (Json Web Token)

• Récupérer et envoyer des données JSON
