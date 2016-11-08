import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { MaintenanceRoutes } from './maintenance/index';

export const routes: Routes = [
  ...HomeRoutes, 
  ...MaintenanceRoutes
];
