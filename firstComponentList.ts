import { Component } from "@angular/core";

@Component({
    selector: 'firstCompList',
    template: `
        <div class="card card-block" *ngFor="let msg of msgs">
            <h4 class="card-title"> {{ msg.firstLine }} </h4>
            <p class="card-text"> {{ msg.secondLine }} </p>
        </div> 
    `
})
export class MyFirstComponentList {
    msgs: Object[];

    constructor(){
        this.msgs = [{
            firstLine: "Hello!",
            secondLine: "This is my first angular app"
        }, {
            firstLine: "This is going to get better.",
            secondLine: "Cause this is just a list repeated for the first time"
        }, {
            firstLine: "NG FOR",
            secondLine: "This is a directive used for the repetition of the compenents in ng"
        }];
    }
}


