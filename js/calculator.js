(function() {
    var c = document.currentScript.getAttribute("data-calc");

    if (c === "1") {
        window.calcola = function() {
            var e = parseFloat(document.getElementById("resistance").value),
                t = parseFloat(document.getElementById("voltage").value),
                a = parseFloat(document.getElementById("current").value);
            var l = "";
            if ((!isNaN(e) && !isNaN(t)) || (!isNaN(e) && !isNaN(a)) || (!isNaN(t) && !isNaN(a))) {
                if (isNaN(e)) l = "Resistenza: " + formatResult(t / a) + " Ohm";
                else if (isNaN(t)) l = "Tensione: " + formatResult(a * e) + " Volt";
                else if (isNaN(a)) l = "Corrente: " + formatResult(t / e) + " Ampere";
                else l = "Inserisci solo due valori per calcolare il terzo.";
            } else {
                l = "Per favore inserisci due valori per calcolare l'altra variabile.";
            }
            document.getElementById("result").innerText = l;
        };

        function formatResult(e) {
            var t = e.toString();
            return t.indexOf(".") !== -1 ? t.replace(/0+$/, "").replace(/\.$/, "") : t;
        }
    } else if (c === "2") {
        window.calcola = function() {
            var e = parseFloat(document.getElementById("voltage").value),
                t = parseFloat(document.getElementById("current").value),
                n = parseFloat(document.getElementById("power").value);
            var l = "";
            if ([e, t, n].filter(function(e) { return !isNaN(e); }).length !== 2) {
                l = "Per favore inserisci esattamente due valori.";
            } else {
                if (isNaN(n)) l = "Potenza: " + formatResult(e * t) + " Watt";
                else if (isNaN(e)) l = "Tensione: " + formatResult(n / t) + " Volt";
                else if (isNaN(t)) l = "Corrente: " + formatResult(n / e) + " Ampere";
            }
            document.getElementById("result").innerText = l;
        };

        window.reset = function() {
            document.getElementById("voltage").value = "";
            document.getElementById("current").value = "";
            document.getElementById("power").value = "";
            document.getElementById("result").innerText = "";
            document.getElementById("voltage").placeholder = "Tensione (Volt)";
            document.getElementById("current").placeholder = "Corrente (Ampere)";
            document.getElementById("power").placeholder = "Potenza (Watt)";
        };

        function formatResult(e) {
            var t = e.toString();
            return t.indexOf(".") !== -1 ? t.replace(/0+$/, "").replace(/\.$/, "") : t;
        }
    } else if (c === "3") {
        window.onload = function() {
            resetPlaceholders();
        };

        function resetPlaceholders() {
            document.getElementById("R1").placeholder = "Valore";
            document.getElementById("R2").placeholder = "Valore";
            document.getElementById("final-result").placeholder = "Risultato";
        }

        var r = 2;

        function calculateResistance() {
            var t = 0;
            for (var e = 1; e <= r; e++) {
                var n = parseFloat(document.getElementById("R" + e).value),
                    l = parseFloat(document.getElementById("unit-R" + e).value);
                if (!isNaN(n)) {
                    t += n * l;
                }
            }
            var e = parseFloat(document.getElementById("result-unit").value);
            t /= e;
            document.getElementById("final-result").value = t.toFixed(4);
        }

        document.getElementById("add-resistor").addEventListener("click", function() {
            r++;
            var e = document.createElement("div");
            e.className = "valore-r";
            e.innerHTML = '<label for="R' + r + '">Resistore ' + r + ':</label><div class="input-select-container"><input type="number" id="R' + r + '" placeholder="Valore"><select id="unit-R' + r + '"><option value="1">Ω</option><option value="1000">kΩ</option><option value="1000000">MΩ</option></select></div>';
            document.getElementById("resistor-container").appendChild(e);
        });

        document.getElementById("calculate").addEventListener("click", calculateResistance);

        document.getElementById("result-unit").addEventListener("change", function() {
            calculateResistance();
        });

        document.getElementById("reset").addEventListener("click", function() {
            for (var e = 1; e <= r; e++) {
                document.getElementById("R" + e).value = "";
            }
            document.getElementById("final-result").value = "";
            var e = document.getElementById("resistor-container");
            while (e.children.length > 2) {
                e.removeChild(e.lastChild);
            }
            r = 2;
            resetPlaceholders();
        });
    } else if (c === "4") {
        window.onload = function() {
            resetPlaceholders();
        };

        function resetPlaceholders() {
            document.getElementById("R1").placeholder = "Valore";
            document.getElementById("R2").placeholder = "Valore";
            document.getElementById("final-result").placeholder = "Risultato";
        }

        var r = 2;

        function calculateResistance() {
            var t = 0;
            for (var e = 1; e <= r; e++) {
                var n = parseFloat(document.getElementById("R" + e).value),
                    l = parseFloat(document.getElementById("unit-R" + e).value);
                if (!isNaN(n)) {
                    t += 1 / (n * l);
                }
            }
            if (t > 0) {
                var e = 1 / t;
                e /= parseFloat(document.getElementById("result-unit").value);
                document.getElementById("final-result").value = e.toFixed(4);
            } else {
                document.getElementById("final-result").value = "Errore";
            }
        }

        document.getElementById("add-resistor").addEventListener("click", function() {
            r++;
            var e = document.createElement("div");
            e.className = "valore-r";
            e.innerHTML = '<label for="R' + r + '">Resistore ' + r + ':</label><div class="input-select-container"><input type="number" id="R' + r + '" placeholder="Valore"><select id="unit-R' + r + '"><option value="1">Ω</option><option value="1000">kΩ</option><option value="1000000">MΩ</option></select></div>';
            document.getElementById("resistor-container").appendChild(e);
        });

        document.getElementById("calculate").addEventListener("click", calculateResistance);

        document.getElementById("result-unit").addEventListener("change", function() {
            calculateResistance();
        });

        document.getElementById("reset").addEventListener("click", function() {
            for (var e = 1; e <= r; e++) {
                document.getElementById("R" + e).value = "";
            }
            document.getElementById("final-result").value = "";
            var e = document.getElementById("resistor-container");
            while (e.children.length > 2) {
                e.removeChild(e.lastChild);
            }
            r = 2;
            resetPlaceholders();
        });
    }
})();
