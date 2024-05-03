import { useQuery } from 'react-query';
import './PokemonDetail.scss';
import { GetPokemonDetails } from '../../services/GetPokemonDetails'
import { useMemo, useState } from 'react';
import { getPokemonImage } from '../../Utils/getImageUrl';
import { Loader } from '../../pages/SearchPage';
import { IoClose } from "react-icons/io5";

const DetailList = ({ header, list }) => {
	return <div className='details'>{ }<div className='header'>{header}</div><div className='list'>{list.map((item, i) => <div key={i} className='item'>{item}</div>)}</div></div>
}


function PokemonDetail({ name, onClose }) {
	const { data, isLoading } = useQuery(name, GetPokemonDetails);

	const accentColorClassName = useMemo(() => data?.types?.map(({ type }) => 'type-' + type?.name).join(' '), [data]);

	const img = useMemo(() => getPokemonImage(data?.id), [data]);

	const memoizedAbilities = useMemo(() => (data?.abilities?.map(ability => ability?.ability?.name) || []).slice(0, 4), [data]);

	const memoizedMoves = useMemo(() => (data?.moves?.map(move => move?.move?.name) || []).slice(0, 4), [data]);

	const memoizedForms = useMemo(() => (data?.forms?.map(form => form?.name) || []).slice(0, 4), [data]);

	return (
		<div onClick={onClose} className={`PokemonDetailContainer ${accentColorClassName && accentColorClassName}`}>
			<div className="PokemonDetail" onClick={(e)=>e?.stopPropagation()}>
				<IoClose className='close' onClick={onClose}/>
				{isLoading ? <div className='isLoading'><Loader /></div> : <>
					<div className='info'>
						<div className='name'>{data?.name}</div>
						<DetailList header={'Abilities'} list={memoizedAbilities} />
						<DetailList header={'Moves'} list={memoizedMoves} />
						<DetailList header={'Forms'} list={memoizedForms} />
					</div>
					<img className={`icon`} src={img} />
					<div className={'footer'}></div>
				</>}

			</div>
		</div>

	);
}

export default PokemonDetail;