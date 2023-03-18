import { Component } from 'react'
// import { nanoid } from 'nanoid'
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import Modal from './Modal/Modal'
import Loader from './Loader/Loader'
import Button from './Button/Button'

class App extends Component {
	state = {
		// isShowModal: false,
		searchText: '',
	}

	// showModal = () => {
	// 	this.setState({ isShowModal: true })
	// }

	// closeModal = () => {
	// 	this.setState({ isShowModal: false })
	// }

	// createUser = (data) => {
	// 	const newUser = {
	// 		...data,
	// 		id: nanoid(),
	// 	}
	// 	console.log('newUser :>> ', newUser)
	// }

	handleSearch = (searchText) => {
		this.setState({ searchText })
	}

	render() {
		return (
			<div className='container'>				
				<Searchbar handleSearch={this.handleSearch} />
				<ImageGallery /> 
        <ImageGalleryItem />
        
				<Modal closeModal={this.closeModal}>  </Modal>				
        <Loader />
        <Button />
			</div>
		)
	}
}

export default App