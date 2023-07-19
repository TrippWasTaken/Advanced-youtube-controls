import { createRoot } from 'react-dom/client';
import App from '@src/pages/content/components/Main/player';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'chrome-extension-youtube-controls';
root.style.minHeight = '100%';
root.style.minWidth = '100%';
const youtubePlayer = document.querySelector('div#movie_player.html5-video-player');
if (youtubePlayer) youtubePlayer.append(root);
else console.error('cannot find youtube player container');

createRoot(root).render(<App />);
