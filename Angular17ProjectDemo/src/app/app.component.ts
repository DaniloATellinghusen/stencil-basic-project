import {Component, Renderer2, ViewChild} from '@angular/core';
import {MyInput} from "@my-stencil-project/my-stencil-project-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('input2') input2!: MyInput;

  constructor(private rd: Renderer2) {

  }

  onInputChange(event: any) {
    console.log(event);
    this.input2.value = event.value;
  }
}
