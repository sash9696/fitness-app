import React from "react";
import "./Header.css";

function Header({ query, setQuery, error }) {
	return (
		<nav className="header_container">
			<div className="header_left">
				<img
					className="header_logo"
					src="https://www.dubaishoppingguide.com/wp-content/uploads/cache/images/befit/befit-1883791478.png"
					alt="Fitness Logo"
				/>
			</div>
			<div className="header_search">
				<input
					type="text"
					placeholder="Search for fitness videos"
					value={query || ""}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<div className="header_right">
				<img
					src="https://static.toiimg.com/photo/msid-87153208/87153208.jpg"
					alt="Avatar"
					class="header_avatar"
				/>
			</div>
		</nav>
	);
}

export default Header;
