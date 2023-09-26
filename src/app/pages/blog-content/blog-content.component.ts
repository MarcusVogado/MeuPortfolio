import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataBlog } from 'src/app/data/dataBlog';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
 private id:string | null="0";
 constructor( private route:ActivatedRoute){}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => console.log(value.get("id")));
  }
  
  setValuesToComponent(id:string|null){    
    const result = dataBlog.filter(article=> article.id ===id)[0];


  }

}

