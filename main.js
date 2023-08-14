$(document).ready(() => {
    $('form').on('submit', function (e) {
        e.preventDefault();

        let liste = $('.lista')

        const novaAtividade = $('input').val();
        const novoItem = $(`<li>${novaAtividade}</li>`);

        $(novoItem).appendTo(liste)
    });

    $('.lista').click(function(){
        $(this).addClass('concluido');
    });
});