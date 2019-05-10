const express = require('express')
const router = express.Router()
const {
    mod,
    sum_points,
    arrayPoints,
    arrayOfSquaresModulo,
    test_ferma,
    discriminant,
    multiply_points
} = require('./result')

router.post('/', async (req, res) => {
    console.log(req.body)
    console.log(mod(req.body.a,req.body.b))
    res.status(201).json('true')
})

router.post('/summa', async (req, res) => {
    console.log(req.body)
    const p1 = req.body.p1;
    const p2 = req.body.p2;
    res.status(201).json(sum_points({x:p1.x, y:p1.y }, { x:p2.x, y:p2.y}, req.body.m))
})

router.post('/multi', async (req, res) => {
    console.log(req.body)
    const p = req.body.p;
    res.status(201).json(multiply_points({x:p.x, y:p.y }, req.body.a, req.body.mult, req.body.m))
})

router.post('/array_points', async (req, res) => {
    console.log(req.body)
    const result = {
        discriminant: discriminant(req.body.a, req.body.b, req.body.m),
        test_ferma: test_ferma(req.body.a, req.body.m),
        array_modul: arrayOfSquaresModulo(req.body.m),
        array_points: arrayPoints(arrayOfSquaresModulo(req.body.m), req.body.a, req.body.b)
    }
    console.log(result)
    res.status(201).json(result)
})

module.exports = router