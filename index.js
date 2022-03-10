import {app} from './app.js'
const port = process.env.PORT || 5000

app.listen(port, ()=>console.log('SERVER STARTED ON PORT ' + port))