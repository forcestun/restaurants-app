if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(() => {
		return "Service worked initiated."
	})
	.catch(() => {
		throw new Error("Service Worked Failed. Please try again later.")
	});
}