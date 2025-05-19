function initLeggeOhm(){function i(e){let t=e.toString();return t=-1!==t.indexOf(".")?t.replace(/0+$/,"").replace(/\.$/,""):t}document.getElementById("calcola").addEventListener("click",function(){var e=parseFloat(document.getElementById("resistance").value),t=parseFloat(document.getElementById("voltage").value),a=parseFloat(document.getElementById("current").value);let n="";n=!isNaN(e)||isNaN(t)||isNaN(a)?!isNaN(t)||isNaN(e)||isNaN(a)?!isNaN(a)||isNaN(e)||isNaN(t)?"Per favore inserisci due valori per calcolare l'altra variabile.":"Corrente: "+i(t/e)+" Ampere":"Tensione: "+i(a*e)+" Volt":"Resistenza: "+i(t/a)+" Ohm",document.getElementById("result").innerText=n})}

function initResistenzeParallelo(){function t(){document.getElementById("R1").placeholder="Valore",document.getElementById("R2").placeholder="Valore",document.getElementById("final-result").placeholder="Risultato"}let o=2;function e(){let t=0;for(let e=1;e<=o;e++){var n=parseFloat(document.getElementById("R"+e).value),l=parseFloat(document.getElementById("unit-R"+e).value);isNaN(n)||(t+=1/(n*l))}var e;0<t?(e=1/t,e/=parseFloat(document.getElementById("result-unit").value),document.getElementById("final-result").value=e.toFixed(4)):document.getElementById("final-result").value="Errore"}t(),document.getElementById("add-resistor").addEventListener("click",function(){o++;var e=document.createElement("div");e.classList.add("valore-r"),e.innerHTML=`
            <label for="R${o}">Resistore ${o}:</label>
            <div class="input-select-container">
                <input type="number" id="R${o}" placeholder="Valore">
                <select id="unit-R${o}">
                    <option value="1">Ω</option>
                    <option value="1000">kΩ</option>
                    <option value="1000000">MΩ</option>
                </select>
            </div>
        `,document.getElementById("resistor-container").appendChild(e)}),document.getElementById("calculate").addEventListener("click",e),document.getElementById("result-unit").addEventListener("change",e),document.getElementById("reset").addEventListener("click",function(){for(let e=1;e<=o;e++)document.getElementById("R"+e).value="";document.getElementById("final-result").value="";for(var e=document.getElementById("resistor-container");2<e.children.length;)e.removeChild(e.lastChild);o=2,t()})}function initResistenzeSerie(){function t(){document.getElementById("R1").placeholder="Valore",document.getElementById("R2").placeholder="Valore",document.getElementById("final-result").placeholder="Risultato"}let o=2;function e(){let t=0;for(let e=1;e<=o;e++){var n=parseFloat(document.getElementById("R"+e).value),l=parseFloat(document.getElementById("unit-R"+e).value);isNaN(n)||(t+=n*l)}var e=parseFloat(document.getElementById("result-unit").value);t/=e,document.getElementById("final-result").value=t.toFixed(4)}t(),document.getElementById("add-resistor").addEventListener("click",function(){o++;var e=document.createElement("div");e.classList.add("valore-r"),e.innerHTML=`
            <label for="R${o}">Resistore ${o}:</label>
            <div class="input-select-container">
                <input type="number" id="R${o}" placeholder="Valore">
                <select id="unit-R${o}">
                    <option value="1">Ω</option>
                    <option value="1000">kΩ</option>
                    <option value="1000000">MΩ</option>
                </select>
            </div>
        `,document.getElementById("resistor-container").appendChild(e)}),document.getElementById("calculate").addEventListener("click",e),document.getElementById("result-unit").addEventListener("change",e),document.getElementById("reset").addEventListener("click",function(){for(let e=1;e<=o;e++)document.getElementById("R"+e).value="";document.getElementById("final-result").value="";for(var e=document.getElementById("resistor-container");2<e.children.length;)e.removeChild(e.lastChild);o=2,t()})}

function initResistenzeSerie(){function t(){document.getElementById("R1").placeholder="Valore",document.getElementById("R2").placeholder="Valore",document.getElementById("final-result").placeholder="Risultato"}let d=2;function e(){let t=0;for(let e=1;e<=d;e++){var n=parseFloat(document.getElementById("R"+e).value),l=parseFloat(document.getElementById("unit-R"+e).value);isNaN(n)||(t+=n*l)}var e=parseFloat(document.getElementById("result-unit").value);t/=e,document.getElementById("final-result").value=t.toFixed(4)}t(),document.getElementById("add-resistor").addEventListener("click",function(){d++;var e=document.createElement("div");e.classList.add("valore-r"),e.innerHTML=`
            <label for="R${d}">Resistore ${d}:</label>
            <div class="input-select-container">
                <input type="number" id="R${d}" placeholder="Valore">
                <select id="unit-R${d}">
                    <option value="1">Ω</option>
                    <option value="1000">kΩ</option>
                    <option value="1000000">MΩ</option>
                </select>
            </div>
        `,document.getElementById("resistor-container").appendChild(e)}),document.getElementById("calculate").addEventListener("click",e),document.getElementById("result-unit").addEventListener("change",e),document.getElementById("reset").addEventListener("click",function(){for(let e=1;e<=d;e++)document.getElementById("R"+e).value="";document.getElementById("final-result").value="";for(var e=document.getElementById("resistor-container");2<e.children.length;)e.removeChild(e.lastChild);d=2,t()})}
        
// === SELETTORE AUTOMATICO ===
window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("[data-type]");
    if (!container) return;
    const type = container.getAttribute("data-type");
    switch (type) {
        case "ohm":
            initLeggeOhm();
            break;
        case "parallelo":
            initResistenzeParallelo();
            break;
        case "serie":
            initResistenzeSerie();
            break;
    }
});