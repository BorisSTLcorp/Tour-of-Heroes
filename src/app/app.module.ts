import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HeroesModule } from "./heroes/heroes.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/components/messages.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


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
        RouterModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
