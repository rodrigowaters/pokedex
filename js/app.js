$(document).ready(function() {
    var $pokemons = {};
    var $page_main = $('main#main');
    var $page_view = $('main#view');
    $.getJSON("pokemon.json", function($data) {
        var $item = [];
        $.each($data, function($number, $pokemon) {
            $pokemons[$number] = $pokemon;
            var $template = '<li id_pokemon="' + $number + '" class="item item-avatar item-button-right"><img src="images/pokemons/' + $pokemon.link + '"><h2>' + ($pokemon.name).toUpperCase() + '</h2><p>' + $pokemon.number + '</p><button class="button button-positive"><i class="icon ion-arrow-right-a"></i></button></li>';
            $item.push($template);
        });
        $("<ul/>", {
            "class": "list",
            html: $item.join("")
        }).appendTo("main#main article").find("li.item").click(function() {
            var $nodeIndex = $(this).attr('id_pokemon');
            var $pokemon = $pokemons[$nodeIndex];
            var $audio = 1;
            
            var $content_to_append = '<li class="item item-divider">Descrição</li><li class="item">' + $pokemon.description + '</li>';
            $content_to_append += '<li class="item item-divider">Ator</li><li class="item"">' + $pokemon.actor + '</li>';

            $page_view.find('header div.title').html($pokemon.name);
            $page_view.find('img').prop('src', 'images/pokemons/' +$pokemon.link);
            for (var i in $pokemon) {
                $page_view.find('article #' + i).val($pokemon[i]);
            }

            $page_view.find('li.list').html($content_to_append);
            $page_main.removeClass('left_to_main').addClass('main_to_left');
            $page_view.removeClass('main_to_right').addClass('right_to_main');
        });
    });
    $page_main.find('header.bar-subheader div.bar-header button').click(function() {
        var $query = $.trim($page_main.find('header.bar-subheader div.bar-header input').val());
        if ($query) {
            $page_main.find('article ul li').hide();
            $page_main.find("article ul li h2:contains('" + ($query.toUpperCase()) + "')").closest('li').fadeIn();
        } else {
            $page_main.find('article ul li').show();
        }
    });
    $page_view.find('header button').click(function(){
        $page_main.removeClass('main_to_left').addClass('left_to_main');
        $page_view.removeClass('right_to_main').addClass('main_to_right');
    });
});