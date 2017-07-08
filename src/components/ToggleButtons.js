import React from 'react'

const ToggleButtons = ({onIn1Click, onIn2Click}) => (
    <div>
        <button onClick={onIn1Click}>toggle X1</button>
        <button onClick={onIn2Click}>toggle X2</button>
    </div>
)

export default ToggleButtons
