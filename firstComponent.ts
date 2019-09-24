// components help create a new html addon tags.
// so angular apps are built on these custom tags. 
// the behaviour of the annotations has to be either written by self 
// or defined by the framework using/defining them.

import { Component } from "@angular/core";
import { MessageType } from "./IMessageType";
import { Input } from '@angular/core';

@Component({
    selector: 'firstComp', // the selectors will be treated by the angular as valid html tags 
                          // and then replace those tags with the component.  
    template: `
        <div class="card card-block">
            <h4 class="card-title"> {{ message.firstLine }} </h4>
            <p class="card-text" [hidden]="message.hide"> {{ message.secondLine }} </p>
        </div> 
        `
})
export class MyFirstComponent {
    @Input('message') message: MessageType;
}


