import request from 'supertest';
import {server} from '../server';

describe("GET /direction - What way should I go?", () => {
  it("should go right when shorter distance than going left", async () => {
    const res = await request(server).get('/direction?heading=310&target=75');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('direction', 'right');
  });

  it("should go left when shorter distance than going right", async () => {
    const res = await request(server).get('/direction?heading=310&target=305');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('direction', 'left');
  });

  it("should straight when going right is the same distance as going left", async () => {
    const res = await request(server).get('/direction?heading=310&target=310');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('direction', 'straight');
  });

  it("should throw an invalid number error when a string is submitted instead of a number", async () => {
    const res = await request(server).get('/direction?heading=310&target=helloWorld!');
    expect(res.status).toEqual(500);
    expect(res.body).toHaveProperty('error', 'Heading and target must be valid numbers');
  });

  it("should throw a missing param error when a param is missing from payload", async () => {
    const res = await request(server).get('/direction?heading=310');
    expect(res.status).toEqual(500);
    expect(res.body).toHaveProperty('error', 'Heading and target are required');
  });
});
