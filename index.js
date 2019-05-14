module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * n1 = 1, n2 = 3 = > resultado 4
     * @param {*} n1 Numero uno de la suma
     * @param {*} n2 Numero dos de la suma
     */
    suma: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 + n2: this.mensajeError());
    },
    /**
     * Resta de dos numeros
     * @example
     * n1 = 1, n2 = 3 = > resultado -2
     * @param {*} n1 Numero uno de la Resta
     * @param {*} n2 Numero dos de la Resta
     */
    resta: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 - n2: this.mensajeError());
    },
    /**
     * Multiplicacion de dos numeros
     * @example
     * n1 = 1, n2 = 3 = > resultado 3
     * @param {*} n1 Numero uno de la Multiplicacion
     * @param {*} n2 Numero dos de la Multiplicacion
     */
    multiplicacion: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 * n2: this.mensajeError());
    },
    /**
     * Division de dos numeros
     * @example
     * n1 = 1, n2 = 3 = > resultado 0.33
     * @param {*} n1 Numero uno de la Division
     * @param {*} n2 Numero dos de la Division
     */
    division: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 / n2: this.mensajeError());
    },
    /**
     * Mensaje de error que se ejecuta cuando no tengamos valores numericos
     */
    mensajeError: function() {
        console.log('Un valor o los dos valores no son numericos');
    },
    /**
     * Comprueba que son valores numericos
     * @param {*} n1 
     * @param {*} n2 
     */
    esNumero: function (n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number'){
            return false
        }
        return true;
    }
}