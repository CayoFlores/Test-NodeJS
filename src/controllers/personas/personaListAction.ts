import { ILike } from 'typeorm'
import { Persona } from './../../entities/persona.entity'
import { Request, Response } from 'express'
import database from '../../config/database'


/**
 * Creación de una persona.
 * @param {string} search filtra por el nombre de las personas
 * @returns {Persona[]} Lista de personas.
 */
export async function personaListAction(request: Request, response: Response) {
  try {
    const { search } = request.query
    const filter = search ? { where: { nombre: ILike(`%${search}%`) } } : {}
    const personas = await database.getRepository(Persona).find(filter)
    response.status(200).json(personas)
  } catch (error) {
    return response.status(400).json(error)
  }
}
