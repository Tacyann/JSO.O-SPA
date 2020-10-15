import { clienteController } from "../controllers/clientecontroller.js";

export class Cliente
{
    criar = () =>
    {
        let index = document.getElementById("index");

        //usar os recurso do DOM JS diretamente
        let matriculaLabel = document.createElement("label");
        matriculaEstudanteLabel.textContent = "Matricula Estudante: ";
        index.append(matriculaLabel);

        let matriculaInput = document.createElement("input");
        matriculaInput.type = "text";
        index.append(matriculaInput);

        let p1 = document.createElement("p");
        index.append(p1);

        let nomeEstLabel = document.createElement("label");
        nomeEstLabel.textContent = "Nome do Estudante: ";
        index.append(nomeEstLabel);

        let nomeEstInput = document.createElement("input");
        nomeEstInput.type = "text";
        index.append(nomeEstInput);

        let p2 = document.createElement("p");
        index.append(p2);

        let nomeClienteLabel = document.createElement("label");
        nomeClienteLabel.textContent = "Nome do Cliente: ";
        index.append(nomeEstLabel);

        let nomeClieInput = document.createElement("input");
        nomeClienteInput.type = "text";
        index.append(nomeClienteInput);

        let p3 = document.createElement("p");
        index.append(p3);

        let botao = document.createElement("button");
        botao.textContent = "Enviar";

        botao.addEventListener("click", ()=>{
            new clienteController().setClick({
                matriculaInput,
                nomeEstInput,
                nomeClienteInput,
            });
        });
        
        index.append(botao);
        
    }
}