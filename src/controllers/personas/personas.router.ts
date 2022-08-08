import { MethodEnum } from './../../allRoutes'
import { IRoute } from '../../allRoutes'
import { personaCreateOneAction } from './personaCreateAction'
import { personaRetrieveAction } from './personaRetrieveAction'
import { personaListAction } from './personaListAction'

export const routesPersonas: IRoute[] = [
  {
    path: '/api/personas',
    method: MethodEnum.POST,
    action: personaCreateOneAction,
  },
  {
    path: '/api/personas',
    method: MethodEnum.GET,
    action: personaListAction,
  },
  {
    path: '/api/personas/:id',
    method: MethodEnum.GET,
    action: personaRetrieveAction,
  },
]
