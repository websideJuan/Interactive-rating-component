const form_event = document.getElementById('form_event');
const btn__form = document.getElementById('btn__form');
const container = document.querySelector('.container');
const containerTwo = document.querySelector('.containerTwo');
const form__number = document.querySelector('.form__number');
const allClass = document.querySelectorAll('.form__number')

let reting = true;

let arr = [];
    


form_event.addEventListener('click', (e) => {
    const dataSpan = e.target.dataset.numb;
    
    const validationArr = arr.indexOf(arr.length === 0);

    const zeroIndex = -1;
    
    const clickSpan = e.target.classList.contains('form__number')
    
    

    if(!e.target.classList.contains('activate')) {
        if(clickSpan){

            e.target.setAttribute('class', 'form__number activate')
        }

    }
    
    if(validationArr === zeroIndex) arr.push(dataSpan)

})



const pintarMnsj = () => {
    if(reting){
        reting = false;
        container.classList.add('d-none');

        containerTwo.classList.remove('d-none');

        containerTwo.classList.add('container');

        arr.map(numb => {
            containerTwo.innerHTML = `
            <div class='flexDinamic'>
                
                <img src="./images/illustration-thank-you.svg" alt="">
                
                <span class='textDinamic'>You selected ${numb} out of 5</span>

                <h1 class='textTitle'>Thank you</h1>
                
                <p class='paragraph'>
                    We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!
                </p>
            
            </div>
            `
        });
    };
};





btn__form.addEventListener('click', () => {
    const num = 0;
    if(arr.length === num){
        return
    }else{
        pintarMnsj()
    }
})









