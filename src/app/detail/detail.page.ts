import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokedexService} from "../services/pokedex.service";

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss'],
})
export class DetailPage {

    private name: string;
    private number: string;
    private link: string;
    private typeOne: string;
    private typeTwo: string;
    private species: string;
    private height: string;
    private weight: string;
    private abilitieOne: string;
    private abilitieTwo: string;
    private evYield: string;
    private catchRate: string;
    private baseHappiness: string;
    private baseExp: string;
    private growthRate: string;
    private eggGroupOne: string;
    private eggGroupTwo: string;
    private gender: string;
    private eggCycles: string;
    private evoSize: string;
    private evolutions: {};

    constructor(
        private route: ActivatedRoute,
        private pokedexService: PokedexService
    ) {
        this.route.params.subscribe(params => {

            if (params.hasOwnProperty('id')) {

                let id = params.id;
                const pokemon = pokedexService.find(id);

                this.name = pokemon.name;
                this.number = pokemon.number;
                this.link = pokemon.link;
                this.typeOne = pokemon.typeOne;
                this.typeTwo = pokemon.typeTwo;
                this.species = pokemon.species;
                this.height = pokemon.height;
                this.weight = pokemon.weight;
                this.abilitieOne = pokemon.abilitieOne;
                this.abilitieTwo = pokemon.abilitieTwo;
                this.evYield = pokemon.evYield;
                this.catchRate = pokemon.catchRate;
                this.baseHappiness = pokemon.baseHappiness;
                this.baseExp = pokemon.baseExp;
                this.growthRate = pokemon.growthRate;
                this.eggGroupOne = pokemon.eggGroupOne;
                this.eggGroupTwo = pokemon.eggGroupTwo;
                this.gender = pokemon.gender;
                this.eggCycles = pokemon.eggCycles;
                this.evoSize = pokemon.evoSize;
                this.evolutions = pokemon.evolutions;

            }

        });
    }
}
