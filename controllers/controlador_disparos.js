const mod_disparos = require('../modules/disparos');
const cont_disparos = {};

cont_disparos.adicionar = async(req,res) => {

    try{
        const disparos = await mod_disparos.create({});
        if(disparos){
            res.status(201).json({
                message:'Disparo adicionado!!!',
                disparos:disparos
            })
        }else{
            res.status(500).json({
                message:'Disparo nao adicionado!!!!'
            })
        }
    } catch(error){
        res.status(500).json({
            message:'Erro ao adicionar disparo'
        })
    }
}

cont_disparos.ndisparos = async(req,res) =>{
    const nDisparos = await mod_disparos.count();

    res.status(200).json({
        message:'Soma feita!!!',
        nDisparos:nDisparos
    })
}

cont_disparos.limpar = async(req,res) =>{
    try{
        await mod_disparos.destroy({
            where:{},
        })
            return res.status(200).json({
                message:'Disparos resetadas!!!'
            })
        }catch(error){
            res.status(500).json({
                message:'Erro ao resetar disparos!!!'
            })
        }


}

module.exports = cont_disparos;