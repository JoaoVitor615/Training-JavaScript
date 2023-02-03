let dobra = 0;

let naveName = prompt("Digite o nome de sua nave espacial: ");

let opcao = prompt(" Deseja entrar em dobra espacial? \n 1 - Sim \n 2 - Não");

while(opcao == "1")
{ 
    dobra ++;
    opcao = prompt(" Deseja realizar a próxima dobra? \n 1 - Sim \n 2 - Não");   
}

alert(" A nave: " + naveName + "\n Realizou: " + dobra + " dobra(s) ");