import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const Promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Resident Evil 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Resident Evil 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'XBOX Series X',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Resident Evil 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'XBOX Series S',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const EmBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Diablo 4, é um jogo de ação desenvolvido pela blizzard',
    title: 'Diablo 4',
    system: 'PS5',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'The Legends of Zelda: Breathe of the Wild, é o mais novo jogo da saga de The Legends of Zelda',
    title: 'The Legends of Zelda: Breathe of the Wild',
    system: 'Switch',
    infos: ['23/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars: Survivor, é a continuação direta do jogo Star Wars: Jedi Fallen Order',
    title: 'Star Wars: Survivor',
    system: 'Windows',
    infos: ['28/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Star Wars: Survivor, é a continuação direta do jogo Star Wars: Jedi Fallen Order',
    title: 'Star Wars: Survivor',
    system: 'Windows',
    infos: ['28/05'],
    image: starWars
  }
]

const Categories = () => (
  <>
    <ProductsList games={Promocoes} title="RPG" background="grey" />
    <ProductsList games={EmBreve} title="Ação" background="black" />
    <ProductsList games={Promocoes} title="Aventura" background="grey" />
    <ProductsList games={EmBreve} title="FPS" background="black" />
  </>
)

export default Categories
