//if put x will skipped and if put test passed
xtest('adds 5 + 5to equal 10', ()=>{

    expect(5 + 5).toBe(10);
});
('use strict');

const supertest = require('supertest');
const server = require ('../server');
//here using the app server that we are created to tested 
const request = supertest(server.app);

describe('server-deployment-practice',()=>{
 it ('handles invalid requests',async ()=>{
     const response = await request.get('/foo');
     expect(response.status).toEqual(404);

 });
 it ('handles errors', async()=>{
     const response = await request.get('/bad');
     expect(response.status).toEqual(500);

 }) 
 it ('handles correct routes', async()=>{
     const response = await request.get('/');
     expect(response.status).toEqual(200);
 });
});