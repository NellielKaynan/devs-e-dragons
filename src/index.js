import { Personagem } from "./modules/personagem.js"
import { personagemView } from "./components/personagem-view.js"
import { mago } from "./modules/mago.js"
import { arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoMerlin = new mago ('Merlin', 8, 'Fogo', 8, 10)
const magaFelicia = new mago ('Felicia', 3, 'Gelo', 5, 6)

const arqueiroHobbin = new arqueiro ('Hobbin', 5, 7)
const ArqueiroMagoNelliel = new ArqueiroMago('Nelliel', 7, 10, 'ar', 9, 9)

const personagens = [magoMerlin, magaFelicia, arqueiroHobbin, ArqueiroMagoNelliel]

new personagemView(personagens).render()


