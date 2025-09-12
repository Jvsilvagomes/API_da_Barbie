import dados from "../models/dados.js";

const { barbies } = dados;
let resultado = barbies;

const getAllBarbies = (req, res) => {
     res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });
}

const getBarbieById = (req, res) => {
    const id = parseInt(req.params.id);

    const barbie = barbies.find(b => b.id === parseInt (id));

    if(!barbie){
        res.status(404).json({
            success: false,
            message: "Barbie não existe"
        })
    }

    res.status(200).json({
        total: barbie.length,
        barbie: barbie
    })
}

const createBarbie = (req, res) => {
    const { nome, profissao, anoLancamento } = req.body;

    if(!nome || !profissao){
        return res.status(400).json({
            success: false,
            message: "nome e profissão são obriigatórios para uma barbie"
        });
    }

    const novaBarbie = {
        id: barbies.length + 1,
        nome: nome,
        profissao: profissao,
        anoLancamento: parseInt(anoLancamento)
    }

    barbies.push(novaBarbie);

    res.status(201).json({
        success: true,
        message: "Nova barbie criada",
        barbie: novaBarbie
    })
}

const deleteBarbie = (req,res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        })
    }

    const barbieRemover = barbies.find(b => b.id === id);

    if(!barbieRemover) {
        return res.status(404).json({
            success: false,
            message: `Barbie com o id ${id} não existe`
        })
    }

    const barbiesFiltrados = barbies.filter(barbie => barbie.id !== id);

    barbies.splice(0, barbies.length, ...barbiesFiltrados);

    res.status(200).json({
        success: true,
        message: `a barbie ${id} foi removido com sucesso`
    })

}

export { getAllBarbies, getBarbieById, createBarbie, deleteBarbie };