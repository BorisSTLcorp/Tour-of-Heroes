import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Hero } from "../interface/hero";
import { HEROES } from "../mock-heroes";

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES);
        return heroes;
    }
}
