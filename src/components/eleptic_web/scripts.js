export const mod = (a,b) => {
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
    //return a >= b ? a % b : a < 0 ? (a % b) + b : a 
}

export const test_ferma = (a, n) => { 
    return n < a+1 ? 'error' :
    mod(Math.pow(a, n-1), n) === 1 ? 
    'число n вероятно простое' :
    /*mod(Math.pow(a, n-1), n)*/'число n составное'
}

export const discriminant = (a,b, m) => {
    return mod(4 * Math.pow(a,3) + 27 * Math.pow(b,2), m)
}

export const arrayOfSquaresModulo = (m) => {
    let array = [];
    for(let i = 0; i < m; i++){
        array.push(mod(Math.pow(i,2), m))
    }
    return array
}

export const arrayPoints = (arrayOfSquares, a, b ) => {
    console.log('t3')
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



//сложение
export const sum_points = (p1, p2, m) => {
    console.log('t1',)
    let up = p2.y-p1.y; 
    let down = mod((p2.x-p1.x), m); 

    if(m > 0 && up !== 0 && down !== 0) {
        while (up % down !== 0){
            console.log(up)
            up += m
        }
    }
    
    let division = Math.abs(up / down) === Infinity ? 0 : up / down
    let M_pow = (Math.pow( (up / down) , 2)) === Infinity ? 0 : Math.pow( (up / down) , 2)
    let x = mod( M_pow - (p1.x+p2.x), m)
    let y = mod((-p1.y + ( ( (division) ) * (p1.x - x) )), m)
    return {x: x, y: y}
} 
//умножение  
export const multiply_points = (p, a, mult, m ) => {
    console.log('t2',)
    let up = ( (3 * Math.pow(p.x, 2)) + a )
    let down = mod((2*p.y), m)
    if(m > 0 && up !== 0 && down !== 0) {
        while (up % down !== 0){
            console.log(up)
            up += m
        }
    }

    let x = mod( ( Math.pow((up / down), 2) - (2 * p.x) ), m)
    let y = mod(-p.y + (( up / down) * (p.x - x) ), m)

    let multiplay = {x:x, y:y};
    for(let i = 0; i < mult-2; i++){ 
        multiplay = sum_points(multiplay, {x:p.x, y:p.y}, m)
    }
    console.log(multiplay)
    return(multiplay)
}
//console.log(mod(6,5))
//console.log(discriminant(8,4,23))
//console.log(arrayOfSquaresModulo(13))

//console.log(arrayPoints(arrayOfSquaresModulo(13))[12].points)