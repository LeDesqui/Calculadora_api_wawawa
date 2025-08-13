import React, { useState } from 'react';
import { EnviarNumero } from './Scripts';
function Calculadora() {
    const [pantalla, setPantalla] = useState("0");


    const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const teclas = ["C", "-+", "%", "+", "-", "x", "/", ".", "<-", "="];

    const ponerNumeros = (numero) => {
        if (pantalla === "0" || pantalla === "ERROR") {
            setPantalla(numero);
        } else {
            setPantalla(pantalla + numero);
        }

        if(pantalla.charAt(pantalla.length-1) === "%"){
            setPantalla("ERROR")
        }
    };

    const ponerTeclas = (tecla) => {
        const teclasR = ["%", "+", "-", "x", "/", "."]
        if(tecla === "="){
            EnviarNumero(pantalla,setPantalla);


        }
        if (tecla === "C") {
            setPantalla("0");
        }else if (tecla === "<-") {
            if(pantalla=== "ERROR" || pantalla=== "NaN"){
                setPantalla("0");
            }else{
                setPantalla(pantalla.slice(0, -1) || "0");

            }
        }

        if(teclasR.includes(tecla)){
            if(numeros.includes(pantalla.charAt(pantalla.length-1))) {
                setPantalla(pantalla + tecla);
            }
            if(numeros.includes(pantalla.charAt(pantalla.length-2)) && pantalla.charAt(pantalla.length-1) === "%"  && tecla !== "%"){
                setPantalla(pantalla + tecla);
            }
        }
        if(tecla == "-+"){
            if(pantalla === "ERROR" || pantalla.charAt(0)==="-"){
                setPantalla(pantalla);
            }else{
                setPantalla("-" + pantalla)

            }
        }

    };



    return (
        <div className="Calculadora" id="CalcPrincipal">
            <div className="Calculadora" id="CalcBotones">
                <div className="Resultado" id="result">
                    <div className="Resultado" id="NumeroResultado">{pantalla}</div>
                </div>

                {teclas.map((tecla) => (
                    <button
                        key={tecla}
                        className="Tecla"
                        id={tecla}
                        onClick={() => ponerTeclas(tecla)}
                    >
                        {tecla}
                    </button>
                ))}

                {numeros.map((num) => (
                    <button
                        key={num}
                        className="Numero"
                        onClick={() => ponerNumeros(num)}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculadora;
