const { TMDB_API_URL, TMDB_API_TOKEN } = process.env;

export const tmdbApi = {
	async get<T>(route: string) {
		try {
			const response = await fetch(`${TMDB_API_URL}/${route}?api_key=${TMDB_API_TOKEN}`);
			const responseBody = await response.json();
			if (!response.ok) {
				const responseJson = JSON.stringify(responseBody, null, 2);
				throw new Error(`Request failed!\nStatus: ${response.status}\nBody: ${responseJson}`);
			}
			return responseBody as T;
		} catch (error) {
			console.error('Failed fetching:', error);
			throw error;
		}
	},
};
