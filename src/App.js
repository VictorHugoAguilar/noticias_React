import React, { Component, Fragment } from "react";

// Importamos Componentes
import Header from "./Components/Header";
import ListaNoticas from "./Components/ListaNoticias";
import Formulario from "./Components/Formulario";

class App extends Component {
    state = {
        noticias: []
    };

    async componentDidMount() {
        this.consultarNoticias();
    }

    consultarNoticias = async (categoria = 'general') => {
        const url = `
      https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5de8c4c624a6470ca320c459fb0308a5`;

        const respuesta = await fetch(url);

        const noticias = await respuesta.json();

        this.setState({
            noticias: noticias.articles
        });
    };

    render() {
        return (
            <Fragment>
                <Header titulo="Noticias React Api" />
                <div className="container white contenedor-noticias">
                    <Formulario 
                        consultarNoticias={this.consultarNoticias}
                    />
                    <ListaNoticas noticias={this.state.noticias} />
                </div>
            </Fragment>
        );
    }
}

export default App;
