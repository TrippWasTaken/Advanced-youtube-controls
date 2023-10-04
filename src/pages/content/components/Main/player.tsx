import { useEffect, useRef } from 'react';
import { type YouTubePlayer } from 'youtube-player/dist/types';
import PlayerZones from './getPlayerZones';
import NotificationContainer from './NotificationContainer';

export default function App() {
  let delay = null;
  const childRef = useRef(null);
  const overlay = useRef<HTMLDivElement | null>(null);
  const player: YouTubePlayer = document.querySelector('#movie_player') as unknown as YouTubePlayer;
  useEffect(() => {
    if (overlay.current) overlay.current.addEventListener('wheel', (e) => scrollAction(e), { passive: false });

    console.log('runtime ID test',chrome.runtime.id);
    // chrome.runtime.connect()
    chrome.runtime.sendMessage('bmemophofdedblhcbjepmaobnbefafdj','ytControlsSettings', function(response){
      console.log("cool message response: ", response)
    })


    return overlay.current.removeEventListener('wheel', (e) => scrollAction(e));
  }, []);
  const scrollAction = (e) => {
    e.preventDefault();
    const { getVolume, setVolume, seekBy, setPlaybackRate, getPlaybackRate, getCurrentTime } = player;
    const delta = -Math.sign(e.deltaY);
    childRef.current.changeNotifState(true);
    clearTimeout(delay);
    delay = setTimeout(() => {
      childRef.current.changeNotifState(false);
    }, 1000);

    const step = e.target.dataset.functionStep;
    const field = e.target.dataset.function;

    switch (field) {
      case 'volume':
        setVolume(getVolume() + delta * step);
        childRef.current.setNotif([field, getVolume()]);
        break;
      case 'seek':
        seekBy(delta * step);
        childRef.current.setNotif([field, new Date(getCurrentTime() * 1000).toISOString().slice(11, 19)]);
        break;
      case 'speed':
        setPlaybackRate(getPlaybackRate() + (delta * (step < 5 ? 5 : step)) / 100);
        childRef.current.setNotif([field, getPlaybackRate()]);
        break;
      default:
        break;
    }
  };

  const playStop = () => {
    const { playVideo, pauseVideo, getPlayerState } = player;
    switch (getPlayerState()) {
      case 1:
        pauseVideo();
        break;
      case 2:
        playVideo();
        break;
      default:
        break;
    }
  };

  const restoreFullscreen = () => {
    const { toggleFullscreen } = player;
    toggleFullscreen();
  };

  return (
    <>
      <NotificationContainer ref={childRef} />
      <div
        ref={overlay}
        className="content-view"
        style={{ position: 'absolute', zIndex: 11, minHeight: '100%', minWidth: '100%', border: '0px solid white' }}
        onClick={() => playStop()}
        onDoubleClick={() => restoreFullscreen()}
      >
        <PlayerZones />
      </div>
    </>
  );
}
