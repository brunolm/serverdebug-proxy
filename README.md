# serverdebug-proxy

Executes a command internally and creates a proxy listening to server on localhost:5858 exposing it on port 8585 to provide access.

Sample usages:

```js
node_modules/.bin/serverdebug-proxy node --debug index.js

node_modules/.bin/serverdebug-proxy npm run debug
```