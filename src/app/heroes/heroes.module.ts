import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { HeroesComponent } from './components/heroes/heroes.component';


@NgModule({
    declarations: [
        HeroesComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        HeroesComponent
    ],
})
export class HeroesModule { }
