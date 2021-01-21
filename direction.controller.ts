import * as restify from 'restify';

const get = (req: restify.Request, res: restify.Response, next: restify.Next) => {
    console.log('direction.controller:: get() - start');
    console.log(req.params);
    res.send({body: 'success!'})
    next();
};

export { get };