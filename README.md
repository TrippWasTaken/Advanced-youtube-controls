<div align="center">
  <img src="public/icon-128.png" alt="logo"/>
  <h1>Adavanced youtube controls for Chrome using React</h1>
</div>

 > This extension is built using the boilerplate from [chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)

## How to use
I have not yet put this on the chrome store and not sure when I will or if I will as this was made more for personal use but if you wish to try it youre free to do so.

1. First download the project and build it using either ```npm run dev``` or ```npm run build```
2. Next make sure to enable developer mode in the chrome extension mneu
3. click load unpacked button
4. select the extensions ```dist``` folder
5. Once youve added the folder the extension is ready to use, but saving and settings may not work if your ID differs from the one I have.
6. Check your ID on the unpacked extension and replace the ID in the ```src/pages/variables/APP_ID.ts``` file
7. ```npm run buld``` or ```npm run dev``` again
8. lastly reload the extension in chrome and everything should be working
   
## Extension Controls
### For now this only works on regular youtube videos, youtube music and shorts are something I plan to add

When hovering over a video the player is divided into 3 sections as follows => Speed | Seeking/Time | Volume
Each zone has 3 steps within it so depending where you scroll the range will differ.
**For example the Volume area**
 - scrolling at the top is +/-1
 - scrolling at the center is +/-5
 - scrolling at the bottom is +/-10

For now the zones are not configurable and all have hardcoded steps


#Todo / Future functionality
- [ ] Add a full options page to allow greater control over zones and their steps.
- [ ]  Add proper logo and images so that I can put this on the chrome store
- [ ]  actually add unit tests
- [ ]  Possibly remove the context state from the popup (use only chrome messaging? but then why not just remove react and make it pure js or svelte?)
- [ ]  Remove tailwind and use own design/components
- [ ]  Add force quality option (although this cant be done via the player api and will have to be manual event driven which might be ugly)
- [ ]  Potentially add different subzone controls? (eg clicking on top left will mute the video, clicking center will turn captions on)
