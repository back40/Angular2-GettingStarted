import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StarComponent }   from './star.component';
import { CoreLoanMasterService } from './services/core-loanmaster.service';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
    imports: [ CommonModule, RouterModule ],
    exports: [ 
        CommonModule, 
        FormsModule, 
        StarComponent,
        RouterModule, 
        NavbarComponent
    ],
    declarations: [ StarComponent, NavbarComponent ],
    providers: [  ]
})
export class SharedModule {  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ CoreLoanMasterService ]
    };
  }
}
