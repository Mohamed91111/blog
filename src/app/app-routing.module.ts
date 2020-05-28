import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { LogInComponent } from './log-in/log-in.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'latest-article', component: LatestArticleComponent, pathMatch: 'full'},
  { path: 'all-articles', component: AllArticlesComponent, pathMatch: 'full'}, 
  { path: 'new-article', component: NewArticleComponent, pathMatch: 'full'},
  { path: 'log-In', component: LogInComponent, pathMatch: 'full' },
  { path: 'login', redirectTo: '/loga-in' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
