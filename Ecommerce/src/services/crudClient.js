import api from './api';

export const getAllProd = async () => {
    try {
        const { data } = await api.get("/api")
        return data 
    } catch(e) {
        console.log(e)
    }
}

export const postProd = async (prodId) => {
    try {
        const Prod = await api.post("/api/" + prodId)
        return Prod
    } catch(e) {
        console.log(e)
    }
}

export const deleteProd = async (prodId) => {
    try {
        const deleteProd = await api.delete("/produto/" + prodId)
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
