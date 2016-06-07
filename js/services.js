angular.module('pokedex.services', [])

        .factory('Pokemon_model', function ($http) {
            var Pokemon_model = {};

            Pokemon_model.all = function () {
                return $http.get('pokemon.json');
            };

            return Pokemon_model;
        });