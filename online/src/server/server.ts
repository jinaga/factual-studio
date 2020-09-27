import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as session from 'express-session';
import * as http from 'http';
import { configureRoutes } from './routes';

const app = express();
const server = http.createServer(app);

app.use(session({
  secret: process.env.SESSION_SECRET || 'tacocat',
  resave: false,
  saveUninitialized: true
}));
app.use(cookieParser());
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());

configureRoutes(app);

server.listen(app.get('port'), () => {
  console.log(`  App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
  console.log('  Press CTRL-C to stop\n');
});
