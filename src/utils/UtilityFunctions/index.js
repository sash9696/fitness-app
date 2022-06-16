export const getVideos = async (api, setLoading, setData, params, setError) => {
	const response = await fetch(`${api}?q=${params}&numResults=15`);
	const data = await response.json();

	if (data.status === "success") {
		setData(data.results);
		setError({ show: false, msg: "" });
	} else {
		setError({ show: true, msg: "Something Went Wrong" });
	}
	setLoading(false);
};
