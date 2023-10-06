import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  templateUrl: './card-about.component.html',
  styleUrls: ['./card-about.component.css']
})
export class CardAboutComponent {
@Input()
titleGreet:string=""
@Input()
titleShow:string=""
@Input()
titleFunction:string=""
@Input()
imageCard:string=""
@Input()
contaticIcon:string=""

openWhatsappContatic(){
  window.open("https://wa.me/+5561992866980","_blank");
}

}
