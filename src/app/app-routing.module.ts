import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentIoComponent } from './component-io/component-io.component';
import { DirectivesComponent } from './directives/directives.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';

const routes: Routes = [
  { path: 'oneway', component: OnewayComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'twoway', component: TwowayComponent },
  { path: 'compIo', component: ComponentIoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
