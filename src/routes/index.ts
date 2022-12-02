import express, { Request, Response, NextFunction } from 'express'
import { faker } from '@faker-js/faker'

import carsJson from '../data/carlist.json'
import { getCarByBrand } from '../data/getCarByBrand'

const router = express.Router()

router.get('/helloworld', (_req: Request, res: Response): void => {
  res.send(`Hello ${faker.name.fullName()}`)
})

router.get('/cars', (_req: Request, res: Response): void => {
  res.send({ count: carsJson.length, result: carsJson })
})

router.get(
  '/cars/:brand',
  (req: Request, res: Response, next: NextFunction): void => {
    const brand = req.params.brand
    if (brand) {
      const result = getCarByBrand(brand)
      result != null
        ? res.send(result)
        : res.status(404).send(`Brand ${brand} not found`)
    }
    next()
  }
)

export default router
