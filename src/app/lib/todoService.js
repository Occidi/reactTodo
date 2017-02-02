const baseUrl = 'http://localhost:1233/todos';

export const loadTodos = () => {
    return fetch(baseUrl)
    .then((res) => res.json());
};

export const createTodo = (todo) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    }).then((res) => res.json());
};

export const destroyTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};
