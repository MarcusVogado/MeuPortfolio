import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarOpenAnimation, SidebarCloseAnimation } from "./animation-menu";
import { transition, trigger, useAnimation } from "@angular/animations";

const animationParams = {
  menuWidth: "260px",
  animationStyle: "500ms ease"
};

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css'],
  animations: [
    trigger("sideMenu", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams
          }
        })
      ])
    ])
  ]
})
export class AsideBarComponent implements OnInit {
  isOpen = false;
  
  
  
 
  constructor() {
  }
  ngOnInit(): void {
    this.checkScreenSize();
  }
  checkScreenSize(): void {
    this.isOpen = window.innerWidth > 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }
  
}
