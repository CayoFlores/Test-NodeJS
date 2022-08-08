import { MethodEnum } from './../../allRoutes'
import { IRoute } from '../../allRoutes'
import { findApis } from './listApis'


export const routeApis: IRoute[] = [
  {
    path: '/api',
    method: MethodEnum.GET,
    action: findApis,
  }
]
