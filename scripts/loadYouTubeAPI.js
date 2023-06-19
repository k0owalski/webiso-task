function loadYouTubeAPI() {
	const tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-container', {
		videoId: 'ScMzIvxBSi4',
		playerVars: {
			modestbranding: 1,
			rel: 0,
			mute: 0,
		},
	});
}

const videoModal = document.getElementById('video-modal');

videoModal.addEventListener('hidden.bs.modal', function () {
	if (player && typeof player.stopVideo === 'function') {
		player.stopVideo();
	}
});

loadYouTubeAPI();
