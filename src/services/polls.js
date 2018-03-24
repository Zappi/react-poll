import axios from 'axios'
import tokenService from './token'

const baseUrl = 'http://localhost:3001/api/polls'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getSinglePoll = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const create = async (newPoll) => {
    console.log(tokenService.getToken())
    const config = {
        headers: {
            'Authorization': tokenService.getToken()
        }
    }

    const res = await axios.post(baseUrl, newPoll, config)

    return res.data
}

const remove = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, getSinglePoll, create, remove}