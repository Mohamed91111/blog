import { Component, OnInit } from '@angular/core';
import {LogInOutService} from '../log-in.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loggIn:boolean=true;
  loggOut:boolean;
  loginoutMessage:string;

  loggInButton(){
    this.loggIn=false;
    this.loggOut=true;
    this.loginoutMessage = "Welcome ";
    this.LogInOutService.authSend(true);
  }
  loggOutButton(){
    this.loggOut=false;
    this.loggIn=true;
    this.loginoutMessage = "See you soon"
    this.LogInOutService.authSend(false);
  }

  constructor(public LogInOutService:LogInOutService) { }

  ngOnInit(): void {
    this.LogInOutService.obBoolean.subscribe((data)=> {
      this.loggOut=data;});
  }

}
