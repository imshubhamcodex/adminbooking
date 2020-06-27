function doScrolling(element, duration) {
	var startingY = window.pageYOffset
	var elementY =  window.pageYOffset + document.querySelector(element).getBoundingClientRect().top

	var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
	var diff = targetY - startingY
	var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
	var start

	if (!diff) return

		window.requestAnimationFrame(function step(timestamp) {
			if (!start) start = timestamp	

				var time = timestamp - start
			var percent = Math.min(time / duration, 1)
			percent = easing(percent)
			window.scrollTo(0, startingY + diff * percent)
			if (time < duration) {
				window.requestAnimationFrame(step)
			}
		})
}
export default doScrolling;
















