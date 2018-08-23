import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import styled from "styled-components"

const Container = styled("div")`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 7em 1em 3.5em 1em;
	border-bottom: 2px dashed rgba(32, 32, 32, 0.1);
	background: rgba(242, 242, 242, 0.8);

	h1 {
		font-weight: 700;
		margin-bottom: 0.5em;
		font-size: 60px;
		text-align: center;
		font-family: "Kaushan Script", cursive;
	}

	.gallery-wrapper {
		width: 100%;
	}

	.image-gallery-slide {
		background: rgba(245, 245, 245, 1);
	}

	.image-gallery-slides {
		text-align: center;
	}

	.image-gallery-slide {
		img {
			width: auto;
			height: 500px;
		}
	}
`

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
			<Container>
				<h1>Photo Gallery</h1>
				<div className="gallery-wrapper">
					<ImageGallery lazyLoad={true} originalClass="gallery-image" showThumbnails={false} items={this.images} />
				</div>
			</Container>
		)
	}
}

export default GalleryContainer
