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
    return {key_Bob: multiply_points(multiply_points(p, a, multA, m), a, multB, m), 
        key_Alice:  multiply_points(multiply_points(p, a, multB, m), a, multA, m)}        
}

//console.log(sum_points({x:8020, y:1740 }, { x:8020, y:30251}, 31991))



//console.log(mod(563911,751))


//console.log(multiply_points({x: 23161, y:17992}, -3, 2, 31991))

//console.log(sum_points(multiply_points({x:4, y:1 }, 1, 0, 7), {x:4, y:1}, 7))
//console.log(sum_points({x:45, y:720 }, { x:45, y:720}, 751))
//console.log(arrayPoints(arrayOfSquaresModulo(7), 3,1))
console.log(DiffiHelmana({x: 2, y: 2}, 121, 203, 0, 211))