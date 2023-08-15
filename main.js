$(document).ready(() => {
    $('form').on('submit', function (e) {
        e.preventDefault();

        let liste = $('.lista');

        const novaAtividade = $('input').val();
        const novoItem = $(`<li>${novaAtividade}</li>`);

        $(novoItem).appendTo(liste)
    });

    $('.lista').on('click','li',function(){
        $(this).addClass('concluido');
        console.log('ok')
        
    });
});