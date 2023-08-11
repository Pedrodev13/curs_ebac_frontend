const form = document.getElementById('form-maior')
const campoa = document.getElementById('campoa')
const campob = document.getElementById('campob')

function Validacao (cA, cB){
    const maiorA = cA < cB;
    return maiorA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const sucess = `O numero ${campob.value} é maior que ${campoa.value}!`
    let inputValida = false;

    inputValida = Validacao(campoa.value, campob.value)

    if(!inputValida){
        campoa.style.border = '1px solid red'
        document.querySelector('.error').style.display = 'block';
        
    }else{
        const caixasucess = document.querySelector('.sucess')
        caixasucess.innerHTML = sucess;
        caixasucess.style.display = 'block'
        document.querySelector('.error').style.display = 'none'
        campoa.style.border = '1px solid black'
    }

    if(!inputValida){
        const caixasucess = document.querySelector('.sucess')
        caixasucess.innerHTML = sucess;
        caixasucess.style.display = 'none'
    }
    

})
