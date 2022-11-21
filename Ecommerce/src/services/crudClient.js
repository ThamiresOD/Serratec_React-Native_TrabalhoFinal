import api from './api';

export const getProd = async () => {
    try {
        const { data } = await api.get("/produtos???")
        console.log(data)
        return data 
    } catch(e) {
        console.log(e)
    }
}

export const postProd = async (postProd) => {
    try {
        const Prod = await api.post("/produto/" + postProd)
        return Prod
    } catch(e) {
        console.log(e)
    }
}

export const deleteProd = async (id) => {
    try {
        const deleteProd = await api.delete("/produto/" + id)
        return deleteProd
    } catch(e) {
        console.log(e)
    }
}

export const updateProd = async (prod) => {
    try {
        const updateProd = await api.put("/produto/" + prod.id)
        return updateProd
    } catch(e) {
        console.log(e)
    }
}
