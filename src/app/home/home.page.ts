import {Component} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {PokedexService} from "../services/pokedex.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public pokemons = {};
    private loading: HTMLIonLoadingElement;

    constructor(
        private pokedexService: PokedexService,
        private loadingController: LoadingController
    ) {

        this.presentLoading().then(() => {
            this.pokemons = pokedexService.fetch();
        }).finally(() => {
            this.loading.dismiss().then();
        });

    }

    search(ev: any) {

        // Resetar pokemons
        this.pokemons = this.pokedexService.fetch();

        // Localizar valor digitado
        const val = ev.target.value;

        // Validar se tem conteudo
        if (val && val.trim() !== '') {

            const pokemonsFiltrados = [];

            for (const key of Object.keys(this.pokemons)) {
                const pokemon = this.pokemons[key];
                if ((pokemon.name.toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                    pokemonsFiltrados[key] = pokemon;
                }
            }

            this.pokemons = pokemonsFiltrados;

        }

    }

    async presentLoading() {
        this.loading = await this.loadingController.create({
            message: 'Carregando Dados'
        });
        return await this.loading.present();
    }

}

