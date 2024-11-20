document.getElementById('animate-btn').addEventListener('click', () => {
	cons box = document.querySelector('.moving-box');
	box.style.animation = 'slide 2s forward';
	
	// Reset animation after it ends
	box.addEventListener('animationend', () => {
		box.style.animation = 'float 3s infinite';
	});
});
// keyframe for Button-triggered animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule('
@keyframes slide {
	0% { trasform: tranlateX(0);}
	50% {trasform: tranlateX(200px);}
	100% {trasform: tranlateX(0);}
}',styleSheet.cssRules.length0;