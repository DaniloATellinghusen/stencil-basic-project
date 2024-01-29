import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyStencilProjectModule} from '@my-stencil-project/my-stencil-project-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyStencilProjectModule,
    MyStencilProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
