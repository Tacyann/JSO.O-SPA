export class ClienteController
{
    constructor ()
    {
        this.dado = {};
    }

    setClick = ( props ) =>
    {

        this.dado = {
            "matriculaEstudante": props.matriculaInput.value,
            "nomeEstudante": props.nomeEstInput.value,
            "nomeCliente": props.nomeClienteInput.value,
            "endereco": props.enderecoInput.value,
             
        }

        // != get
        // post
        fetch (
            'https://web-unit.herokuapp.com/cliente',
            {
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(this.dado)
            }
        ).then( response =>{
            if (response.ok)
            {
                console.log("Cliente e Estudante cadastrado com sucesso!");
                console.log(response);
            }else
            {
                console.log(response);
            }
        }).catch(error => {
            console.log(error);
        });
    }
}