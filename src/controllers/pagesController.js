const menuModel = require('../models/menuModel')
module.exports = {
    async index(req, res){
        return res.json({})
    },
    async menu(req, res){
        const data = await menuModel.read()
        return res.json({data})
    },
    async post(req, res){
        // let data = []

        // for(let i = 0; i<req.body.nome.length; i++){
        //     if(Number(req.body.quantidade[i])>0){
        //         const nome = req.body.nome[i]
        //         const quantidade = req.body.quantidade[i]
        //         data.push({nome,quantidade})
        //     }
        // }
    
        // const total = req.body.total
        const data = req.body

        console.log('Dados:',data)
        return res.json({data})
    },

    async hoje(req, res){
        const data = await menuModel.read()
        return res.json({data})
    },

    async available(req, res){
        let data = await menuModel.read()
        data = await menuModel.update(data,req.body)
        
        if(data)
            console.log('Cardápio atualizado!!')

        return res.json({data})
    }
}