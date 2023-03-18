import { Component } from 'react'

import getImages from '../services/getImages'
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
// import Modal from './Modal/Modal'
// import Loader from './Loader/Loader'
// import Button from './Button/Button'

class App extends Component {
	state = {
		searchText: '',
		images: [],
		page: 1,
		isLoading: false,
		error: null,
		modal: {
			isShowModal: false,
			largeImageURL: '',
		}
	}

	showModal = largeImageURL => {
		this.setState({modal: {largeImageURL, isShowModal: true }})
	}

	closeModal = () => {
		this.setState({modal: {largeImageURL: '', isShowModal: false }})
	}

	// createUser = (data) => {
	// 	const newUser = {
	// 		...data,
	// 		id: nanoid(),
	// 	}
	// 	console.log('newUser :>> ', newUser)
	// }
	 

	handleSearch = async searchText => {
		this.setState({ searchText, page: 1});
		try {
            const mass = await getImages(searchText, 1);
            const images = mass.hits;
            this.setState({ images });
        } catch (error) {
            // this.setState({ error });
        } finally {
            // this.setState({ isLoading: false });
        }
	}

	render() {
		return (
			<div className='container'>				
				<Searchbar handleSearch={this.handleSearch} />
				{/* <ImageGallery />  */}
        		{/* <ImageGalleryItem />
        
				<Modal closeModal={this.closeModal}>  </Modal>				
				<Loader />
				<Button /> */}
			</div>
		)
	}
}

export default App