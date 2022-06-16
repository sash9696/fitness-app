import React from "react";
import "./VideoCard.css";

function VideoCard({ heading, tags, video }) {
	return (
		<div className="video_card_container">
			<p className="video_card_heading"> {heading} </p>
			<video controls src={video} className="video_card" />

			<div className="video_card_tags">
				{tags.map((item, index) => (
					<span key={index}> #{item}</span>
				))}
			</div>
		</div>
	);
}

export default VideoCard;
