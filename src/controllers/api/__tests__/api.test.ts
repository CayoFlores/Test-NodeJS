import { describe, test, expect } from '@jest/globals'
import supertest from 'supertest'
import { app } from './../../../app/index'

describe('Api Controller', () => {
  test('Lista de apis integrado de Swapi', async () => {
    const response = await supertest(app).get('/api')
    expect(response.status).toEqual(200)
  })
})
