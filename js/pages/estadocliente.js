import { clienteController } from "../controllers/estadocontroller.js";
import { clienteController } from "../controllers/clientecontroller.js";

export class Estado
{
    criar = () =>
    {
        let index = document.getElementById("index");

        //usar os recurso do DOM JS diretamente
        let estadoLabel = document.createElement("label");
        estadoLabel.textContent = "Estado: ";
        index.append(estadoLabel);

        let estadoInput = document.createElement("input");
        estadoInput.type = "text";
        index.append(estadoInput);

        let p1 = document.createElement("p");
        index.append(p1);

        let cidadeLabel = document.createElement("label");
        cidadeLabel.textContent = "Cidade: ";
        index.append(cidadeLabel);

        let cidadeInput = document.createElement("input");
        cidadeInput.type = "text";
        index.append(cidadeInput);

        let p2 = document.createElement("p");
        index.append(p2);

        let botao = document.createElement("button");
        botao.textContent = "Enviar";

        botao.addEventListener("click", ()=>{
            new estadoController().setClick({
                estadoInput,
                cidadeInput,
            });
        });
        
        index.append(botao);
        
    }
}