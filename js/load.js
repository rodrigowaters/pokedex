$(document).ready(function() {
    $('p').each(function() {
        var name = $(this).text();
        name = name.replace("'",'');
        var url = 'http://www.nihonproject.com.br/webservices/pokemondb/pokemonpage.php?name=' + name + '&plataforma=firefoxos&callback=detal_callback';
        var script = '<script type="application/javascript" src="' + url + '"></script>';
        $('head').append(script);
    });
});
function detal_callback(json){
    $.ajax('create.php',{
        method : 'post',
        data : json
    });
}