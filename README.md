# xkcd-fun
> Get random comics from xkcd


```
$ npm install xkcd-fun
```

## Usage:

```js
var xkcd = require('xkcd-fun');

xkcd.img((err, res) => {
  if(!err) {
    console.log(res);
  }
});

// Would log something like:
{
  url: 'https://imgs.xkcd.com/comics/set_theory.png',
  title: 'Proof of Zermelo\'s well-ordering theorem given the Axiom of Choice: 1: Take S to be any set. 2: When I reach step three, if S hasn\'t managed to find a well-ordering relation for itself, I\'ll feed it into this wood chipper. 3: Hey, look, S is well-ordered.'
}
```
