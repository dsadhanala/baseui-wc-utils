# Base UI: Web component utilities

#### Dependencies
- Node v6+
- Yarn (optional, only if you want to reduce packages install time)

#### To run local dev server (http://localhost:1818/)
```
npm start
```

1. Install dependencies
1. Clean build folder
1. lint JS files
1. starts webpack dev server
1. auto update browser window/tab using Hot Module Replacement (HMR)

#### To just generate docs for JS
```
npm run docs
```

#### To bundle for production
```
npm run release
```
1. This will perform first 3 steps from above and tree shake and minify for production
1. Also creates documentation for JS files using jsdoc blocker comments

#### Usage guide (to be updated)
Import only needed helpers to utilize tree shaking
```
import { dom, BaseClass } from 'baseui-wc-utils';
```
Or
```
import baseuiWcUtils from 'baseui-wc-utils';
```

in browser script tag
```
const { dom } = window.baseuiWcUtils or var dom = window.baseuiWcUtils.dom;
```
