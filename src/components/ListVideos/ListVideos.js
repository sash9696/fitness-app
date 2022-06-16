import React from "react";
import "./ListVideos.css";
import VideoCard from "./VideoCard/VideoCard";

function ListVideos({ videoData }) {
	return (
		<div className="videos_container">
			{videoData?.map((videos, index) => {
				const { heading, tags, video } = videos;

				return (
					<VideoCard
						key={index}
						heading={heading}
						tags={tags}
						video={video}
					/>
				);
			})}
			<div></div>
		</div>
	);
}

export default ListVideos;
