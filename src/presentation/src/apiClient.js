import { API_IP } from './env'

export class ApiClient {

    async createEmployee(id = String, fullName = String, email = String, nationality = String) {
        const body = `create_employees/?id=${id}&&full_name=${fullName}&&email=${email}&&nationality=${nationality}`
        let response = undefined
        await fetch(API_IP + body, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => response = data)
        return response
    }

    async getEmployees() {
        const body = `get_employees/`
        let response = undefined
        await fetch(API_IP + body, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => response = data)
        return response
    }
}