import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import './SearchPage.scss';
import { useQuery } from "react-query";
import { listPokemon } from "../services/listPokemon";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";
import { useDebounce } from "../hooks/useDebounce";
import PokemonNotFound from "../components/PokemonNotFound/PokemonNotFound";

export const Loader = () => {
	return (
		<span className="loader" />
	);
}

export default function SearchPage() {
	
	const navigate = useNavigate();
	const { search } = useParams();
	const [openDetail, setOpenDetail] = useState('');

	const debouncedSearch = useDebounce(search, 400);

	const {data, isLoading} = useQuery(debouncedSearch, listPokemon);

	const onSearch = (event) => {
		navigate(`/search/${encodeURIComponent(event.target.value)}`);
	}

	const onClose = (e) => {
		e?.stopPropagation();
		setOpenDetail('');
	}

	return (
		<div className={`searchPage ${isLoading ? 'loaded' : ''} ${debouncedSearch ? 'searched' : ''}`}>
			<div className="searchModal">
				<div className="search">
					<input className="field" value={search || ''} placeholder="Search for Pokemon here, Catch 'em all!" onChange={onSearch} />
					<IoIosSearch className={`icon ${debouncedSearch ? 'icon-searched' : ''}`} />
				</div>
				<div className="results">
				{
					debouncedSearch && data && data.length>0?
					data?.map((val, index) => <PokemonCard onClick={()=>setOpenDetail(val?.name)} key={index} id={val.id} name={val?.name}/>):<PokemonNotFound />
				}
				</div>
			</div>
			{openDetail && <PokemonDetail name={openDetail} onClose={onClose}/>}
			{debouncedSearch && isLoading && <Loader />}
		</div>
	);
}