import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/heroes/interface/hero";
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    public heroes: Hero[] = [];

    public selectedHero?: Hero;

    constructor(private heroService: HeroService) { }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes()
    }
}
