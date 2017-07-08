// react
import React from 'react'
import {render} from 'react-dom'
// redux
import  {createStore} from 'redux'
import {Provider} from 'react-redux'
// own class
import Root from './components/root'
import reducer from './reducers'

// storeの生成時にreducerを渡す
const store = createStore(reducer)

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
)
