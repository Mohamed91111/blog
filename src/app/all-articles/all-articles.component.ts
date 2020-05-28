import { Component, OnInit } from '@angular/core';
import { ObjectService} from '../data.service';
import { BlogInterface } from '../data.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  Article: BlogInterface[];
  


  deleteArticleButton(data){
this.ObjectService.deleteData(data);
this.Article=this.ObjectService.getArticle();
  }
 
  constructor(public ObjectService:ObjectService) { }

  ngOnInit(): void {
    this.Article=this.ObjectService.getArticle();
  
  }

}
