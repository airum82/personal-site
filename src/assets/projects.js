import rachio from './rachio-controller-screenshot.png';
import love15 from './love-15-screenshot.png';
import UMG from './Ultimate-movie-guide-screenshot.png';
import paletteTown from './palette-town-screenshot.png';

export const projectsList = [
  {
    name: 'Rachio Device Controller',
    description: 'This project is a UI designed to interact with the rachio api.One needs an api key to fully use this application.The user may view available devices and the zones for each devices.For each device the user may run a single zone, all the zones or specified zones all for a period of time.The user may decide what order to run the specified zones.This project was made within a week.',
    img: rachio,
    url: 'https://github.com/airum82/Rachio-Controller'
  },
  {
    name: 'Love-15',
    description: 'An application for finding tennis courts in your area and saving them to a list of frequently used courts. It is made with React, Redux and firebase',
    img: love15,
    url: 'https://github.com/airum82/love-15'
  },
  {
    name: 'Ultimate-Movie-Guide',
    description: 'A UI for the Movie Db. It displays movies by 3 different categories and lets you search by title. It is made with React',
    img: UMG,
    url: 'https://github.com/airum82/CCB-movie-guide'
  },
  {
    name: 'Palette-Town',
    description: 'A random color scheme generator that lets you save palettes to projects. It is made with jQuery, express and Postgres',
    img: paletteTown,
    url: 'https://github.com/airum82/Palette-town'
  }
];