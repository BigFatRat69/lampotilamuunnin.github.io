function celsiusFahrenheit(c){
    let tulos = null;
    if (c >= -273.15){
        tulos = ((c * 9.0 / 5.0) + 32.0);
    }

    tulostenTulostus(tulos);
}

function fahrenheitCelsius(f){
    let tulos = null;
    if (f >= -460){
        tulos = ((f - 32) * 5 / 9);
    }

    tulostenTulostus(tulos);
}

function celsiusKelvin(c){
    let tulos = null;
    if (c >= -273.15){
        tulos = (c - 273.15);
    }

    tulostenTulostus(tulos);
}

function kelvinCelsius(k){
    let tulos = null;
    if (k >= 0){
        tulos = (k + 273.15);
    }

    tulostenTulostus(tulos);
}

function kelvinFahrenheit(k){
    let tulos = null;
    if (k >= 0){
        tulos = ((k - 273.15) * 9/5 + 32);
    }

    tulostenTulostus(tulos);
}

function fahrenheitKelvin(f){
    let tulos = null;
    if (f >= -460){
        tulos = (273.5 + ((f - 32.0) * (5.0/9.0)));
    }

    tulostenTulostus(tulos);
}


function tulostenTulostus(tulos){
    const tulosKentta = document.getElementById("tulosKentta");
    tulosKentta.innerHTML = "";
    const desimaalit = document.querySelector('input[name="question"]:checked');
    const valinta = desimaalit ? desimaalit.value : null;


    if (tulos != null && valinta != null){
        const para = document.createElement("p");
        const teksti = document.createTextNode(tulos.toFixed(valinta));

        para.appendChild(teksti);

        tulosKentta.appendChild(para);
    }
    else {
        const para = document.createElement("p");
        const teksti = document.createTextNode("Luku ei saa olla absoluuttisen nollapisteen alapuolella!!! >:(");
        para.appendChild(teksti);

        const tulosKentta = document.getElementById("tulosKentta");
        tulosKentta.appendChild(para);
    }
}

function muunnaLampotila() {
    const valikko = document.getElementById("funktioValikko");
    const valinta = valikko.value;
    const lampotila = parseFloat(document.getElementById("lampotila").value);


    switch (valinta) {
        case "celciusFahrenheit":
            celsiusFahrenheit(lampotila);
            break;
        case "fahrenheitCelsius":
            fahrenheitCelsius(lampotila);
            break;
        case "celsiusKelvin":
            celsiusKelvin(lampotila);
            break;
        case "kelvinCelsius":
            kelvinCelsius(lampotila);
            break;
        case "kelvinFahrenheit":
            kelvinFahrenheit(lampotila);
            break;
        case "fahrenheitKelvin":
            fahrenheitKelvin(lampotila);
            break;
    }

}