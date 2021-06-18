const listClients = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Ops, listing clients was not possible!');
    });
};

const createClient = (name, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then( response => {
        if(response.ok) {
            return response.body
        } 
        throw new Error('Ops, creating a new client was not possible!');
    });
};

const removeClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then( response => {
        if(!response.ok) {
            throw new Error('Ops, deleting a client was not possible!');
        }
    });
};

const detailClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Ops, detailing a client was not possible!');
    });
};

const updateClient = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then ( response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Ops, updating a client was not possible!');
    });
};

export const clientService = {
    listClients,
    createClient,
    removeClient,
    detailClient,
    updateClient
};