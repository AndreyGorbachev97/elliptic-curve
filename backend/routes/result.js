

    const gcd = (x, y, s1=1, s2=0) => {
        console.log(x % y)
        let q = Math.floor(x/y),
        s1copy = s1;
        return (x % y === 0) ? s2 : gcd(y, x%y, s1=s2, s2=s1copy-q*s2);
    }

    const mod = (a,b) => {
        if (a >= b){
            return a % b
        } else if (a < 0) {
            if(a % b === 0) {
                return 0
            } else {
                return (a % b) + b
            }
        } else {
            return a 
        }
    }

    const test_ferma = (a, n) => { 
        return n < a+1 ? 'error' :
        mod(Math.pow(a, n-1), n) === 1 ? 
        'число n вероятно простое' :
        /*mod(Math.pow(a, n-1), n)*/'число n составное'
    }
    
    const discriminant = (a,b, m) => {
        return mod(4 * Math.pow(a,3) + 27 * Math.pow(b,2), m)
    }
    
    const arrayOfSquaresModulo = (m) => {
        let array = [];
        for(let i = 0; i < m; i++){
            array.push(mod(Math.pow(i,2), m))
        }
        return array
    }
    
    const arrayPoints = (arrayOfSquares, a, b ) => {
        const m = arrayOfSquares.length;
        let y_square = []
        for(let i = 0; i < m; i++){
            y_square.push(mod((Math.pow(i,3) + a * i + b), m))
        }
        const array_y_square = y_square.filter(_ => arrayOfSquares.some( a => a === _))
        const array_points = [];
        for(let i = 0; i < y_square.length; i++){
            for(let j = 0; j < m; j++){
                 if(y_square[i] === arrayOfSquares[j]){
                    array_points.push({y_square: y_square[i], index: i, point: j})
                 } 
            }
        }
    
        return y_square.map((el, i) => {
            return {number_points: array_points.length+1, y_2: el, points: array_points.filter(_ => _.index === i)}
        }) 
    }
    
    const sum_points = (p1, p2, m) => {
        let up = p2.y-p1.y; 
        let down = mod((p2.x-p1.x), m); 
        if(m > 0 && up !== 0 && down !== 0) {
            while (up % down !== 0){
                up += m
            }
        }
    
        let division = (up !== 0 && down !== 0) ? up / down : 0
        let M_pow = (Math.pow( (division) , 2))
        let x = mod( (M_pow - (p1.x+p2.x)), m)
        let y = mod((-p1.y + ( ( (division) ) * (p1.x - x) )), m)
        return {x: x, y: y}
    }
    
    
    const multiply_points = (p, a, mult, m ) => {
    
        let up = ( (3 * Math.pow(p.x, 2)) + a )
        let down = mod((2*p.y), m)
        if(m > 0 && up !== 0 && down !== 0) {
            while (up % down !== 0){
                up += m
            }
        }
    
        let x = mod( ( Math.pow((up / down), 2) - (2 * p.x) ), m)
        let y = mod(-p.y + (( up / down) * (p.x - x) ), m)
    
        let multiplay = {x:x, y:y};
        for(let i = 0; i < mult-2; i++){ 
            multiplay = sum_points(multiplay, {x:p.x, y:p.y}, m)
        }
        return(multiplay)
    }
    
    const DiffiHelmana = (p, multA, multB, a, m) => { 
        return {
            pointBob: multiply_points(p, a, multB, m),
            pointAlice: multiply_points(p, a, multA, m),
            key_Bob: multiply_points(multiply_points(p, a, multA, m), a, multB, m), 
            key_Alice:  multiply_points(multiply_points(p, a, multB, m), a, multA, m)}        
    }

    const MessiAmura = (p, eA, eB, numb_points, a, m) => {
        const dA = mod(gcd(eA, numb_points), m);
        const dB = mod(gcd(eB, numb_points), m);
        const eA_Pm = multiply_points(p, a, eA, m);
        const eB_eA_Pm = multiply_points(eA_Pm, a, eB, m);
        const dA_eB_eA_Pm = multiply_points(eB_eA_Pm, a, dA, m);
        const dB_dA_eB_eA_Pm = multiply_points(dA_eB_eA_Pm, a, dB, m);
        return { 
            dA,
            dB,
            eA_Pm,
            eB_eA_Pm,
            dA_eB_eA_Pm,
            dB_dA_eB_eA_Pm,
        }
    }

    const ElGaMal = (C, Pm, e, k, a, m) => {
        const eC = multiply_points(C, a, e, m);
        const kC = multiply_points(C, a, k, m);
        const keC = multiply_points(eC, a, k, m);
        const Pm_sum_ekC = sum_points(Pm, keC, m);
        const res_Bob = sum_points(Pm_sum_ekC, {x:keC.x, y: -keC.y}, m);
        return { eC, kC, keC, Pm_sum_ekC, res_Bob }
    }

    module.exports.mod = mod;
    module.exports.discriminant = discriminant;
    module.exports.test_ferma = test_ferma;
    module.exports.arrayOfSquaresModulo = arrayOfSquaresModulo;
    module.exports.arrayPoints = arrayPoints;
    module.exports.sum_points = sum_points;
    module.exports.multiply_points = multiply_points;
    module.exports.DiffiHelmana = DiffiHelmana;
    module.exports.MessiAmura = MessiAmura;
    module.exports.ElGaMal = ElGaMal;


