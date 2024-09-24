3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
<br>

Ajustando o código:

    int INDICE = 12,
    SOMA = 0,
    K = 1;
    
    enquanto K < INDICE { 
      K = K + 1; 
      SOMA = SOMA + K; 
    } 
    
    imprimir(SOMA);
    
O valor de `K` é somado à variável `SOMA` a cada iteração do loop `enquanto`, dessa forma: `K = 2` na primeira iteração, depois `K = 3`, e assim por diante. Logo, na primeira iteração `SOMA = 0 + 2`, na segunda  `SOMA = 2 + 3`, `SOMA = 5 + 4`, e assim por diante, até `K = 12`, quando `SOMA = 65 + 12 = 77`.

Portanto, `SOMA = 77` ao final da execução.