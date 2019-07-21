import React, { Component } from "react";

class App extends Component {
    state = {
        noticias: []
    };

    async componentDidMount() {
        this.consultarNoticias();
    }

    consultarNoticias = async () => {
        const url = `
      https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=5de8c4c624a6470ca320c459fb0308a5`;

        const respuesta = await fetch(url);

        const noticias = await respuesta.json();

        this.setState({
            noticias: noticias.articles
        });
    };

    render() {
        return <h1>Noticias API React</h1>;
    }
}

export default App;
