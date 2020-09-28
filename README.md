# isJSON
Check if the string is a valid JSON structure
### import the module in your deno app
```js
import { isJSON } from 'https://deno.land/x/is_json@v1.0.2/mod.ts'
```
or from ``nest.land`` packages
```js
import { isJSON } from 'https://x.nest.land/is_json@v1.0.2/mod.ts'
```
#### Usage:
```js
console.log(isJSON('{"username": "moncefplastin07"}'))                 // true
console.log(isJSON('{"favoriteColors": ["red", "green", "black"]}'))   // true
const users = '[{"username": "moncefplastin07", "favoriteColors": ["red", "green", "black"]},{"username": "moncefplastin08", "favoriteColors": ["yellow", "green", "blue"]}]'
console.log(isJSON(users))                                             // true

console.log(isJSON("{'username': 'moncefplastin07'}"))                 // false
console.log(isJSON(12))                                                // false
console.log(isJSON({isAdmin: true}))                                   // false
```
## Contribute with us from [``her``](https://github.com/moncefplastin07/deno-is-json)