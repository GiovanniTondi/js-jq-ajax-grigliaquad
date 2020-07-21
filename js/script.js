
function creaGriglia() {

    var target = $('#container');

    for (var i = 0; i < 36; i++) {
        target.append('<div class="cella"></div>');
    }
}

function addCellListener() {

    $('.cella').click(function () {

        var target = $(this);

        if (!(target.hasClass('green') || target.hasClass('yellow'))) {
            getApiFromServer(target);
        }
    });
}

function getApiFromServer(target) {

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: ret = function (data, state) {

            var success = data['success'];
            var value = data['response'];

            if (success) {

                target.text(value);
                if (value <= 5) {
                    target.addClass('yellow');
                } else {
                    target.addClass('green');
                }
            } else {
                console.log('error');
            }
        },
        error: function (request, state, error) {
            console.log(request);
        }
    })

}


function init() {

    creaGriglia();
    addCellListener();
}

$(document).ready(init);
