const express = require('express')
const router = express.Router()
const {
    mod,
    sum_points,
    arrayPoints,
    arrayOfSquaresModulo,
    test_ferma,
    discriminant,
    multiply_points,
    DiffiHelmana,
    MessiAmura,
    ElGaMal
} = require('./result')

router.post('/', async (req, res) => {
    console.log(req.body)
    console.log(mod(req.body.a,req.body.b))
    res.status(201).json('true')
})

router.post('/summa', async (req, res) => {
    const p1 = req.body.p1;
    const p2 = req.body.p2;
    res.status(201).json(sum_points({x:p1.x, y:p1.y }, { x:p2.x, y:p2.y}, req.body.m))
})

router.post('/multi', async (req, res) => {
    const p = req.body.p;
    res.status(201).json(multiply_points({x:p.x, y:p.y }, req.body.a, req.body.mult, req.body.m))
})

router.post('/MA', async (req, res) => {
    const p = req.body.p;
    console.log(MessiAmura({x:p.x, y:p.y }, req.body.eA, req.body.eB, req.body.numb_points, req.body.a, req.body.m))
    res.status(201).json(MessiAmura({x:p.x, y:p.y }, req.body.eA, req.body.eB, req.body.numb_points, req.body.a, req.body.m))
})

router.post('/DH', async (req, res) => {
    const p = req.body.p;
    res.status(201).json(DiffiHelmana({x:p.x, y:p.y }, req.body.keyA, req.body.keyB, req.body.a, req.body.m))
})

router.post('/ElGam', async (req, res) => {
    const C = req.body.C;
    const Pm = req.body.Pm;
    res.status(201).json(ElGaMal({x:C.x, y: C.y }, {x:Pm.x, y:Pm.y }, req.body.e, req.body.k, req.body.a, req.body.m))
})

router.post('/array_points', async (req, res) => {
    const result = {
        discriminant: discriminant(req.body.a, req.body.b, req.body.m),
        test_ferma: test_ferma(req.body.a, req.body.m),
        array_modul: arrayOfSquaresModulo(req.body.m),
        array_points: arrayPoints(arrayOfSquaresModulo(req.body.m), req.body.a, req.body.b)
    }
    res.status(201).json(result)
})

module.exports = router