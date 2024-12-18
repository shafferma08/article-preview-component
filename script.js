const shareButton = document.getElementById('share-button');
const shareMedia = document.getElementById('social-media');
const returnButton = document.getElementById('return-button')

shareButton.addEventListener('click', () => {
	shareMedia.classList.toggle('active')
});

returnButton.addEventListener('click', () => {
	shareMedia.classList.remove('active')
	// if (shareMedia.classList.contains('active')) {
	// 	shareMedia.classList.remove('active')
	// }
});