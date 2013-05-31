describe("Run tests", function(){

    var gof = GameOfLife;

    it("Game application should be defined", function() {
        expect(gof).toBeDefined();
    });

    it("Game field should be defined", function() {
        var field = ['...', '...', '...', '...'];
        gof.initField(field);
        expect(gof.field).toEqual(field);
    });

    it("Acceptance test for game of life", function(){
        var field = [
            '........',
            '....*...',
            '...**...',
            '........'
        ];

        gof.initField(field);
        var newField = gof.walk(gof.field);

        expect(newField).toEqual([
            '........',
            '...**...',
            '...**...',
            '........'
        ]);
    });

    it("When we walk through cells we should parse cells", function(){
        var field = ['...', '...', '...', '...'];
        gof.initField(field);
        spyOn(gof, 'processCell');
        gof.walk();
        expect(gof.processCell.callCount).toEqual(12);
    });

    it("When we walk parse cell we have to receive cell coordinates", function(){
        var field = ['.'];
        spyOn(gof, 'processCell');
        gof.walk(field);
        expect(gof.processCell).toHaveBeenCalledWith(0, 0);
    });

    it("When we have cell coordinates we should be able to count neighbours", function(){
        spyOn(gof, 'countNeighbours');
        gof.processCell('.', 0, 0);
        expect(gof.countNeighbours).toHaveBeenCalled();

    });

    it("When we have cell coordinates we should be able to count neighbours", function(){
        var x = 0;
        var y = 0;
        gof.field = ['.*.', '**.', '...', '...'];
        expect(gof.countNeighbours(x, y)).toBe(3);

    });

    it("When we process cell as a result we should receive the state of the Cell", function(){
        gof.field = ['.*.', '**.', '...', '...'];
        expect(gof.processCell(0, 0)).toBe('*');
        gof.field = ['.*.', '...', '...', '...'];
        expect(gof.processCell(0, 0)).toBe('.');
        gof.field = ['.**', '***', '...', '...'];
        expect(gof.processCell(1, 0)).toBe('.');
    });



});
