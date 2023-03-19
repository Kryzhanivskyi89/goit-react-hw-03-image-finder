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

	openModal = largeImageURL => {
		this.setState({modal: {largeImageURL, isShowModal: true }})
	}

	closeModal = () => {
		this.setState({modal: {largeImageURL: '', isShowModal: false }})
	}


	handleSearch = async searchText => {
		this.setState({ searchText, page: 1, isLoading: true});
		try {
            const imagesArray = await getImages(searchText, 1);
            const images = imagesArray.hits;
            this.setState({ images });
        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
	}

	searchLoadMore = async () => {
        const nextPage = this.state.page + 1;
        try {
            const imagesArray = await getImages(this.state.searchText, nextPage);
            this.setState(prevState => ({
                images: [...prevState.images, ...imagesArray.hits],
                page: prevState.page + 1,
            }));
        } catch (error) {
            this.setState({ error });
        }
    };

	render() {
		const { searchText,  images, isLoading, modal, error } = this.state;
		return (
            <div >	                
				<Searchbar handleSearch={this.handleSearch} ></Searchbar>
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
                        searchLoadMore={this.searchLoadMore}
                        openModal={this.openModal}
                    ></ImageGallery>
                )}
                {modal.isShowModal && (
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