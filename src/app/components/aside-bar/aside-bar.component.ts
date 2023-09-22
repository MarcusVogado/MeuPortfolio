import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit{
  constructor() {
   
  }
  ngOnInit(): void {
  
  }

 
  contatoPage()  {
    window.location.href = "/contact.html";
  }

   goToProjetos() {
    window.open("https://marcusvogado.com/projetos","_blank");
  }
}
