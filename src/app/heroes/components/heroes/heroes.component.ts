import { Component } from '@angular/core';
import { Hero } from "src/app/heroes/interface/hero";
import { HEROES } from "src/app/heroes/mock-heroes";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

    public heroes = HEROES;

    public selectedHero?: Hero;
    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
