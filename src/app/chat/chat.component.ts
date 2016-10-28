import { ChatService } from './../services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: any = [];
  message: string;
  connection: any;


  constructor(private _chatService: ChatService) { }

  ngOnInit() {
  }


  sendMessage(){
    console.log(this.message);
  }

}
