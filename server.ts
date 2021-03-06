import * as restify from 'restify';
import * as controller from './direction.controller';

const server: restify.Server = restify.createServer({
    handleUncaughtExceptions: true,
    name: 'Robot Servo'
});

// Load plugins
server.use(restify.plugins.queryParser({mapParams: true}));

server.get('/direction', (req: restify.Request, res: restify.Response, next: restify.Next) => { 
    try {
        return controller.get(req, res, next);
    }
    catch (err) {
        res.json(500, {error: err.message});
    };
    next();
 });

export {server};