import { Component, OnInit } from '@angular/core';
import { ObjectService} from '../data.service';
import { BlogInterface  } from '../data.service';
import { LogInOutService} from '../log-in.service';


@Component({
  selector: 'app-create-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  all:BlogInterface;
  lessons:boolean;
  loading:boolean=false;
  time:boolean;
  name:string;
  
  
  submitForm():void{
 this.ObjectService.addArticle(this.all);
 alert("New Articlelist has been added to the top of the article");
  }

  
  constructor(public ObjectService:ObjectService,public LogInOutService:LogInOutService) { }

  ngOnInit(): void {
    this.all=new BlogInterface("","","",null);
    this.LogInOutService.obBoolean.subscribe((data)=> {
      this.lessons=data;});
    
  
  }
  

}


