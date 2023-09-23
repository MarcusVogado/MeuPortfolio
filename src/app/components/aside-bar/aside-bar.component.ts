import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {
 
  
  constructor() {
  }
  ngOnInit(): void {

  }
 
  goToProjetos() {
    window.open("https://marcusvogado.com/projetos", "_blank");
  }
  //Links Social Media Footer
  goToLinkedin() {
    window.open("https://www.linkedin.com/in/marcus-vogado/", "_blank");
  }
  goToGithub() {
    window.open("https://github.com/MarcusVogado", "_blank");
  }

}
