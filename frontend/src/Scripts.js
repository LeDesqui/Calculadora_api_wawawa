export function EnviarNumero(a,setPantalla) {
    fetch('http://localhost:8080/calculadora/numero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            operacion: a
        }),
        credentials: 'omit'
    })
        .then(res => res.text())
        .then(() => {
            return fetch("http://localhost:8080/calculadora/resultado");
        })
        .then(response => response.text())
        .then(data => {
            setPantalla(data);
        })
        .catch(err => console.error("Algo falló", err));
}


function RecibirResultado(){
    fetch("http://localhost:8080/calculadora/resultado")
        .then(response => response.text())
        .then(data => {
            document.getElementById('NumeroResultado').innerText = data;
        })
        .catch(error => {
            console.error("Algo falló", error)
        })
}
