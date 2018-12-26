class Usuario {
    constructor() {
        this.name = '';
        this.genero = '';
    }

    validarNome() {
        if (
            typeof this.name === 'string' &&
            this.name.length != 0 &&
            this.name.length <= 40) {
            return true;
        }
        return false;
    }

    validarGenero() {
        return ['m', 'f'].some(param => {
            return this.genero === param;
        });
    }
}

export default Usuario;