import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-article',
  templateUrl: './title-article.component.html',
  styleUrls: ['./title-article.component.css']
})
export class TitleArticleComponent {
  @Input()
  titleArticle: String = ""
}
