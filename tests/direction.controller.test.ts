import request from 'supertest';
import {server} from '../server';

describe("GET /direction - What way should I go?", () => {
  it("should go left when shorter distance than going right", async () => {
    const res = await request(server).get('/direction?heading=310&target=75');
    expect(res.status).toEqual(200);
  });
});
test('should go left when shorter distance than going right', () => {

});

test('should go right when shorter distance than going left', () => {

});