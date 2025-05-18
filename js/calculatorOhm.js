function calcola() {
        const resistenza = parseFloat(document.getElementById("resistance").value);
        const tensione = parseFloat(document.getElementById("voltage").value);
        const corrente = parseFloat(document.getElementById("current").value);
        let risultato = '';
        if (isNaN(resistenza) && !isNaN(tensione) && !isNaN(corrente)) {
            let res = tensione / corrente;
            risultato = 'Resistenza: ' + formatResult(res) + ' Ohm';
        } else if (isNaN(tensione) && !isNaN(resistenza) && !isNaN(corrente)) {
            let res = corrente * resistenza;
            risultato = 'Tensione: ' + formatResult(res) + ' Volt';
        } else if (isNaN(corrente) && !isNaN(resistenza) && !isNaN(tensione)) {
            let res = tensione / resistenza;
            risultato = 'Corrente: ' + formatResult(res) + ' Ampere';
        } else {
            risultato = 'Per favore inserisci due valori per calcolare l\'altra variabile.';
        }
        document.getElementById("result").innerText = risultato;
    }
    function formatResult(value) {
        let strValue = value.toString();
        if (strValue.indexOf('.') !== -1) {
            strValue = strValue.replace(/0+$/, '').replace(/\.$/, '');
        }
        return strValue;
    }
