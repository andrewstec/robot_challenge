import * as restify from 'restify';
import * as controller from './direction.controller';

const respond: restify.RequestHandlerType = (req: restify.Request, res: restify.Response, next: restify.Next) => { res.send('hello ' + req.params.name); next(); };

const server: restify.Server = restify.createServer({
    handleUncaughtExceptions: true,
    name: 'Robot Servo'
});

// Load plugins
server.use(restify.plugins.queryParser({mapParams: true}));

server.get('/direction', controller.get);

server.listen(8080, () => {
    console.log('%s listening at %s', server.name, server.url);
});