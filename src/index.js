
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoMerlin = new Mago ('Merlin', 8, 'Fogo', 8, 10)
const magaFelicia = new Mago ('Felicia', 3, 'Gelo', 5, 6)

const arqueiroHobbin = new Arqueiro ('Hobbin', 5, 7)
const ArqueiroMagoNelliel = new ArqueiroMago('Nelliel', 7, 10, 'ar', 9, 9)

const personagens = [magoMerlin, magaFelicia, arqueiroHobbin, ArqueiroMagoNelliel]

new PersonagemView(personagens).render()


