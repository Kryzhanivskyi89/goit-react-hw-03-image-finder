import Component from 'react'
import PropTypes from 'prop-types';
import style from '../styles.module.css'


class ImageGalleryItem extends Component {
    state = {};
    render() {
        const { webformatURL, largeImageURL, showModal } = this.props;
        
        return (
            <li className={style.ImageGalleryItem}>
                <img
                    src={webformatURL}
                    alt=""
                    className={style.ImageGalleryItemImage}
                    onClick={() => showModal(largeImageURL)}
                />
            </li>
        );
    }
}

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    showModal: PropTypes.func,
};