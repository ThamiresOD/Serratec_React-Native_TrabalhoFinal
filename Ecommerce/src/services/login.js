export function login() {
    return new Promise(resolve => {
        setTimeout(() => {
            setTimeout(() => {
                resolve({
                    token: "palhaçadaissomano",
                    user: {
                        name: "José Ailton",
                        email: "Zezãodobonde@gmail.com"
                    }})
            }, 1000)
        })
    })
}