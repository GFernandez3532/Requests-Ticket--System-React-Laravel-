import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
//import SingleProject from './SingleProject'


import PedidosList from './PedidosList'
import VerPedido from "./VerPedido";
import NewPedido from './NewPedido'

class AppPedidos extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={PedidosList}/>
                        <Route path='/createPedido' component={NewPedido} />
                        <Route path='/:id' component={VerPedido} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<AppPedidos/>, document.getElementById('appPedidos'))