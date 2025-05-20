export const setRequestAnimationFrameInterval = (
	cb: () => any,
	duration: number,
) => {
	let lastTime = performance.now()
	const intervalResult = {
		frameId: 0,
	}

	const tick = (currentTime: number) => {
		if (currentTime - lastTime >= duration) {
			cb()
			lastTime = currentTime
		}
		intervalResult.frameId = requestAnimationFrame(tick)
	}

	intervalResult.frameId = requestAnimationFrame(tick)
	return intervalResult
}

export const clearRequestAnimationFrameInterval = (frameId: number) => {
	cancelAnimationFrame(frameId)
}
