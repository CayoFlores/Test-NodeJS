import { Persona } from './../../entities/persona.entity'
import { Request, Response } from 'express'
import database from '../../config/database'

/**
 * Creación de una persona.
 * @body Valores de la persona a crear
 * @returns {Persona} Persona creada.
 */
export async function personaCreateOneAction(
  request: Request,
  response: Response,
) {
  try {
    const newPersona = request.body
    const persona = await database.getRepository(Persona).save(newPersona)
    return response.status(201).send(persona)
  } catch (error) {
    return response.status(400).json(error)
  }
}
