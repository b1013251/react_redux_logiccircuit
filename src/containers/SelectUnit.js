import {connect} from 'react-redux'
import {changeUnit} from '../actions'
import SelectUnitForm from '../components/SelectUnitForm'


const mapStateToProps = (state, ownProps) => ({
    nowChecked : state.unit
})

const mapDispatchToProps = (dispatch) => ({
    onANDClick: () => {
        dispatch(changeUnit("AND"))
    },
    onORClick: () => {
        dispatch(changeUnit("OR"))
    },
    onXORClick: () => {
        dispatch(changeUnit("XOR"))
    }    
})

const SelectUnit = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectUnitForm)

export default SelectUnit