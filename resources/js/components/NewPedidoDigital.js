import axios from 'axios'
import React, {Component} from 'react'

class NewPedidoDigital extends Component{
    constructor(props) {
        super(props);

        this.state =  {
            tiposPedidos:[],
            titulo:'',
            descripcion:'',
            datosRequeridos:[],
            tipoPedidoSeleccionado:'',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check = this.check.bind(this);

    }

    componentDidMount() {

        axios.get('/api/tiposPedidos').then(response=>{
            this.setState({

                tiposPedidos:response.data
            })
        })
    }

    handleChange(event){

        this.setState({
            [event.target.name]: event.target.value});

    }


    check = item => {

        const { datosRequeridos } = this.state;
        let nuevoDato = [];
        if (!datosRequeridos.includes(item.target.value)) {

            nuevoDato = [...datosRequeridos, item.target.value];

        } else {
            nuevoDato = datosRequeridos.filter(a => a !== item.target.value);
        }

        this.setState({ datosRequeridos: nuevoDato }, () =>
            console.log("updated state", nuevoDato)
        );
    };


    handleSubmit (event) {
        event.preventDefault()

        const {history} = this.props

        const pedido = {

            titulo: this.state.titulo  ,
            descripcion: this.state.descripcion,
            datosRequeridos: this.state.datosRequeridos,
            tipo: this.state.tipoPedidoSeleccionado
        }


        axios.post('/api/pedidos', pedido)
            .then(response => {
                // redirect to the homepage
                history.push('/')
            })

    }

    render(){

        let tipoPedidos = this.state.tiposPedidos;
        let optionItems = tipoPedidos.map((tipoPedido) =>
            <option value={tipoPedido.nombre} name='tipoPedidoSeleccionado' key={tipoPedido.id}>{tipoPedido.nombre}</option>
        );

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Cedido Digital</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <label htmlFor='titulo'>Titulo:</label>
                                        <br/>
                                        <input id='titulo'
                                               type='text'
                                               name='titulo'
                                               value={this.state.name}
                                               onChange={this.handleChange} />
                                    </div>
                                    <br/>
                                    <label>Tipo de Pedido:</label>
                                    <br/>

                                    <select  onChange={(e) => this.setState({tipoPedidoSeleccionado: e.target.value})}>
                                        <option value="">Seleccionar</option>
                                        {optionItems}
                                    </select>
                                    <br/>
                                    <p></p>
                                    <div className='form-group'>
                                        <label>Datos requeridos:</label>
                                        <br/>
                                        <input onChange={this.check} type="checkbox" value="Facebook"  />Facebook
                                        <br/>
                                        <input onChange={this.check} type="checkbox" value="Google"  />Google
                                        <br/>
                                        <input onChange={this.check} type="checkbox" value="Programmatic" />Programmatic
                                        <br/>
                                        <input onChange={this.check} type="checkbox" value="MobileIds" />Mobile Ids
                                        <br/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='descripcion'>Notas:</label>
                                        <br/>
                                        <textarea id='descripcion'
                                                  type='text'
                                                  name='descripcion'
                                                  value={this.state.name}
                                                  onChange={this.handleChange} />
                                    </div>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default NewPedidoDigital
