import axios from 'axios';
// const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '33210301-3be20b33fb7f66869d8b0904e';    

    
const getImages = async (searchText, page = 1) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};

export default getImages

// BASE_URL, {
//         method: 'get',
//         params: {
//             key: API_KEY,
//             q: searchText,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: true,
//             per_page: 12,
//             page: page,
//         },
//     }