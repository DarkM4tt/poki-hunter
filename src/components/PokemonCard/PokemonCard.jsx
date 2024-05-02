import './PokemonCard.scss'
import pokeball from '../../assets/pokeball.png';
import { useState } from 'react';

const PokemonCard = ({name, onClick}) => {
	const [isError, setIsError] = useState(false);

	return (
		<div className="pokemonCard" onClick={onClick}>
			<img className={`icon ${isError ? 'iconError':' '}`} src={isError?pokeball:`https://img.pokemondb.net/artwork/${name}.jpg`} onError = {() => setIsError(true)}/>
			{name}
		</div>
	);
}

export default PokemonCard;