import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    tiop = 'ArqueiroMago'

    constructor (nome, level, destreza, elementoMagico, LevelMagico, inteligencia) {
        super(nome, level)
        this.ladoArqueiro = new Arqueiro(nome, level, destreza)
        this.ladoMago = new Mago(nome, level, elementoMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago. obterInsignia}`
    }
}