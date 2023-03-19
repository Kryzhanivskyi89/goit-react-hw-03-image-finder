import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import style from '../styles.module.css';

const ImageGallery = ({images, openModal, }) => {   
    
    return (
        <ul className={style.ImageGallery}>
            {images.map(({id, webformatURL, largeImageURL, tags}) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}                    
                    openModal={() => openModal(largeImageURL, tags)}
                    tag={tags}
                />
            ))}
        </ul>         
    )
    
    
}

export default ImageGallery

ImageGallery.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,    
    openModal: PropTypes.func.isRequired,
}

 

// class ImageGallery extends Component {   
//     render() {
//         const {images, openModal, searchLoadMore} = this.props;
//         return (
//             <>
//                 <ul className={style.ImageGallery}>
//                     {images.map(({id, webformatURL, largeImageURL}) => (
//                         <ImageGalleryItem
//                             key={id}
//                             webformatURL={webformatURL}
//                             largeImageURL={largeImageURL}
//                             openModal={openModal}
//                         />
//                     ))}
//                 </ul>
//                 <Button searchLoadMore={searchLoadMore}>
//                         Load More...
//                 </Button>                
//             </>        
//         )
//     }
// }