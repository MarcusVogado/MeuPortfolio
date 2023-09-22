import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css',]
})
export class NavComponentComponent implements OnInit {
 
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

  

