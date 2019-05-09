# Multi page x Single page
#React
Automatic UI State Management
Lightning fast Dom Manipulation
APIs to Create Truly Composable UIS
Visuals Defined Entirely in JS
Just the V in MVC
Declarative
Component-Based
Learn Once, Write Anywhere

#Two way One Way databind
#Redux
#Flux


#Why?
Assegurar que uma mudança não quebra a app;
Cofiança que o código funciona;

#Types?
Unit - Funções ou componentes isolados;
Integration - Funções ou componentes em seu contexto com outras funções e componentes;

#Sonarqube - Code quality - Inspeção contínua
* detect bugs
* security vulnerabilities 
* duplicated code
* code coverage
* code complexity

#Coverage
const fn = (a, b) => {
    let res = 0;
    if (a > 0 && b > 0) {
        res = a;
    }
    return res;
}

Function coverage - Qualquer teste que chame fn(0,0);
Statement coverage - Todas as linhas fn(1,1);
Branch coverage -  If true e false executados fn(1,1) and fn(0,1);
Condition coverage -  Cada boolean true and false avaliado fn(1,0) (a>0) and fn(0,1) (b>0)