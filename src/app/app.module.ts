import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ComponentIoComponent } from './component-io/component-io.component';
import { IoChildComponent } from './io-child/io-child.component';

@NgModule({
  declarations: [
    AppComponent,
    OnewayComponent,
    TwowayComponent,
    DirectivesComponent,
    NavComponent,
    ComponentIoComponent,
    IoChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
