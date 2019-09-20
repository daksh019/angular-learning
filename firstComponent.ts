// components help create a new html addon tags.
// so angular apps are built on these custom tags. 
// the behaviour of the annotations has to be either written by self 
// or defined by the framework using/defining them.

import { Component } from "@angular/core";

@Component({
    selector: 'firstComp', // the selectors will be treated by the angular as valid html tags 
                          // and then replace those tags with the component.  
    template: `<h1> {{ firstLine }} </h1>
              <p> {{ secondLine }} </p>`
})
export class MyFirstComponent {
    firstLine: string;
    secondLine: string;

    constructor(){
        this.firstLine = "Hello!";
        this.secondLine  = " This is the first component!!!";
    }
}


