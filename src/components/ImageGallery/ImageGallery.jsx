import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import style from '../styles.module.css';

class ImageGallery extends Component {   
    render() {
        const {images, openModal, searchLoadMore} = this.props;
        return (
            <>
                <ul className={style.ImageGallery}>
                    {images.map(({id, webformatURL, largeImageURL}) => (
                        <ImageGalleryItem
                            key={id}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            openModal={openModal}
                        />
                    ))}
                </ul>
                <Button searchLoadMore={searchLoadMore}>
                        Load More...
                </Button>                
            </>        
        )
    }
}

export default ImageGallery

ImageGallery.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,    
    openModal: PropTypes.func.isRequired,
}