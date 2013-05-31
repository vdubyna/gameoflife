var GameOfLife = {
    field: [],
    yLength: 0,
    xLength: 0,
    initField: function (field) {
        this.field = field;
        this.xLength = field[0].length;
        this.yLength = field.length;
    },
    walk: function () {
        var newField = [];
        this.field.map(function(row, y) {
            newField[y] = '';
            for (var x = 0; x < row.length; x++) {
                newField[y] += this.processCell(x, y);
            }
        }, this);

        return this.field = newField;
    },
    processCell: function (x, y) {
        var cell = this.field[y][x];
        var neighbours = this.countNeighbours(x, y);

        if (neighbours == 3) {
            cell = '*';
        }

        if (neighbours > 3 || neighbours < 2) {
            cell = '.';
        }

        return cell;
    },
    countNeighbours: function (xC, yC) {
        var findNeighbours = function(a){
            return [-1, 0, +1].map(function(n){
                return a + (n);
            }, this);
        };

        var neighbours = 0;

        findNeighbours(yC).map(function(yItem){
            if (yItem >= 0 && yItem < this.yLength) {
                findNeighbours(xC).map(function(xItem) {
                    if (xItem >= 0
                        && xItem < this.xLength
                        && this.field[yItem][xItem] == '*'
                        && ''+yItem+xItem != ''+yC+xC
                    ) {
                        neighbours++;
                    }
                }, this);
            }
        }, this);

        return neighbours;
    }
};