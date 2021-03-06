import { SocketIoChatPage } from './../../../e2e/app.po';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from '../../vendor/socket.io-client/socket.io';

export class ChatService {
    private url = 'http://localhost:8000';
    private socket: any;

    sendMessage(message: string){
        this.socket.eit('add-message', message);
    }

    getMessages(){
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('message', (data: any) =>{
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            }
        })
        return observable;
    }
} 