import { Component, Input,OnInit } from '@angular/core';
@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent implements OnInit {
  @Input()
  id: string= "0";
  @Input()
  photoCover: string = "";
  @Input()
  contentTitle: string = "";
  @Input()
  contentSubTitle: string = "";
  constructor() {
   
  }
  ngOnInit(): void {
     
  } 
}