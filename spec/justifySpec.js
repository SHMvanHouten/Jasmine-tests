// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width.
// The longest word will never be greater than this width.
//
//     Here are the rules:
//
//     Use spaces to fill in the gaps between words.
//     Each line should contain as many words as possible.
//     Use '\n' to separate lines.
//     Gap between words can't differ by more than one space.
// Lines should end with a word not a space.
// '\n' is not included in the length of a line.
//     Large gaps go first, then smaller ones: 'Lorem---ipsum---dolor--sit--amet' (3, 3, 2, 2 spaces).
// Last line should not be justified, use only one space between words.
//     Last line should not contain '\n'
// Strings with one word do not need gaps ('somelongword\n').
//     Example with width=30:
//
// Lorem  ipsum  dolor  sit amet,
// "consectetur  adipiscing  elit.\n
// Vestibulum    sagittis   dolor\n
// mauris,  at  elementum  ligula\n
// tempor  eget.  In quis rhoncus\n
// nunc,  at  aliquet orci. Fusce\n
// at   dolor   sit   amet  felis\n
// suscipit   tristique.   Nam  a\n
// imperdiet   tellus.  Nulla  eu\n
// vestibulum    urna.    Vivamus\n
// tincidunt  suscipit  enim, nec\n
// ultrices   nisi  volutpat  ac.\n
// nulla et dolor."
//     Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).
//
// Have fun :)

describe("Justify", function(){
    describe("getJustifiedText", function(){
        it("should justify the input text to fit in the given margins", function(){
            var editor = new Justify();
            var text = "consectetur adipiscing elit. Vestibulum sagittis dolor";
            var length = 30;
            expect(editor.getJustifiedText(text, length)).toEqual("consectetur  adipiscing  elit.\nVestibulum sagittis dolor")
        });
    });

    describe('wordCalculator', function(){
        it("should calculate how many words can fit within a margin", function(){
            var editor = new Justify();
            var length = 25;
            var text = "consectetur adipiscing elit. Vestibulum sagittis dolor";
            expect(editor.divideTheTextUpIntoFittingSentencesArray(text, length)).toEqual([ [ 'consectetur', ' adipiscing' ], [ 'elit.', ' Vestibulum', ' sagittis' ], [ 'dolor' ] ]);
        });
    });
    xdescribe("lengthComparer", function(){
        it("should return the difference in length between the each inputstring and the length parameter", function(){
            var editor = new Justify();
            var length = 25;
            var fittingSentencesArray = [ [ 'consectetur', ' adipiscing' ], [ 'elit.', ' Vestibulum', ' sagittis' ], [ 'dolor' ] ];
            expect(editor.getLengthDifference(fittingSentencesArray,length)).toEqual([3,0])
        });
    });
    describe("spaceAdder", function(){
        it("should add the amount of spaces necessary between each word", function(){
            var editor = new Justify();
            var lineLengthDifference = 3;
            var lineArray = [ 'consectetur', ' adipiscing' ];
            expect(editor.addSpaces(lineArray,lineLengthDifference)).toEqual([ 'consectetur    adipiscing' ])
        });
        it("should add the amount of spaces necessary between each word", function(){
            var editor = new Justify();
            var lineLengthDifference = 2;
            var lineArray = [ 'conset', ' adipiscing', ' fiets' ];
            expect(editor.addSpaces(lineArray,lineLengthDifference)).toEqual([ 'conset  adipiscing  fiets' ])
        });
        it("should add the amount of spaces necessary between each word", function(){
            var editor = new Justify();
            var lineLengthDifference = 3;
            var lineArray = [ 'conse', ' adipiscing', ' fiets' ];
            expect(editor.addSpaces(lineArray,lineLengthDifference)).toEqual([ 'conse   adipiscing  fiets' ])
        });


    });
});