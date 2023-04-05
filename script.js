const videoPlayer = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');
const loadingMsg = document.getElementById('loadingMsg');

playBtn.addEventListener('click', () => {
	videoPlayer.play();
});

stopBtn.addEventListener('click', () => {
	videoPlayer.pause();
});

volumeSlider.addEventListener('input', () => {
	videoPlayer.volume = volumeSlider.value;
});

videoPlayer.addEventListener('loadedmetadata', () => {
	loadingMsg.style.display = 'none';
});

videoPlayer.addEventListener('error', () => {
	alert('Ha ocurrido un error al cargar el vídeo.');
});

function loadVideo(file) {
	if (!file.type.match('video/mp4')) {
		alert('El archivo no es un vídeo en formato MP4.');
		return;
	}
	const fileURL = URL.createObjectURL(file);
	videoPlayer.src = fileURL;
	loadingMsg.style.display = 'block';

	videoPlayer.addEventListener('canplaythrough', () => {
		loadingMsg.style.display = 'none';
		videoPlayer.play();
	}, {once: true});
}