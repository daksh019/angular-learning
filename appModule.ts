import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyFirstComponent } from  './firstComponent';
import { MyFirstComponentList } from  './firstComponentList';
import { CreateMessageForm } from  './MessageForm';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        MyFirstComponent, 
        MyFirstComponentList,
        CreateMessageForm
    ],
    bootstrap: [ MyFirstComponentList]
})
export class AppModule {

}



platformBrowserDynamic().bootstrapModule(AppModule);