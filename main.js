function bmi() {
	let egyikszam = document.getElementById('meret').value;
	let masikszam = document.getElementById('kg').value;
	document.getElementById('ered').textContent = parseFloat(masikszam) / (parseFloat(egyikszam / 100) * (parseFloat(egyikszam / 100)));
}

document.getElementById('szamit').addEventListener('click', bmi)