# chrome-darkerer

Tiny Chrome extension that inverts a handful of light-themed sites that don't ship a real dark mode. Toggles on/off via the extension icon.

Currently targets:

- npmjs.com
- stackoverflow.com
- developer.zendesk.com
- *.awsapps.com
- *.amazonaws.com
- gitlab.com

No network calls, no tracking. The actual logic is ~10 lines of CSS-filter injection in `darkerer.js`.

## Install

1. Clone:
   ```sh
   git clone https://github.com/andrewtoelle/chrome-darkerer.git
   ```
2. In Chrome, open `chrome://extensions`.
3. Toggle **Developer mode** (top right) on.
4. Click **Load unpacked** and pick the `chrome-darkerer` folder.
5. Visit one of the targeted sites — it should render inverted. Click the extension icon to toggle off.

## Updating

```sh
cd chrome-darkerer
git pull
```

Then on `chrome://extensions`, click the ↻ reload icon on the extension card.

## Adding a new site

Edit `manifest.json` and add a pattern to `content_scripts[0].matches`, e.g.:

```json
"https://example.com/*"
```

Reload the extension on `chrome://extensions` and reload the target tab.

## How it works

`darkerer.js` injects a `<style>` tag with `filter: invert(0.9)` on `html, img, video, canvas, svg`. Re-injecting removes it (toggle). That's the whole thing.
