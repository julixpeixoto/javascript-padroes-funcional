import {handleStatus} from '../promisse-helper.js';

const API = 'http://localhost:3000/notas';

const sumItems = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((tot, item) => tot += item.valor, 0);

export const notasService = {
    listAll(){
        return fetch(API).then(handleStatus);
    },
    sumItems(code){
        return this.listAll().then(sumItems(code));
    }
}