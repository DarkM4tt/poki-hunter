import React from "react";
import { IoIosSearch } from "react-icons/io";
import './SearchPage.scss';

const Loader = () => {
	return (
		<span className="loader" />
	);
}

export default function SearchPage() {
	
	return (
		<div className={`searchPage`}>
			<div className="searchModal">
				<div className="search">
					<input className="field" value={''} placeholder="Gotta Search 'Em All: Enter a Pokemon name"  />
					<IoIosSearch className="icon" />
				</div>
				<div className="results">
				{
					<div className="loadMore">
						<Loader />
					</div>
				}
				</div>
			</div>
		</div>
	);
}