import request from 'supertest'

import app from './app'
import { getAllCars } from './data/getAllCars'
import { getCarByBrand } from './data/getCarByBrand'

describe('GET /helloworld', () => {
  test('should return hello random name', async () => {
    const response = await request(app).get('/helloworld')

    expect(response.statusCode).toBe(200)
    expect(response.text).toContain('Hello')
  })
})

describe('GET /cars', () => {
  test('should return 200 succeeds cars as json', async () => {
    const response = await request(app).get('/cars')
    const expected = getAllCars()

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(expected)
  })
})

describe('GET /cars/:brand', () => {
  test('should return a 200 succeeds if brand exists', async () => {
    const response = await request(app).get(`/cars/seat`)
    const car = getCarByBrand('seat')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(car)
  })

  test('should return 404 not found when brand unknown', async () => {
    const response = await request(app).get(`/cars/unknown`)
    expect(response.statusCode).toBe(404)
  })
})
