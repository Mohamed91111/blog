import { Component, OnInit } from '@angular/core';
import { ObjectService} from '../data.service';
import { BlogInterface } from '../data.service';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})
export class LatestArticleComponent implements OnInit {
  Article:BlogInterface[]=[];

  constructor(public ObjectService:ObjectService) {}

  ngOnInit(): void {
    this.Article=this.ObjectService.getLatestArticle();
    
  }

}
