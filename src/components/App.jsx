import { Component } from 'react'
import Notiflix from 'notiflix';
import getImages from '../services/getImages'
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal'
import Loader from './Loader/Loader'


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



	handleSearch = async searchText => {
		this.setState({ searchText, page: 1});
		try {
            const mass = await getImages(searchText, 1);
            const images = mass.hits;
            this.setState({ images });
        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
	}

	getSearchLoad = async () => {
        const nextPage = this.state.page + 1;
        try {
            const mass = await getImages(this.state.searchText, nextPage);
            this.setState(prevState => ({
                images: [...prevState.images, ...mass.hits],
                page: prevState.page + 1,
            }));
        } catch (error) {
            this.setState({ error });
        }
    };

	render() {
		const { error, images, isLoading, modal, searchText } = this.state;
		return (
			<div className='container'>				
				<Searchbar handleSearch={this.handleSearch} />
				{isLoading && <Loader />}
                {error && Notiflix.Notify.failure('Error', error.message, 'Okay')}
                {images.length === 0 &&
                    !isLoading &&
                    searchText &&
                    !error &&
					Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again')
				}
                {images.length > 0 && !isLoading && (
                    <ImageGallery
                        images={images}
                        getSearchLoad={this.getSearchLoad}
                        onImageClick={this.showModal}
                    ></ImageGallery>
                )}
                {modal.openModal && (
                    <Modal
                        largeImageURL={modal.largeImageURL}
                        closeModal={this.closeModal}
                    ></Modal>
                )}
			</div>
		)
	}
}

export default App