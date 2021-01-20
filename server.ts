import * as restify from 'restify';

const app: restify.Server = restify.createServer({name: 'Robot Servo'});

const respond = (req: restify.Request, res: restify.Response, next: restify.Next) => { res.send('hello ' + req.params.name); next(); };

const server = restify.createServer();
server.get('/directions', respond);

server.listen(8080, () => {
    console.log('%s listening at %s', server.name, server.url);
});