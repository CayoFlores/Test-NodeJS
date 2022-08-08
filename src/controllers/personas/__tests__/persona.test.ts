import { describe, beforeAll, afterAll, test, expect } from '@jest/globals'
import supertest from 'supertest'
import { app } from './../../../app/index'
import database from '../../../config/database'

describe('Persona Controller', () => {
  beforeAll(async () => {
    await database.initialize()
  })
  afterAll(async () => {
    await database.destroy()
  })

  test('Creación de una persona', async () => {
    const response = await supertest(app)
      .post('/api/personas')
      .send({
        anioNacimiento: '19 BBY',
        colorOjos: 'Blue',
        peliculas: ['https://swapi.py4e.com/api/films/1/'],
        genero: 'Male',
        colorCabello: 'Blond',
        altura: '172',
        mundo: 'https://swapi.py4e.com/api/planets/1/',
        peso: '77',
        nombre: 'Cayo',
        colorPiel: 'Fair',
        especies: ['https://swapi.py4e.com/api/species/1/'],
        naves: ['https://swapi.py4e.com/api/starships/12/'],
        url: 'https://swapi.py4e.com/api/people/1/',
        vehiculos: ['https://swapi.py4e.com/api/vehicles/14/'],
      })
    expect(response.status).toEqual(201)
  })

  test('Obtener lista de personas', async () => {
    const response = await supertest(app).get('/api/personas')
    expect(response.status).toEqual(200)
  })

  test('Obtener una persona', async () => {
    const response = await supertest(app).get('/api/personas/1')
    expect(response.status).toEqual(200)
  })
})
