import { Controller } from "./controller.js";

export class App
{
    constructor()
    {
        console.log("app.js");
        new Controller().getPage();
    }

} 

new App();