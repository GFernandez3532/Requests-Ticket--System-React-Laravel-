import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'></div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/createPedido'>
                                    Crear nuevo Pedido
                                </Link>
                                <br/>
                                <Link className='btn btn-primary btn-sm mb-3' to='/createPedidoDigital'>
                                    Crear nuevo Pedido Digital
                                </Link>
                                <table align="center" className="table data-table ">
                                    <tbody>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>tipo</th>
                                        <th>Datos Requeridos</th>
                                        <th>Descripcion</th>
                                        <th>Estado</th>
                                        <th>Ver</th>
                                        <th>Editar</th>
                                    </tr>
                                    {pedidos.map(pedido => (
                                        <tr key={pedido.id}>

                                            <td>{pedido.titulo}</td>
                                            <td>{pedido.tipo}</td>
                                            <td>{pedido.DatosRequeridos}</td>
                                            <td>{pedido.descripcion}</td>
                                            <td>{pedido.estado}</td>
                                            <td>
                                                <Link  className="btn btn-info" to={`/${pedido.id}`}>  Ver</Link>
                                            </td>
                                            <td>
                                                <Link  className="btn btn-success" to={`/${pedido.id}`}>  Editar</Link>
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