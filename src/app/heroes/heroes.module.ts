import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { HeroSearchComponent } from "src/app/heroes/components/hero-search/hero-search.component";



@NgModule({
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    exports: [
        HeroesComponent,
        HeroSearchComponent,
    ],
})
export class HeroesModule { }
