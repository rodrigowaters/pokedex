angular.module('pokedex.controllers', [])

        .controller('PokemonsCtrl', function ($scope, $mdDialog, Pokemon_model) {

            $scope.pokemons = [];

            $scope.showPokemon = function(pokemonId)
            {
                $mdDialog.show({
                    templateUrl: 'template/dialog.tmpl.html',
                    controller: 'PokemonDetailCtrl',
                    locals: {
                        pokemon: $scope.pokemons[pokemonId]
                    },
                    parent: angular.element(document.body),
                    clickOutsideToClose:true,
                    fullscreen: true
                });

            };

            Pokemon_model.all().success(function ($pokemons) {
                $scope.pokemons = $pokemons;
            });

        })

        .controller('PokemonDetailCtrl', function ($scope, $mdDialog, pokemon) {
            $scope.pokemon = {};
            $scope.pokemon.info = pokemon;
            $scope.pokemon.header = {
                name: pokemon.name,
                link: pokemon.link
            };
            $scope.pokemon.evolutions = pokemon.evolutions;

            delete $scope.pokemon.info.link;
            delete $scope.pokemon.info.evolutions;

            $scope.closeDialog = function() {
                $mdDialog.hide();
            }
        });