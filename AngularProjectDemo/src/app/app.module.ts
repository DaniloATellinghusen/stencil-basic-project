import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyStencilProjectModule} from '@my-stencil-project/my-stencil-project-angular';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyStencilProjectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
