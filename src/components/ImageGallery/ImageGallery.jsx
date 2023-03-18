import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = (images) => {
    return (
        <ul class="gallery">
            {/* {images.map(({id, webformatURL, tags, largeImageURL}) => {
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL} />
			})} */}
        </ul>
    )
}




export default ImageGallery