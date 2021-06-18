import { clientService } from "../service/client-service.js";

const form = document.querySelector('[data-form]');

form. addEventListener('submit', async (event)=> {
    event.preventDefault();
    
    try {
        const name = event.target.querySelector('[data-nome]').value;
        const email = event.target.querySelector('[data-email]').value;
    
        await clientService.createClient(name, email)
        window.location.href = '../telas/cadastro_concluido.html'
    } catch (error) {
        console.log(error);
        window.location.href = "../telas/erro.html";
    };
});