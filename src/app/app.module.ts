import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllArticlesComponent,
    NewArticleComponent,
    LatestArticleComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
