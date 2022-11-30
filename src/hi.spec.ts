import request from 'supertest'

describe('hi endpoint', () => {
  const expected = { greeting: 'Hey! It works!' }

  it('should get hi with 200', (done) => {
    const test = request('http://localhost:8080/hi')

    test
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expected)
        done()
      })
  })

  it('should post hi with 201', (done) => {
    const test = request('http://localhost:8080/hi')
    test
      .post('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(expected)
        done()
      })
  })
})
