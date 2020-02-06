import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokedexService} from "../services/pokedex.service";

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss'],
})
export class DetailPage {

    public name: string;
    public number: string;
    public link: string;
    public typeOne: string;
    public typeTwo: string;
    public species: string;
    public height: string;
    public weight: string;
    public abilitieOne: string;
    public abilitieTwo: string;
    public evYield: string;
    public catchRate: string;
    public baseHappiness: string;
    public baseExp: string;
    public growthRate: string;
    public eggGroupOne: string;
    public eggGroupTwo: string;
    public gender: string;
    public eggCycles: string;
    public evoSize: string;
    public evolutions: {};

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
