import axios from 'axios'
import { Request, Response } from 'express'

export async function findApis(request: Request, response: Response) {
  try {
    const listApis = await axios.get('https://swapi.py4e.com/api/')
    response.status(200).json(listApis.data)
  } catch (error) {
    return response.status(400).json(error)
  }
}
