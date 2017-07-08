import React from 'react'
import SelectUnit from '../containers/SelectUnit'
import Output from '../containers/Output'
import Toggle from '../containers/Toggle'

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <h1>Logic</h1>
                <SelectUnit />
                <Toggle />
                <Output />
            </div>
        )
    }
}

