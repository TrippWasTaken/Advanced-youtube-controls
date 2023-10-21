import { useGlobalState } from '../context/globalStateContext';

const Wrapper = () => {
  const {
    state: { settings },
    actions: { modifySetting }
  } = useGlobalState();

  return (
    <div className="App">
      <h1 className="text-xl">Settings </h1>
      {settings && (
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Video Speed</span>
            <input
              type="checkbox"
              checked={settings.speedControls}
              className="checkbox"
              onChange={(e) => modifySetting('speedControls', e.target.checked)}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Video Seeking</span>
            <input
              type="checkbox"
              checked={settings.seekingControls}
              className="checkbox"
              onChange={(e) => modifySetting('seekingControls', e.target.checked)}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Video Volume</span>
            <input
              type="checkbox"
              checked={settings.volumeControls}
              className="checkbox"
              onChange={(e) => modifySetting('volumeControls', e.target.checked)}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Save Volume between videos</span>
            <div
              className="tooltip tooltip-left before:w-[10rem] before:content-[attr(data-tip)]"
              data-tip="Sometimes other extensions can cause youtube to refresh on video change, 
              enabling this will maintain audio levels when this happens"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="checkbox"
              checked={settings.saveVolume}
              className="checkbox"
              onChange={(e) => modifySetting('saveVolume', e.target.checked)}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Wrapper;
