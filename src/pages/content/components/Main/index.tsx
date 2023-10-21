import { createRoot } from 'react-dom/client';
import App from '@src/pages/content/components/Main/player';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'chrome-extension-youtube-controls';
root.style.minHeight = '100%';
root.style.minWidth = '100%';
let youtubePlayer;
const mountNode = () => {
  youtubePlayer = document.querySelector('div#movie_player.html5-video-player');
  if (youtubePlayer) {
    clearInterval(checkPlayer);
    youtubePlayer.append(root);

    createRoot(root).render(<App />);
  } else console.warn('Player has not been found');
};
const checkPlayer = setInterval(mountNode, 1000);
