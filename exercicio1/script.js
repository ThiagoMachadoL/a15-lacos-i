let coxinha = prompt("Você quer comer mais coxinhas? Responsa 'S' e para sim e 'N' para não").toLowerCase();
let conta = 0
const valorCoxinha = 2.50

while(coxinha === "s"){
    console.log(coxinha)
    conta=conta+valorCoxinha;
    coxinha = prompt("Você quer comer mais coxinhas? Responsa 'S' e para sim e 'N' para não").toLowerCase();
}
console.log("A sua conta deu " + conta)
