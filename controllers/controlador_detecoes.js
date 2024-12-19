const mod_detecoes = require('../modules/detecoes');
const cont_detecoes = {};

cont_detecoes.adicionar = async(req,res) =>{
    try {
        const detecoes = await mod_detecoes.create({ 
        });
        if (detecoes){
            res.status(201).json({
                message:'detecao adicionada!!!!!',
                detecoes
            })
        } else {
            res.status(500).json({
                message:'Detecao nao adicionada!!!!'
            })
        }
    }catch (error) {
        res.status(500).json({
            message:'Erro ao adicionar detecao!!!!!'
        })
    }

} 

cont_detecoes.ndetecoes = async(req,res) =>{
    const nDetecoes = await mod_detecoes.count();

    res.status(200).json({
        message:'Soma feita!!!!',
        nDetecoes:nDetecoes,
    })
}

cont_detecoes.limpar = async(req,res) =>{
    try {

        await mod_detecoes.destroy({
            where:{},
        });
        return res.status(200).json({
            message:'Detecoes resetadas!!!'
        })
    }catch(error){
        res.status(500).json({
            message:'Erro ao resetar detecoes!!!'
        })
    }
}

module.exports = cont_detecoes;