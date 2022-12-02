import request from 'supertest'

import app from './app'
import carsJson from './data/carlist.json'
import { getCarByBrand } from './data/getCarByBrand'

describe('GET /helloworld', () => {
  test('should return hello random name', async () => {
    const response = await request(app).get('/helloworld')

    expect(response.statusCode).toBe(200)
    expect(response.text).toContain('Hello')
  })
})

describe('GET /cars', () => {
  test('should return cars json', async () => {
    const response = await request(app).get('/cars')

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ count: carsJson.length, result: carsJson })
  })
})

describe('GET /cars/:brand', () => {
  test('should return a car', async () => {
    const response = await request(app).get(`/cars/seat`)
    const car = getCarByBrand('seat')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(car)
  })

  test('should return not found when brand unknown', async () => {
    const response = await request(app).get(`/cars/unknown`)
    expect(response.statusCode).toBe(404)
  })
})
