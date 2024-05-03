import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import './SearchPage.scss';
import { useQuery } from "react-query";
import { listPokemon } from "../services/listPokemon";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";
import { useDebounce } from "../hooks/useDebounce";

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
		<div className={`searchPage ${isLoading ? 'loaded' : ''} ${search ? 'searched' : ''}`}>
			<div className="searchModal">
				<div className="search">
					<input className="field" value={search || ''} placeholder="Type Something Here..." onChange={onSearch} />
					<IoIosSearch className="icon" />
				</div>
				<div className="results">
				{
					debouncedSearch && 
					data?.map((val, index) => <PokemonCard onClick={()=>setOpenDetail(val?.name)} key={index} id={val.id} name={val?.name}/>)
				}
				</div>
			</div>
			{openDetail && <PokemonDetail name={openDetail} onClose={onClose}/>}
			{debouncedSearch && isLoading && <Loader />}
		</div>
	);
}