const BASE_URL = "https://pixabay.com/api";
const API_KEY = '33210301-3be20b33fb7f66869d8b0904e';    
// const url = `${BASE_URL}/?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    
export const getImages = (searchText) => {
	return fetch(`${BASE_URL}/?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
}

