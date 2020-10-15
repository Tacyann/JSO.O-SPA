export class Route
{
    constructor(){
        let url = window.location.href.split("/");
        this.route = url[url.length-1];
    }

    get = () =>
    {
        return this.route;
    }

}