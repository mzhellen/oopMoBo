import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

api.interceptors.request.use(
    (config) => {
        const hash = localStorage.getItem('userHash')
        if(hash){
            config.headers.Authorization = `Bearer ${hash}`
        }
        return config
    },
    (erro) => {
        return Promise.reject(erro)
    }
    
)

export default api