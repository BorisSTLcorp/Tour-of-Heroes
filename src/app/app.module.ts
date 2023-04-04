import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesModule } from "./heroes/heroes.module";

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
