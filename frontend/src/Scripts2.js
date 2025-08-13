function tomarNumero(){
    const teclasAUsar = ["%", "+", "-", "x", "/"];
    const teclas = document.querySelectorAll(".Tecla");

    teclas.forEach(tecla => {
        if(teclasAUsar.includes(tecla.textContent)){
            tecla.addEventListener("click",() =>{
                const resultado = document.querySelector("#NumeroResultado");
                const numero = parseInt(resultado.textContent);
                EnviarNumero(numero);

            });
        }
    });
}