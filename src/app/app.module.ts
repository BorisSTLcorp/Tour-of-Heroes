import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from "./heroes/heroes.module";

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/components/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
    ],
    imports: [
        BrowserModule,
        HeroesModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
