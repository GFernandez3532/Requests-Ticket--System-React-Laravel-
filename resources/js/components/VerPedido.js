import axios from 'axios';
import React, {Component} from 'react';

class VerPedido extends  Component {
    constructor(props) {
        super(props)

        this.state ={
            pedido: {}

        }

        this.handleMarcarPedidoCompletado = this.handleMarcarPedidoCompletado.bind(
            this
        )
    }

    componentDidMount() {
        const pedidoId = this.props.match.params.id

        axios.get(`/api/pedidos/${pedidoId}`).then(response=>{
            this.setState({
                pedido:response.data
            })
        })
    }

    handleMarcarPedidoCompletado(){

        const{history} = this.props

        axios.put(`/api/pedidos/${this.state.pedido.id}`)
            .then(response => history.push('/'))
    }
    render(){

        const {pedido} = this.state

        return(
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'> {pedido.titulo}</div>

                            <div className='card-body'>
                                <label>Descripcion: </label>
                                    <p>{pedido.descripcion}</p>
                                <label>Datos Requeridos: </label>
                                    <p>{pedido.DatosRequeridos}</p>
                                <button
                                    className='btn btn-primary btn-sm'
                                    onClick={this.handleMarcarPedidoCompletado}
                                >
                                    Marcar como Terminado
                                </button>
                                <hr />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default VerPedido;