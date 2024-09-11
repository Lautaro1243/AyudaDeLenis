const series = require('../data/series.json')
const controller = {}
controller.series = series

const getAllSeries = (req, res)=>{
    res.status(200).json(series)
}
controller.getAllSeries = getAllSeries

const getSerieById= (req, res)=>{
    const id = req.params.id
    const serie = series.find( serie => serie.id==id)
    res.status(200).json(serie)
}
controller.getSerieById = getSerieById

const deleteById = (req, res) => {
    const id = req.params.id
    const idx = series.findIndex( serie => serie.id == id)
    series.splice(idx, 1)
    res.status(204)
}
controller.deleteById = deleteById

const createSerie = (req, res) => {
    const {nombre, plataforma} = req.body
    const ids = series.map( serie => serie.id)
    const serie = {
        id: ids.length == 0 ? 1 : Math.max( ...ids  ) + 1,
        nombre,
        plataforma,
        disponible: false
    }
    series.push(serie)
    res.status(201).json(serie)
}
controller.createSerie = createSerie


module.exports = controller