import { Component } from "@angular/core";
import { MessageType } from "./IMessageType";

class MessageClass implements MessageType  {
    firstLine: String;
    secondLine: String;
    hide: Boolean;

    constructor (line1: String, line2: String, hidden?:Boolean) {
        this.firstLine = line1;
        this.secondLine = line2;
        this.hide = hidden === true;
    }
}

// the template has access to the class variables 
// of the componenent that its attached to
@Component({
    selector: 'firstCompList',
    template: `
        <firstComp *ngFor="let msg of msgs" [message]="msg"> </firstComp>
        <div>
            <a class="btn btn-primary" (click)=toggleAll()> Toggle all! </a>
        </div>
        <createMessageForm (messageEmitter)="addToMessages($event)" (messageRemoveEmitter)="removeMessages($event)"
        ></createMessageForm>
    `
})
export class MyFirstComponentList {
    msgs: MessageType[];

    constructor(){
        this.msgs = [
            new MessageClass("Hello!", "This is my first angular app", false),
            new MessageClass("This is going to get better.", "Cause this is just a list repeated for the first time", true),
            new MessageClass("NG FOR", "This is a directive used for the repetition of the compenents in ng", false)
        ];
    }
    
    toggleAll () {
        if(this.msgs.length > 0){
            this.msgs.forEach((msg) => {
                msg.hide = !msg.hide;
            });
        }
    }

    addToMessages(messageEvent: any){
        console.log("addToMessages is being called");
        console.log(messageEvent);
        this.msgs.unshift(messageEvent);
    }

    removeMessages(){
        console.log("remove messages called");
        if(this.msgs.length > 3){
            this.msgs.shift();
        }
    }
}
