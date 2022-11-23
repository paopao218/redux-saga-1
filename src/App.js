import React, { Component } from 'react'
import { connect } from "react-redux"
import { add,sub,addAsync} from "./actions"
class App extends Component {
  render() {
    let { counter, add, sub ,addAsync} = this.props;
    return (
      <div>
        <h3>App组件</h3>
        <p>{counter.count}</p>
        <button onClick={() => { add()}}>+</button>
        <button onClick={() => { sub() }}>-</button>
        <button onClick={() => { addAsync()}}>异步+</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => { 
  return {
    counter:state.counter
  }
}
export default connect(mapStateToProps, {add,sub,addAsync})(App)
