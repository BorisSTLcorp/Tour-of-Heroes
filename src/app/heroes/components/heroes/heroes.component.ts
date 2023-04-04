import { Component } from '@angular/core';
import { Hero } from "src/app/heroes/interface/hero";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
    hero: Hero = {
        id: 1,
        name: 'Windstorm',
    }
}
