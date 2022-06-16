import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ListVideos from "./components/ListVideos/ListVideos";
import Loading from "./components/Loading/Loading";
import useFetchVideos from "./utils/CustomHooks/useFetchVideos";

function App() {
	const [query, setQuery] = useState(null);

	const { isLoading, error, videoData } = useFetchVideos(query);

	return (
		<div className="app">
			<Header query={query} setQuery={setQuery} error={error} />
			{isLoading ? (
				<Loading />
			) : (
				<ListVideos videoData={videoData} isLoading={isLoading} />
			)}
		</div>
	);
}

export default App;
