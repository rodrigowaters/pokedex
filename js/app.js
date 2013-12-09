var pokedeck = {};
function view(id) {
    $.mobile.loading('show');
    var page_detals = "#detals";
    var pokemon = pokedeck[id];
    $(page_detals).find('div[data-role="header"] h1').text(pokemon.name);
    var detals = $(page_detals).find('div[role="main"]');
    detals.find('#image img').prop('src', 'images/pokemons/' + pokemon.link);
    for (var i in pokemon) {
        detals.find('#' + i).val(pokemon[i]);
    }
    $.mobile.changePage(page_detals, {transition: "flow", changeHash: false});
    $.mobile.loading("hide");
}
$.mobile.document.on("pageinit", "#dashboard", function() {
    $.mobile.loading('show');
    $.getJSON('pokemon.json', {}, function(json) {
        pokedeck = json[0];
        for (var i in pokedeck) {
            var number = pokedeck[i].number;
            var name = pokedeck[i].name;
            var image = pokedeck[i].link;
            $('#conteiner ul').append('<li onclick="view(' + i + ')">\n\
                                            <a href="#">\n\
                                                <img src="images/pokemons/' + image + '">\n\
                                                <h2>' + name + '</h2>\n\
                                                <p>#' + number + '</p>\n\
                                             </a>\n\
                                        </li>');
        }
        $('#conteiner ul').listview("refresh");
        $.mobile.loading("hide");
    });
});