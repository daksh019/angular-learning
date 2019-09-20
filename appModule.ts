import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyFirstComponent } from  './firstComponent';

@NgModule({
    imports: [BrowserModule],
    declarations: [MyFirstComponent],
    bootstrap: [MyFirstComponent]
})
export class AppModule {

}



platformBrowserDynamic().bootstrapModule(AppModule);