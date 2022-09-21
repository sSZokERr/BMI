function reset(){
        document.getElementById('harmadik').style = 'background-color: white;' 
        document.getElementById('masodik').style = 'background-color: white;' 
        document.getElementById('elso').style = 'background-color: white;' 
        document.getElementById('tul').style = 'background-color: white;' 
        document.getElementById('nor').style = 'background-color: white;' 
        document.getElementById('sov').style = 'background-color: white;'
}

function bmi() {
	let egyikszam = document.getElementById('meret').value;
	let masikszam = document.getElementById('kg').value;
    let a = (parseFloat(masikszam) / (parseFloat(egyikszam / 100) * (parseFloat(egyikszam / 100))));
    let result = a.toFixed(2)
	document.getElementById('ered').textContent = result;
    reset();

    if(result > 40){
        document.getElementById('harmadik').style = 'background-color: #FFA500;';
        document.getElementById('harmadik').style = 'color: white;'
    }else if(result < 40 && result >= 34.9){
        document.getElementById('masodik').style = 'background-color: #FFA500;'
    }else if(result < 34.9 && result >= 29.9){
        document.getElementById('elso').style = 'background-color: #FFA500;' 
    }else if(result < 29.9 && result >= 24.9){
        document.getElementById('tul').style = 'background-color: #FFA500;'
    }else if(result < 24.9 && result >= 18.6){
        document.getElementById('nor').style = 'background-color: #FFA500;' 
    }else if(result <= 18.5){
        document.getElementById('sov').style = 'background-color: #FFA500;'
    }
}

document.getElementById('szamit').addEventListener('click', bmi)