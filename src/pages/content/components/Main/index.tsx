import { createRoot } from 'react-dom/client';
import App from '@src/pages/content/components/Main/player';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'chrome-extension-youtube-controls';
root.style.minHeight = '100%';
root.style.minWidth = '100%';
let youtubePlayer: HTMLElement;
const mountNode = () => {
  youtubePlayer = document.querySelector('div#movie_player.html5-video-player');
  if (youtubePlayer) {
    clearInterval(checkPlayer);
    console.log('Player found, clearing interval');
    youtubePlayer.append(root);
    createRoot(root).render(<App />);
  } else console.warn('Player has not been found, trying again in 1 second');
};
const checkPlayer = setInterval(mountNode, 1000);
