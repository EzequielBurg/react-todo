import axios from 'axios'

const BASE_URL = 'http://localhost:3333'

const api = axios.create({ baseURL: BASE_URL })

const getTodos = async () => {
    return await api.get('/todos')
}

const setTodo = async (title) => {
    return await api.post('/todos', {title})
}

const removeTodo = async (id) => {
    return await api.delete(`todos/${id}`)
}

const doneTodo = async (id, done) => {
    return await api.patch(`todos/${id}`, {'done': done})
}

export {
    getTodos,
    setTodo,
    removeTodo,
    doneTodo
}