import React, {Component} from 'react';

class SeccionPruebas extends Component{

    contador = 0;
    /*
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        };
            
    }*/

    state = {
        contador: 0
    };

    sumar = (e) => {

      //  this.contador = this.contador +1 ;
      //this.state.contador = this.state.contador + 1;
      this.setState({
          contador: (this.state.contador +1 )
      });
    }

    restar = (e) => {
        //this.contador = this.contador - 1 ;
        //this.state.contador = this.state.contador  - 1;
        
        this.setState({
            contador: (this.state.contador - 1 )
        });
    }

    render(){
        return (
            <section id="content">
                <h2 className="subheader">Últimos Articulos</h2>
                <p>
                    Contador: {this.state.contador}
                </p>


                <p>
                    
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />

                    
                </p>
            </section>

        );
    };

  
}

export default SeccionPruebas;