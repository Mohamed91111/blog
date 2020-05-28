import { Component, OnInit } from '@angular/core';
import { ObjectService} from '../data.service';
import { BlogInterface } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Article: BlogInterface[];
 
  constructor(public ObjectService:ObjectService) { }

  ngOnInit(): void {
    this.Article=this.ObjectService.getStartlatestArticle();
    
    
  }

}
