import { clientService } from "../service/client-service.js";

const createNewLine = (name, email, id) => {
    const newLineClient = document.createElement('tr');
    const content = `<td class="td" data-td>${name}</td>
                    <td>${email}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td>`;
    newLineClient.innerHTML = content;
    newLineClient.dataset.id = id; // create a data-attribute that has 'id' as propriety

    return newLineClient;
};

const table = document.querySelector('[data-tabela]');

table.addEventListener('click', async (event)=> {
    let isDeleteBtn = event.target.className == 'botao-simples botao-simples--excluir';
    if(isDeleteBtn){
        try {
            const lineClient = event.target.closest('[data-id]');
            let id = lineClient.dataset.id;
            await clientService.removeClient(id)
            lineClient.remove();
        }
        catch(error){
            console.log(error);
            window.location.href = "../telas/erro.html";
        };
    };
});

const render = async () => {
   try {
      const listClients = await clientService.listClients();
      listClients.forEach(element => {
          table.appendChild(createNewLine(element.name, element.email, element.id));
        });  
   }
   catch(error){
       console.log(error);
       window.location.href = "../telas/erro.html";
   };   
};

render();
