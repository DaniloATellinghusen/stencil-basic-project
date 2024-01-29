import { NgModule } from '@angular/core';
import { TextValueAccessor } from './directives/text-value-accessor';
import { defineCustomElements } from '@my-stencil-project/my-stencil-project/dist/loader';

import {
  MyInput,
  MyButton
} from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies

  MyInput,
  MyButton,
  // Value Accessors
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class MyStencilProjectModule {}
