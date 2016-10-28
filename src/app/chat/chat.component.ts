import { ChatService } from './../services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages: any = [];
  message: string;
  connection: any;


  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(message => {
      console.log(message);
    });
  }

  ngOnDestroy(){
  this.connection.unsubscribe();
  }


  sendMessage(){
    this._chatService.sendMessage(this.message);
    this.message = '';
  }

}
