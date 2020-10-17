import {ServerModule} from '@sheetbase/server';

import {Lib as LibModule} from '../lib/index';
import {HomeRoute} from './routes/home.route';

export class App {
  private serverModule: ServerModule;
  private libModule: LibModule;
  homeRoute: HomeRoute;

  constructor() {
    this.serverModule = new ServerModule();
    this.libModule = new LibModule();
    this.homeRoute = new HomeRoute();
  }

  getApp() {
    // register server routes
    this.serverModule.registerRoutes();
    // app routes
    this.serverModule.routerService.register([this.homeRoute]);
    // for www
    return this.serverModule.httpService;
  }
}
