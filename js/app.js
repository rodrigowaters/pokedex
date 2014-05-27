var pokedeck = {};
function loading() {
}
function back() {
    $('#view').removeClass('current').addClass('left');
    $('#index').removeClass('left').addClass('current');
}
function view(id) {
    var pokemon = pokedeck[id];
    var form = $('#view');
    form.find("header h1").text(pokemon.name);
    form.find('article header img').prop('src', 'images/pokemons/' + pokemon.link);
    for (var i in pokemon) {
        form.find('article #' + i).val(pokemon[i]);
    }
    $('#view').addClass('current');
    $('#index').addClass('left');
}
$(document).ready(function() {
    $.getJSON('pokemon.json', {}, function(json) {
        pokedeck = json[0];
        for (var i in pokedeck) {
            var html = '<li onclick="view(' + i + ')"><aside class="pack-end"><p>#' + (pokedeck[i].number) + '</p></aside><a href="#"><p>' + (pokedeck[i].name) + '</p></a></li>';
            $('#index article ul').append(html);
        }
        $('#index form input').keyup(function() {
            var text = $.trim($(this).val());
            if (text) {
                $('#index article ul li').hide();
                $("#index article ul li a p:first-child:contains('" + (text.toUpperCase()) + "')").closest('li').fadeIn();
            } else {
                $('#index article ul li').show();
            }
        });
        $('#index form button').click(function() {
            $('#index article ul li').show();
        });
    });
});