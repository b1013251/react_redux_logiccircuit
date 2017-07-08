// actiosとあるけど，
// 実質actionCreatorな気がする

export const changeUnit = (unit) => ({
    type: "UNIT",
    unit
})

export const toggleInput1 = () => ({
    type: 'IN1'
})

export const toggleInput2 = () => ({
    type: 'IN2'
})