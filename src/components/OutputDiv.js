import React from 'react'

const OutputDiv = ({in1, in2, unit}) => (
    <div>
        {unit}({in1?1:0}, {in2?1:0}) -> {check(in1,in2,unit)}
    </div>
)

let check = (in1, in2, unit) => {
    var result = 0
    console.log(in1)
    console.log(in2)
    console.log(unit)
    switch(unit) {
        case "XOR":
            result = ((in1||in2) && !(in1&&in2)) ? 1:0
            break
        case "OR":
            result = (in1 || in2) ? 1:0
            break
        case "AND":
            result = (in1 && in2) ? 1:0
            break
    }
    return result
}

export default OutputDiv
