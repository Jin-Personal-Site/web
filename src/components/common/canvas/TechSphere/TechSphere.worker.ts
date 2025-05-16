type EventDataType = {
	canvas: OffscreenCanvas
}

const drawEllipse = (
	ctx: OffscreenCanvasRenderingContext2D,
	image: ImageBitmap,
	offsetX: number,
	offsetY: number,
	a: number,
	b: number,
	imageWidth: number,
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

self.onmessage = async (event: MessageEvent<EventDataType>) => {
	const { canvas } = event.data
	const ctx = canvas.getContext('2d')!

	const imageBitmap1 = await fetch('/images/tech/vue.png')
		.then((response) => response.blob())
		.then((blob) => createImageBitmap(blob))
	// const blob = await response.blob()
	// const imageBitmap = await createImageBitmap(blob)

	const imageBitmap2 = await fetch('/images/tech/react.png')
		.then((response) => response.blob())
		.then((blob) => createImageBitmap(blob))

	// let deg = 0
	// const a = 400,
	// 	b = 80,
	// 	imageWidth = 120,
	// 	imageHeight = (imageWidth * imageBitmap.height) / imageBitmap.width,
	// 	offsetX = canvas.width / 2 - imageWidth / 2,
	// 	offsetY = canvas.height / 2 - imageHeight / 2
	// let x = 0,
	// 	y = 0

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

		// deg += 0.25

		// x = a * Math.sin((deg * Math.PI) / 180)
		// y = b * Math.cos((deg * Math.PI) / 180)
		// const scale = 1 + 0.3 * (y / b)

		// ctx.drawImage(
		// 	imageBitmap,
		// 	x + offsetX,
		// 	y + offsetY,
		// 	imageWidth * scale,
		// 	imageHeight * scale,
		// )
	}

	// let deg = 0,
	// 	R = 100,
	// 	offsetX = canvas.width / 2,
	// 	offsetY = canvas.height / 2

	// const drawImage = () => {
	// 	// ctx.clearRect(x, y, 100, (100 * imageBitmap.height) / imageBitmap.width)
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height)
	// 	deg += 1

	// 	const x = R * Math.sin((deg / 180) * Math.PI)
	// 	const y = R * Math.cos((deg / 180) * Math.PI)
	// 	const imageWidth = 200
	// 	const imageHeight = (imageWidth * imageBitmap.height) / imageBitmap.width

	// 	ctx.drawImage(
	// 		imageBitmap,
	// 		x + R - imageWidth / 2,
	// 		y + R - imageHeight / 2,
	// 		imageWidth,
	// 		imageHeight,
	// 	)
	// }

	const animateImage = () => {
		drawImage()
		requestAnimationFrame(animateImage)
	}

	animateImage()
}
