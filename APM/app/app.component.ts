import { Component } from '@angular/core';



@Component({
    selector: 'nr-app',
    moduleId: module.id,
    template: `<nr-navbar></nr-navbar>

 <div class='container-fluid'>
       <router-outlet></router-outlet>     
</div>`,
    providers: [ ]
})
export class AppComponent { 
    pageTitle: string = "Note request";
}
