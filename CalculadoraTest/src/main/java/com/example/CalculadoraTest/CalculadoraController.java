package com.example.CalculadoraTest;

import com.example.CalculadoraTest.JsonsOperations.*;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/calculadora")
public class CalculadoraController{
    private String resultado;
    private Calculadora calculadora;

    public CalculadoraController() {
        this.calculadora = new Calculadora();
    }



    @PostMapping("/numero")
    public void ponerOperacion(@RequestBody SumaRequest request) {
        System.out.println("Se ha recibido una solicitud POST en /calculadora/numero");
        System.out.println("Número recibido: " + request.getOperacion());
        this.calculadora.setOperacion(request.getOperacion());
        this.calculadora.setResultado();
        System.out.println((request.getOperacion()));
    }




   @GetMapping("/resultado")
    public String obtenerResultado() {
        this.resultado = calculadora.getResultado();
       System.out.println(this.resultado);
       return resultado;

    }
}