package com.example.CalculadoraTest;
import org.nfunk.jep.JEP;

public class Calculadora{
    private String operacion;
    private String resultado ;
    private Double memoria ;
    private JEP jep;

    public Calculadora(){
        this.operacion = null;
        this.resultado = "0";
        this.memoria = 0.0;
        this.jep = new JEP();
        this.jep.addStandardFunctions();
        this.jep.addStandardConstants();
    }

    public void setOperacion(String operacion){
        this.operacion = operacion;
    }


    public void setResultado() {
        try {
            if(operacion.contains("x")){
                operacion = operacion.replace("x","*");
            }
            if(operacion.contains("%")){
                operacion = operacion.replaceAll("(\\d+)%", "($1/100)");
            }

            jep.parseExpression(operacion);
            double resultadoR = jep.getValue();
            this.memoria = resultadoR;
            this.resultado = resultadoAString(resultadoR);
        } catch (Exception e) {
            this.resultado = "ERROR";
            this.memoria = 0.0;
        }
    }

    public void limpiar(){
        this.operacion = null;
        this.resultado = "0";
        this.memoria = 0.0;
    }

    private String resultadoAString(Double resultadoR) {
        String semiResultado = Double.toString(resultadoR);

        if (semiResultado.contains(".")) {
            String parteEntera = semiResultado.split("\\.")[0];
            String parteDecimal = semiResultado.split("\\.")[1];

            if (parteDecimal.equals("0")) {
                return parteEntera;
            }
            return semiResultado;
        }

        return semiResultado;
    }


    public String getResultado(){
        return this.resultado;
    }

}