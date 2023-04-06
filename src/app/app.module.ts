import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from "./heroes/heroes.module";

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/components/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        HeroesModule,
        AppRoutingModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
