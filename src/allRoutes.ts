import { Request, Response } from 'express'
import { routeApis } from './controllers/api/apiRouter'
import { routesPersonas } from './controllers/personas/personas.router'

export const enum MethodEnum {
  GET = 'get',
  PATCH = 'patch',
  POST = 'post',
  DELETE = 'delete',
}

export interface IRoute {
  path: string
  method: MethodEnum
  action: (request: Request, response: Response) => Promise<any>
}

export const AppRoutes: IRoute[] = [...routesPersonas, ...routeApis]
