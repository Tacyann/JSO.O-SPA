import { Route } from "./route.js";
import { Cliente } from "./pages/cliente.js";
import { Estado } from "./pages/estadocliente.js";


export class Controller
{
    constructor()
    {
        console.log("controller.js");
        this.route = new Route().get();
    }

    getPage = () =>
    {
        switch (this.route)
        {
            case "":
            case "index":
            case "home":
                new Cliente().criar();
                new Estado().criar();
                break;

        }
    }
}