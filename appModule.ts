import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyFirstComponent } from  './firstComponent';
import { MyFirstComponentList } from  './firstComponentList';

@NgModule({
    imports: [BrowserModule],
    declarations: [MyFirstComponent, MyFirstComponentList],
    bootstrap: [ MyFirstComponentList]
})
export class AppModule {

}



platformBrowserDynamic().bootstrapModule(AppModule);