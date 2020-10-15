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

        let enderecoLabel = document.createElement("label");
        enderecoLabel.textContent = "Endereço do Cliente: ";
        index.append(enderecoLabel);

        let enderecoInput = document.createElement("input");
        enderecoInput.type = "text";
        index.append(enderecoInput);

        let p4 = document.createElement("p");
        index.append(p4);

        let estadoLabel = document.createElement("label");
        estadoLabel.textContent = "Estado: ";
        index.append(estadoLabel);

        let estadoInput = document.createElement("input");
        estadoInput.type = "text";
        index.append(estadoInput);

        let p5 = document.createElement("p");
        index.append(p5);

        let cidadeLabel = document.createElement("label");
        cidadeLabel.textContent = "Cidade: ";
        index.append(cidadeLabel);

        let cidadeInput = document.createElement("input");
        cidadeInput.type = "text";
        index.append(cidadeInput);

        let p6 = document.createElement("p");
        index.append(p6);

        let botao = document.createElement("button");
        botao.textContent = "Enviar";

        botao.addEventListener("click", ()=>{
            new clienteController().setClick({
                matriculaInput,
                nomeEstInput,
                nomeClienteInput,
                enderecoInput,
                estadoInput,
                cidadeInput,
            });
        });
        
        index.append(botao);
        
    }
}