import * as restify from 'restify';
const respond: restify.RequestHandlerType = (req: restify.Request, res: restify.Response, next: restify.Next) => { res.send('hello ' + req.params.name); next(); };

const server: restify.Server = restify.createServer({
    handleUncaughtExceptions: true,
    name: 'Robot Servo'
});

// Load plugins
server.use(restify.plugins.queryParser());

server.get('/direction', respond);

server.listen(8080, () => {
    console.log('%s listening at %s', server.name, server.url);
});