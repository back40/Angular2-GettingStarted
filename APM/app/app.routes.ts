import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { MaintenanceRoutes } from './maintenance/index';
import { BorrowerRoutes } from './borrower/index';

export const routes: Routes = [
  ...HomeRoutes, 
  ...MaintenanceRoutes, 
  ...BorrowerRoutes

];
