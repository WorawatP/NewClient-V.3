import axios from 'axios';

export async function getOrders() {
    let result
    await axios.get(`http://localhost:3001/api/pandaTable`)
        .then(res => {
            if (res) {
                result = res.data
            }
        })
    return result;
}
export const deleteOrders = async (id) => {
    let result = []
    await axios.delete(`http://localhost:3001/api/pandaTable/${id}`)
        .then(res => {
            if (res) {
                result = res.data
                return result
            }
            else {
                return 'error'
            }
        })
    // return result;
}

export async function createOrders(data) {
    let result
    await axios.post(`http://localhost:3001/api/pandaTable`, data)
        .then(res => {
            if (res) {
                result = res.data
            }
            console.log(res.data)
        })
    return result;

}

export async function updateOrders(id, data) {
    const body = data
    let result
    await axios.put(`http://localhost:3001/api/pandaTable/update/${id}`, body)
        .then(res => {
            if (res) { 
                result = res.data
            }
            console.log(res.data)
        })
    return result;
}