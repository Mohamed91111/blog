import { Injectable } from '@angular/core';

export class BlogInterface {
  constructor(
  public title: string,
  public author: string,
  public Events: string, 
  public time: number
) {}
}

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  constructor() { }
  
  Article: BlogInterface[]=[
    {
      title:'The Warm-Up', author:'Andi Thomas', Events:'Well, that didn’t take long. A couple of weeks after the Bundesliga returned, to much curiosity and fanfare, the title race is looking very over. Bayern Munich went to Borussia Dortmund for three points, got them, and are now seven points clear at the top.',
    time:20},
    {
      title:'Dortmunds latest defeat', author:'Graham Ruthven', Events:'This was Borussia Dortmund’s best chance to catch Bayern Munich at the top of the Bundesliga. Well, their best chance since the last one. And the one before that.',
    time:9},
    {
      title:'Wolfsburg stun Leverkusen', author:'Alexandre Dumas', Events:'TCroatian Marin Pongracic scored his first two Bundesliga goals as Wolfsburg romped to a surprise 4-1 win, while Frankfurt and Freiburg played out a goal fest.',
    time:11},
    {
      title:'SNOOKER WORLD CHAMPIONSHIP', author:'Khaled Hosseini', Events:'Stephen Hendry would love to see Ronnie OSullivan end his career without breaking or equalling his Crucible record of seven World Championship victories.      ',
    time:15},
  
  ]
  // show the last 4 articles by using slice method.If i add the new article show as a last article
  getLatestArticle(): BlogInterface[]{
    return this.Article.slice(0,4);
  }
  // show the all article
  getArticle(): BlogInterface[]{
    return this.Article;
  }
  // show the last article using slice method
  getStartlatestArticle(){
    return this.Article.slice(0, 1);

  }
  //add article to the top of the list by using unshift method
  addArticle(newArticle:any){
    this.Article.unshift(newArticle);
  }
  //delete the article from all article list
  deleteData(data){
    this.Article=this.Article.filter(item => item.title !== data) ;
  }
  
 
}

