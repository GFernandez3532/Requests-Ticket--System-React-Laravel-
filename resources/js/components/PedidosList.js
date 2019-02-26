import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PedidosList extends Component {
    constructor () {
        super()
        this.state = {
            pedidos: []
        }
    }

    componentDidMount () {
        axios.get('/api/pedidos').then(response => {
            this.setState({
                pedidos: response.data
            })
        })
    }

    render () {
        const { pedidos } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Todos los pedidos</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                                    Crear nuevo Pedido
                                </Link>
                                <table align="center" className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Datos Requeridos</th>
                                        <th>Descripcion</th>
                                        <th>Acciones</th>
                                    </tr>
                                    {pedidos.map(pedido => (
                                        <tr key={pedido.id}>

                                            <td>{pedido.titulo}</td>
                                            <td>{pedido.DatosRequeridos}</td>
                                            <td>{pedido.descripcion}</td>
                                            <td>
                                                <button className="btn btn-info">  Ver</button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PedidosList;