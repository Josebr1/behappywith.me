import React from 'react';

import Label from '../Label'

class NovoUsuario extends React.Component {

    render() {

        const h = <div className="center">
            <form className="pure-form	pure-form-stacked">
                <Label htmlFor="nome" texto="Quem é você?"/>
            </form>
        </div>;

        return (
            h
        );
    }
}

export default NovoUsuario;