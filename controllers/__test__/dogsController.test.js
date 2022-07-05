const app = require('../../app.js');
const supertest = require('supertest');

describe('return json data for all dogs', () => {
    it('returns an object with all dogs', async () => {
        await supertest(app).get("/dogs")
            .expect(200)
            .then((response) => {
                expect(response.body.dogs).toBeInstanceOf(Array);
                expect(response.body.dogs.length).toBe(5);
            })

    })

    it('returns an object with a number of dogs equal to or less than a limit', async () => {
        await supertest(app).get("/dogs?limit=3")
            .expect(200)
            .then(response => {
                expect(response.body.dogs).toBeInstanceOf(Array);
                expect(response.body.dogs.lenght).toBe(3);
            })
        
            await supertest(app).get("/dogs?limit=35")
            .expect(200)
            .then(response => {
                expect(response.body.dogs).toBeInstanceOf(Array);
                expect(response.body.dogs.lenght).toBe(5);
            })    
    })
})


