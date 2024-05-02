import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import './SearchPage.scss';
import { useQuery } from "react-query";
import { listPokemon } from "../services/listPokemon";

const Loader = () => {
	return (
		<span className="loader" />
	);
}

export default function SearchPage() {
	
	const navigate = useNavigate();
	const { search } = useParams();

	const {data, isLoading} = useQuery(search, listPokemon);


	const onSearch = (event) => {
		navigate(`/search/${encodeURIComponent(event.target.value)}`);
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
					search && 
					data?.map((val, index) => <div key={index}>{val.name}</div>)
				}
				</div>
			</div>
			{search && isLoading && <Loader />}
		</div>
	);
}