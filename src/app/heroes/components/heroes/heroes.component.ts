import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/heroes/interface/hero";
import { HeroService } from '../../services/hero.service';
import { MessageService } from "src/app/messages/services/message.service";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    public heroes: Hero[] = [];

    public selectedHero?: Hero;

    constructor(private heroService: HeroService, private messageService: MessageService) { }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
    }

    public getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes()
    }
}
