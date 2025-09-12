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

export { getAllBarbies, getBarbieById};