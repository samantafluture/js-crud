import { clientService } from "../service/client-service.js";

( async ()=> {
    const getURL = new URL(window.location);

    const id = getURL.searchParams.get('id');
    
    const inputName = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');
    try {
        const data = await clientService.detailClient(id);
        inputName.value = data.name;
        inputEmail.value = data.email;        
    } catch (error) {
        console.log(error);
        window.location.href = "../telas/erro.html";
    };
    
    const form = document.querySelector('[data-form]');
    
    form.addEventListener('submit', async (event)=> {
        event.preventDefault();
        try {
            await clientService.updateClient(id, inputName.value, inputEmail.value);
            window.location.href = "../telas/edicao_concluida.html";
        } catch (error) {
            console.log(error);
            window.location.href = "../telas/erro.html";
        };
    });
})();



