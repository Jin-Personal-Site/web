'use strict'
const drawEllipse = (
	ctx,
	image,
	offsetX,
	offsetY,
	a,
	b,
	imageWidth,
	deg = 0,
) => {
	const imageHeight = (imageWidth * image.height) / image.width
	const x = a * Math.sin((deg * Math.PI) / 180)
	const y = b * Math.cos((deg * Math.PI) / 180)
	const scale = 1 + 0.3 * (y / b)
	ctx.drawImage(
		image,
		x + offsetX,
		y + offsetY,
		imageWidth * scale,
		imageHeight * scale,
	)
}
self.onmessage = async (event) => {
	const { canvas } = event.data
	const ctx = canvas.getContext('2d')
	const imageBitmap1 = await fetch('/images/tech/vue.png')
		.then((response) => response.blob())
		.then((blob) => createImageBitmap(blob))
	const imageBitmap2 = await fetch('/images/tech/react.png')
		.then((response) => response.blob())
		.then((blob) => createImageBitmap(blob))
	let deg = 0,
		deg2 = -30
	const drawImage = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		drawEllipse(
			ctx,
			imageBitmap1,
			canvas.width / 2 - 300 / 2,
			canvas.height / 2 - (300 * 80) / 400 / 2,
			300,
			(300 * 80) / 400,
			120,
			deg,
		)
		deg += 1
		drawEllipse(
			ctx,
			imageBitmap2,
			canvas.width / 2 - 400 / 2,
			100,
			400,
			80,
			120,
			deg2,
		)
		deg2 += 1
		drawEllipse(
			ctx,
			imageBitmap2,
			canvas.width / 2 - 400 / 2,
			300,
			400,
			80,
			120,
			deg2 + 30,
		)
	}
	const animateImage = () => {
		drawImage()
		requestAnimationFrame(animateImage)
	}
	animateImage()
}
//# sourceMappingURL=TechSphere.worker.js.map
