# Factual Studio Online

Build models using Factual in your browser.
Create facts and run queries against an online store.

## Installing

Once you have the code, run:

```bash
npm install
```

## Building

To build:

```bash
npm run build
```

This creates a `dist` folder with the server-side code in `server.js`, and the client-side code in `scripts/index-xxxxx.js`.
It also creates an HTML file in `views/index.html` with a script tag that loads the client-side code.

## Running

To run:

```bash
NODE_ENV=development npm start
```

## Developing

After the first build, you will probably want to run in development mode:

```bash
npm run dev
```

This will watch the source code for changes and rebuild as necessary.
It will restart the server to load those changes.

Build something incredible!
