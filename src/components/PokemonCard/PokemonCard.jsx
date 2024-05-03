import './PokemonCard.scss'
import { useMemo, useState } from 'react';
import { getPokemonImage } from '../../Utils/getImageUrl';

const PokemonCard = ({name, id, onClick}) => {
	const [isError, setIsError] = useState(false);

	const img = useMemo(() => getPokemonImage(id), [id]);

	return (
		<div className="pokemonCard" onClick={onClick}>
			<img className={`icon`} src={img} />
			
			{name}
		</div>
	);
}

export default PokemonCard;