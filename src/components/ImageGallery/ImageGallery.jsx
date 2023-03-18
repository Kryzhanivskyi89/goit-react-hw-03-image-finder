// import { Component } from 'react'
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
// import Button from '../Button/Button'
// import style from '../styles.module.css'


// class ImageGallery extends Component {
   
//     render() {
//         const {images, showModal, getSearchLoad} = this.props;
//         return (
//         <>
//             <ul className={style.ImageGallery}>
//             {images.map(({id, webformatURL, tags, largeImageURL}) => (
//                 <ImageGalleryItem
//                     key={id}
//                     webformatURL={webformatURL}
//                     tags={tags}
//                     largeImageURL={largeImageURL}
//                     showModal={showModal}
//                     />
// 			))}
//             </ul>
//             <Button getSearchLoad={getSearchLoad}>
//                     Load More...
//             </Button>
            
//         </>
        
//         )
//     }
// }


// export default ImageGallery