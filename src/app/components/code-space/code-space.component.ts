import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-code-space',
  templateUrl: './code-space.component.html',
  styleUrls: ['./code-space.component.css']
})
export class CodeSpaceComponent {
@Input()
code:string="";
}
