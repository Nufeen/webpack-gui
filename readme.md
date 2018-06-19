# Webpack-gui

Gui for generating webpack.config file. Current active brunch -- dev4x (building a config for corresponding webpack version -- 4.x.x).

Some features are still in development: https://webpack-config-generator.app


## Dev commands

```bash
npm i
```

```bash
npm start
```


## To add your favorite loader/plugin:

If you've got no time to mess around just send me the desirable config part via PM or make an issue, it's not a big deal for me to add one.

Otherwise:

1. Add a chunk to `src/config` folder.
2. Use other files as a reference if you want to add metadata. It's kind of self-explainatory.
3. Metadata is required for successful building UI, so all fields must be filled.
4. I will most likely mark every new thing as `advanced` anyway to keep the default config as simple as possible, so it's a good option to choose by default.


## General dev info

Config is generated from config chunks in `src/config` folder.

Config chunks include metadata, such keys contain dashes: eg `__name`.

Metadata contains names, links do documentstion and certain config feature state (on/off).

This fields are excluded for output file.




## Notes:

Previous attemps I've found on web, listed for historical reference:

https://github.com/linuxenko/unstuck-webpack

https://github.com/doug2k1/webpack-generator

Please PM me if you've met others.
