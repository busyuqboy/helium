# Flatbed

![Build](https://github.com/towbook/flatbed/workflows/Build/badge.svg)

React Web App Starter

## Included Packages

- [ESLint](https://eslint.org)
- [Express](https://expressjs.com)
- [Prettier](https://prettier.io)
- [React](https://reactjs.org)
- [TS Node Dev](https://github.com/wclr/ts-node-dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

## Quick Start

### Local Development

```zsh
npm install
npm run dev
```

This will install the required packages and start up a server at http://localhost:3000

### Deploy to Production

Flatbed supports deploying to and serving from Heroku by default. Either push the repo to Heroku or setup Heroku auto-deployment from your GitHub repo.

For any other providers, configure your server/host to run these commands.

```zsh
npm ci         # Install packages
npm run build  # Build the code for production
npm start      # Starts the web server
```

Happy coding!
