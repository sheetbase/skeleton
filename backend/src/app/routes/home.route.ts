import {RouteResponse} from '@sheetbase/server';

export class HomeRoute {
  endpoint = '/';

  constructor() {}

  get(req: {}, res: RouteResponse) {
    return res.html('<h1>A Sheetbase app!</h1>');
  }
}
