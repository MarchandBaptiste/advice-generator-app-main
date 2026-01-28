# Frontend Mentor - Advice generator app

![Design preview for the Advice generator app coding challenge](preview.jpg)

## Présentation
Ce projet est une solution au challenge Advice Generator App de Frontend Mentor. L'application génère des conseils aléatoires en appelant une API tierce à chaque clic, sans rechargement de page.

**Démo en ligne :** [Advice Generator](https://marchandbaptiste.github.io/advice-generator-app-main/)

## Objectifs du projet
* Connecter une interface web à une API publique (Advice Slip API).
* Gérer les appels asynchrones avec JavaScript.
* Positionner des éléments graphiques de manière précise (bouton centré sur la bordure).

## Technologies utilisées
* **HTML5** : Structure sémantique.
* **CSS3** : Flexbox pour le centrage de la carte et `transform: translate` pour le positionnement du bouton.
* **JavaScript (ES6+)** : Utilisation de l'API `fetch` et `async/await`.

## Analyse technique
### Points complexes
1. **Appel API (Fetch)** : J'ai utilisé `fetch()` pour récupérer les données au format JSON. L'utilisation de `async/await` rend le code plus lisible qu'avec les chaînes de promesses `.then()`.
2. **Gestion du cache** : Les navigateurs ont tendance à mettre en cache les requêtes API. Pour forcer une nouvelle citation à chaque clic, il est parfois nécessaire de désactiver le cache dans les headers de la requête.
3. **Mise en page CSS** : Le positionnement du bouton avec le dé nécessite un positionnement absolu par rapport à la carte, ajusté avec une transformation négative pour qu'il soit parfaitement centré sur la limite inférieure de la carte.

### Ce que j'ai appris
Ce challenge m'a permis de comprendre le cycle de vie d'une requête HTTP côté client : envoi de la demande, attente (pending), réception de la réponse, conversion en JSON et mise à jour du DOM.

## Sources
* Challenge & Assets : [Frontend Mentor](https://www.frontendmentor.io)
* API utilisée : [Advice Slip JSON API](https://api.adviceslip.com)
* Documentation Fetch : [MDN Web Docs - Using Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)
