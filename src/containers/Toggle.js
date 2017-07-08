import {connect} from 'react-redux'
import {toggleInput1, toggleInput2} from '../actions'
import ToggleButtons from '../components/ToggleButtons'


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    onIn1Click: () => {
        dispatch(toggleInput1())
    },
    onIn2Click: () => {
        dispatch(toggleInput2())
    }    
})

const Toggle = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleButtons)

export default Toggle