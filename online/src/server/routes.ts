import { Express, static as ExpressStatic } from 'express';
import * as path from 'path';

export function configureRoutes(app: Express) {
  app.use((req, res, next) => {
    // Ensure the page is secure, or that we are running a development build
    if ( req.headers['x-forwarded-proto'] === 'https'
      || req.headers['x-arr-ssl']
      || process.env.NODE_ENV === 'development') {
      next();
    } else {
      res.redirect(`https://${req.hostname}${req.url}`);
    }
  });

  app.get(/^\/(index.html)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  app.use('/scripts', ExpressStatic(path.join(__dirname, 'scripts')));
}
