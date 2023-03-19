import Component from 'react';
import PropTypes from 'prop-types';
import style from '../styles.module.css';

 class ImageGalleryItem extends Component {
    state = {};
    render() {
        const { webformatURL, largeImageURL, openModal } = this.props;
        return (
            <li className={style.ImageGalleryItem}>
                <img
                    src={webformatURL}
                    alt=""
                    className={style.ImageGalleryItemImage}
                    onClick={() => openModal(largeImageURL)}
                />
            </li>
        );
    }
}

export default ImageGalleryItem


ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};



