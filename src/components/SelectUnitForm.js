import React from 'react'

const SelectUnitForm = ({onANDClick, onORClick, onXORClick, nowChecked}) => (
    <form>
        <label>AND</label>
        <input type="radio"
            name="type"
            checked={nowChecked=="AND"} 
            value="1" 
            onClick={onANDClick} />
        <input type="radio" name="type"
            checked={nowChecked=="OR"} 
            value="2" onClick={onORClick} />
        <label>OR</label>
        <input type="radio" name="type"
            checked={nowChecked=="XOR"} 
            value="3" onClick={onXORClick} />
        <label>XOR</label>
    </form>
)

export default SelectUnitForm
