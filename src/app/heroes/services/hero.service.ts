import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Hero } from "../interface/hero";
import { HEROES } from "../mock-heroes";

import { MessageService } from "src/app/messages/services/message.service";

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    public getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES);
        this.messageService.add('HeroService: fetched heroes');
        return heroes;
    }

    public getHero(id: number): Observable<Hero> {
        const hero = HEROES.find(item => item.id === id)!;
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
    }

}
