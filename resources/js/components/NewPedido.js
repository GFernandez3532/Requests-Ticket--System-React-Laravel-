import axios from 'axios'
import React, {Component} from 'react'

class NewPedido extends Component{
    constructor(props) {
        super(props);
        this.state =  {
            titulo:'',
            descripcion:'',
            datosRequeridos:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check = this.check.bind(this);
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
            datosRequeridos: this.state.datosRequeridos
        }


        axios.post('/api/pedidos', pedido)
            .then(response => {
                // redirect to the homepage
                history.push('/')
            })

    }
    render(){

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Crear nuevo Pedido</div>
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
                                    <div className='form-group'>
                                     <label htmlFor='descripcion'>Descripcion:</label>
                                        <br/>
                                        <textarea id='descripcion'
                                           type='text'
                                           name='descripcion'
                                           value={this.state.name}
                                           onChange={this.handleChange} />
                                    </div>
                                    <div className='form-group'>

                                    <input onChange={this.check} type="checkbox" value="nombre"  />Nombre
                                        <br/>
                                    <input onChange={this.check} type="checkbox" value="apellido"  />Apellido
                                        <br/>
                                        <input onChange={this.check} type="checkbox" value="idSalesforce" />Id Salesforce
                                        <br/>
                                    </div>
                                    <br/>
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

export default NewPedido
