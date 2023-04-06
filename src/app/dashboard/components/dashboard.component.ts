import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/heroes/interface/hero";
import { HeroService } from "src/app/heroes/services/hero.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    public getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
