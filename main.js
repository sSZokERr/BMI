function bmi() {
	let egyikszam = document.getElementById('meret').value;
	let masikszam = document.getElementById('kg').value;
    let a = (parseFloat(masikszam) / (parseFloat(egyikszam / 100) * (parseFloat(egyikszam / 100))));
    let result = a.toFixed(2)
	document.getElementById('ered').textContent = result;
}

document.getElementById('szamit').addEventListener('click', bmi)