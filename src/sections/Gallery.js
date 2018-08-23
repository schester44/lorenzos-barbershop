import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import Section from "../components/Section"

const TOTAL_IMAGES = 26

class GalleryContainer extends React.Component {
	images = Array(TOTAL_IMAGES)
		.fill()
		.map((v, i) => ({
			original: `gallery/${i}.jpg`
		}))

	state = {
		lightboxIsOpen: false,
		currentImage: 0
	}

	openLightbox = (event, obj) => {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true
		})
	}

	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		})
	}
	gotoPrevious = () => {
		this.setState({ currentImage: this.state.currentImage - 1 })
	}

	gotoNext = () => {
		this.setState({ currentImage: this.state.currentImage + 1 })
	}

	render() {
		return (
			<Section {...this.props} title="Photo Gallery">
				<div className="gallery-wrapper">
					<ImageGallery lazyLoad={true} originalClass="gallery-image" showThumbnails={false} items={this.images} />
				</div>
			</Section>
		)
	}
}

export default GalleryContainer
