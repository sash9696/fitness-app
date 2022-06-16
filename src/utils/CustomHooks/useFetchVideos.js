import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { getVideos } from "../UtilityFunctions";

function useFetchVideos(urlparams) {
	const [videoData, setVideoData] = useState([]);
	const [error, setError] = useState({ show: false, msg: " " });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getVideos(BASE_URL, setIsLoading, setVideoData, urlparams, setError);
	}, [urlparams]);

	return { isLoading, error, videoData };
}

export default useFetchVideos;
