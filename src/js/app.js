function onSearch() {
    let request = {
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2987616474588246/' + 'search/' + $('#search').val()
    };
    $.ajax(request)
        .then(displayHero)
        .catch(displayError);
};

function displayHero(hero) {

    $("#heroInfo").empty();
    $("#errorHero").empty();

    let results = hero.results;
    results.forEach(r => {

        $div = $('<div', {
            class: 'card-body p-5'
        });

        $h1 = $('<h1>', {
            class: 'font-weight-light text-center'
        });
        $h1.text(`${r.name}`);

        $img = $('<img />', {
            src: r.image.url,
            width: 200,
            class: 'mx-auto'
        });

        $p = $('<p>', {
            class: 'lead text-center'
        })
        $p.text(`Gender: ${r.appearance.gender}, ${r.appearance.race}`)
            .append($('<br>')).append(`Base: ${r.work.base}`)
            .append($('<br>')).append(`Relatives: ${r.connections.relatives}`)
            .append($('<br>')).append(`Intelligence: ${r.powerstats.intelligence}`)
            .append($('<br>')).append(`Strength: ${r.powerstats.strength}`)
            .append($('<br>')).append(`Power: ${r.powerstats.power}`)
            .append($('<br>')).append(`Combat: ${r.powerstats.combat}`)
            .append($('<br>')).append(`Speed: ${r.powerstats.speed}`)
            ;


        $('#heroInfo').append($div).append($h1).append($img).append($p);

        $('#spinner').hide();

    });

}

function displayError() {

    $("#heroInfo").empty();
    $("#errorHero").empty();

    $h1 = $('<h1>', {
        class: 'lead'
    })

    $("#errorHero").append($h1.append('Superhero not found.'));

    $('#spinner').hide();

}


function onSpinner() {

    $('#searchButton').click(
        $('#spinner').show()
    );
}