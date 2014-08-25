## Game of life

[ ![Codeship Status for vdubyna/gameoflife](https://codeship.io/projects/ebf33e10-0e84-0132-7b5c-26a091912784/status)](https://codeship.io/projects/32435)

### Usage

```javascript
var runGame = function () {

            var gof = GameOfLife;
            gof.initField([
                '.........',
                '....*....',
                '....*....',
                '....*....',
                '.........'
            ]);

            return function() {
                console.log(gof.walk().reduce(function(c,n){
                    return c + "\n" + n;
                }));
            }.bind(this);
        }

        setInterval(runGame(), 1000);
```
