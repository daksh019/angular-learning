import { Component, Output, EventEmitter } from "@angular/core";
import { MessageType } from "./IMessageType";

@Component({
    selector: 'createMessageForm',
    template: `
        <div class="card card-block m-t-1"> 
            <h4 class="card-title">Create Messages</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter the first line" #fLI>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter the second line" #sLI>
            </div>
            <button type="button" class="btn btn-primary" (click)="emitCreatedMessage(fLI.value, sLI.value)">Create</button>
            <button type="button" class="btn btn-danger m-l-1" (click)="emitRemoveMessage()">Remove</button>
        </div>
    `
})

export class CreateMessageForm {
    @Output() messageEmitter = new EventEmitter<MessageType>();
    @Output() messageRemoveEmitter = new EventEmitter();

    emitCreatedMessage(fli: string, sli: string){
        console.log("attmpt to emit the created message");
        this.messageEmitter.emit({
            firstLine: fli, 
            secondLine: sli,
            hide: false
        });
    }

    emitRemoveMessage(){
        console.log("attmpt to emit the remove message");
        this.messageRemoveEmitter.emit();
    }
}
