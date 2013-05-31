## Game of life

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