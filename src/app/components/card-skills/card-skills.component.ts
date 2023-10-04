import { Component, Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css']
})
export class CardSkillsComponent  implements OnInit{
@Input()
  cardSkillPhoto:string=""
  @Input()
  cardSkillDescription:string=""
  constructor(){

  }
  ngOnInit(): void {
    
  }
  
}
