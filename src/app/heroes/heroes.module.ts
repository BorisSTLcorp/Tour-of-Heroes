import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        HeroesComponent,
    ],
})
export class HeroesModule { }
