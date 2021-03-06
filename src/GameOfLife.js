var GameOfLife = {
    field: [],
    yLength: 0,
    xLength: 0,
    liveCell: '*',
    deadCell: '.',
    neighboursToBorn: 3,
    neighboursToLive: 2,
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

        if (neighbours == this.neighboursToBorn) {
            cell = this.liveCell;
        }

        if (neighbours > this.neighboursToBorn || neighbours < this.neighboursToLive) {
            cell = this.deadCell;
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
                    var isNeighbourExist = function () {
                        return (xItem >= 0
                            && xItem < this.xLength
                            && this.field[yItem][xItem] == this.liveCell
                        && ''+yItem+xItem != ''+yC+xC);
                    }.bind(this);

                    if (isNeighbourExist()) {
                        neighbours++;
                    }
                }, this);
            }
        }, this);

        return neighbours;
    }
};