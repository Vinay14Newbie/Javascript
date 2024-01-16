const form = document.querySelector('form');

//this usecase will give you empty
// const height = parseInt(document.querySelector('height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    // Here, 'value' property is used to get the current value of the selected input element. 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);   
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height, ${height} is not valid`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight, ${weight} is not valid`;
    }
    else{
        const bmi = weight / ((height/100) * (height/100).toFixed(2))  //toFixed(2) for only two extra decimal after point 
        result.innerHTML = bmi

        document.querySelector('.under').style.color = 'black'
        document.querySelector('.normal').style.color = 'black'
        document.querySelector('.over').style.color = 'black'

        if(bmi <= 18.6){
            document.querySelector('.under').style.color = 'yellow'
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            document.querySelector('.normal').style.color = 'green'
        }
        else{
            document.querySelector('.over').style.color = 'red'
        }
    }

})