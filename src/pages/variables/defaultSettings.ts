import { appSettings } from 'virtual:reload-on-update-in-background-script';

export const defaultSettings: appSettings = {
  saveVolume: true,
  savedVolume: 50,
  zonesPerControl: 3,
  speedControls: true,
  seekingControls: true,
  volumeControls: true,
  speedSteps: [
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
  ],
  seekingSteps: [
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
  ],
  volumeSteps: [
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
};
