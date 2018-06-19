# Webpack-config-generator

Gui for generating webpack.config.js file. Current active brunch -- dev4x (building a config for corresponding webpack version -- 4.x.x).

Some features are still in development: https://webpack-config-generator.app


## To add your favorite loader/plugin:

Just send me the desirable config part via PM or make an issue, I will add one.


## General dev info

Config is generated from config chunks in `src/config` folder.

Config chunks include metadata, suchch contains names, links do documentation and certain config feature state (on/off). These keys contain underscores: eg `__name`.

Metadata is required for successful building UI, if you prepare a chunk for a pull request, use existing chunks as a reference.


## Notes:

Previous attemps I've found on web, listed for historical reference:

https://github.com/linuxenko/unstuck-webpack

https://github.com/doug2k1/webpack-generator

Please PM me if you've met others.
