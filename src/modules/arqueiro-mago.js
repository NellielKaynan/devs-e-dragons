import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao =  'Detentor de lancas e flechas mágicas!'

    constructor (nome, level, destreza, elementoMagico, LevelMagico, inteligencia) {
        super(nome, level)
        this.ladoArqueiro = new Arqueiro(nome, level, destreza)
        this.ladoMago = new Mago(nome, level, elementoMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}