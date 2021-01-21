import * as restify from 'restify';

const calcLeftTurn = (heading: number, target: number) => {
    let difference: number = heading - target;
    if (difference < 0) {
        difference+=360;
    }
    return difference;
};

const calcRightTurn = (heading: number, target: number) => {
    let difference = target - heading;
    if (difference < 0) {
        difference+=360;
    }
    return difference;
};

const get = (req: restify.Request, res: restify.Response, next: restify.Next) => {
    console.log('direction.controller:: get() - start');
    const {heading, target} = req.params;

    if (!req.params.heading || !req.params.target) {
        throw new Error('Heading and target are required');
    }

    if (isNaN(req.params.heading) || isNaN(req.params.target)) {
        throw new Error('Heading and target must be valid numbers');
    }

    // https://aviation.stackexchange.com/questions/47540/how-do-you-find-the-difference-in-degrees-between-two-headings
    if (calcLeftTurn(heading, target) > calcRightTurn(heading, target)) {
        return res.json(200, {direction: 'right'});
    }

    res.json(200, {direction: 'left'});
    next();
};

export { get };