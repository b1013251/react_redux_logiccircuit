import {connect} from 'react-redux'
import {changeUnit} from '../actions'
import OutputDiv from '../components/OutputDiv'


const mapStateToProps = (state, ownProps) => ({
    unit: state.unit,
    in1: state.input.in1,
    in2: state.input.in2
})

const mapDispatchToProps = (dispatch) => ({
})

const Output = connect(
    mapStateToProps,
    mapDispatchToProps
)(OutputDiv)

export default Output