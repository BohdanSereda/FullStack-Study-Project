const login = (req, res) =>{
    res.status(200).json({
        login: "from controller"
    })
}
const register = (req, res)=>{
    res.status(200).json({
        register: "from controller"
    })
}
export {login, register}