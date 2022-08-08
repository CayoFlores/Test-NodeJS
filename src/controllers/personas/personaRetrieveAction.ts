import { Persona } from './../../entities/persona.entity'
import { Request, Response } from 'express'
import database from '../../config/database'

/**
 * Obtener una persona.
 * @param {number} id identificador de la persona a obtener
 * @returns {Persona} Persona con el identificador dado.
 */
export async function personaRetrieveAction(
  request: Request,
  response: Response,
) {
  try {
    const id = Number(request.params.id)
    const persona = await database
      .getRepository(Persona)
      .findOne({ where: { id } })
    if (!persona) {
      response.status(404).json({ message: 'Persona no encontrada' })
    }
    response.status(200).json(persona)
  } catch (error) {
    return response.status(400).json(error)
  }
}
