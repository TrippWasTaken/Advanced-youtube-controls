import { appSettings } from 'virtual:reload-on-update-in-background-script';
type props = {
  settings: appSettings
};
const PlayerZones = ({ settings }: props) => {
  // @TODO create settings page to allow finer control of things like player steps
  // and multi zone from just the settings so this ugly var doesnt need to be used
  const playerZones = [
    {
      zone: 'left',
      enable: settings.speedControls,
      controls: 'speed',
      subZones: [
        {
          zone: true,
          step: 1
        },
        {
          zone: true,
          step: 5
        },
        {
          zone: true,
          step: 10
        }
      ]
    },
    {
      zone: 'middle',
      enable: settings.seekingControls,
      controls: 'seek',
      subZones: [
        {
          zone: true,
          step: 1
        },
        {
          zone: true,
          step: 5
        },
        {
          zone: true,
          step: 10
        }
      ]
    },
    {
      zone: 'right',
      enable: settings.volumeControls,
      controls: 'volume',
      subZones: [
        {
          zone: true,
          step: 1
        },
        {
          zone: true,
          step: 5
        },
        {
          zone: true,
          step: 10
        }
      ]
    }
  ];
  const filteredZones = playerZones.filter((item) => item.enable);
  const innerZonesFiltered = filteredZones.map((item) => ({
    ...item,
    subZones: item.subZones.filter((subZone) => subZone.zone)
  }));
  return (
    <>
      {innerZonesFiltered.map((innerZone) => (
        <div className={`innerZone`} id={`zoneType-${innerZone.controls}`} key={innerZone.zone}>
          {innerZone.subZones.map((subZone, index) => (
            <div
              key={`${innerZone.zone}-${index}`}
              className="subZone"
              data-function={innerZone.controls}
              data-function-step={subZone.step}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default PlayerZones;
