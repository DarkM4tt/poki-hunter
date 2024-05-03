import './PokemonNotFound.scss'
import OpenPokeball from '../../assets/OpenPokeball.png'

export default function PokemonNotFound() {
    return <div className='pokemonNotFound'>
        <img className='image' src={OpenPokeball} />
        <div className='header'>Looks like this Pokemon is still hidden in the tall grass!</div>
        <div className='desc'>Keep searching!" 🌱</div>
    </div>
}