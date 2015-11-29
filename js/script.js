const canvas = document.querySelector('#joyCanvas');
const c = canvas.getContext('2d');

let roundness          = 0.3,       // determines the amount of roundness of each
    xArrivalOld        = 100,
    xArrival           = 100,
    yLineBegin         = 60,        // where the first line begins
    yArrivalOld        = yLineBegin,
    lineHeightStartEnd = 5,         // height of the begining of the lineHeightStartEnd
    lineHeightQuarter  = 20,        // height of the transition between the high curves & the low ones
    lineHeightMiddle   = 60,        // height of the high curves
    spaceBetween       = 13;        // space between each lines

const numberGenerator = (start, limit) => {return Math.floor(Math.random() * (limit-start)) + 1 + start} ; // to help position random points
// draws a curve between two point with the right amount of curviness depending on the spacing of start and begin point
const bezierDraw = (xArrival, yArrival) => {
    c.bezierCurveTo(
            xArrivalOld + roundness * (xArrival - xArrivalOld), // x position of the FIRST bezier point taking account of the distance between the last and the new point to have an ease-in
            yArrivalOld,                                        // same height as the OLD one
            xArrival - roundness * (xArrival - xArrivalOld),    // x position of the SECOND bezier point taking account of the distance between the last and the new point to have an ease-out
            yArrival,                                           // same height as the NEW one
            xArrival,                                           // new x position
            yArrival                                            // new y position
        )
    xArrivalOld = xArrival;
    yArrivalOld = yArrival;
};

const lineDraw = () => {
    for (var i = 0; i < 80; i++) {
        yLineBegin += spaceBetween; // Y starting point for each line
        yArrivalOld = yLineBegin;   // reset
        xArrival = 100;             // X starting point for each line
        c.beginPath();
        c.moveTo(xArrival, yLineBegin);
        c.lineTo(xArrival + 3, yLineBegin); // to start at the same point for each line
        xArrival += 3;
        // draw begin
        while (xArrival < 280) {
            // space between each new point
            xArrival = numberGenerator(xArrival, xArrival + 20);
            bezierDraw(xArrival, (numberGenerator(yLineBegin - lineHeightStartEnd, yLineBegin)))
        }
        // first quarter
        while (xArrival < 350) {
            xArrival = numberGenerator(xArrival, xArrival + 40);
            bezierDraw(xArrival, (numberGenerator(yLineBegin - lineHeightQuarter, yLineBegin)))
        }
        // draw middle
        while (xArrival < 600) {
            xArrival = numberGenerator(xArrival, xArrival + 60);
            bezierDraw(xArrival, (numberGenerator(yLineBegin - lineHeightMiddle, yLineBegin)))
        }
        // draw third quarter
        while (xArrival < 680) {
            xArrival = numberGenerator(xArrival, xArrival + 40);
            bezierDraw(xArrival, (numberGenerator(yLineBegin - lineHeightQuarter, yLineBegin)))
        }
        // draw end
        while (xArrival < 880) {
            xArrival = numberGenerator(xArrival, xArrival + 20);
            bezierDraw(xArrival, (numberGenerator(yLineBegin - lineHeightStartEnd, yLineBegin)))
        }
        xArrivalOld = 100;
        c.lineTo(900, yLineBegin); // to end at the same point
        c.lineWidth = 5;
        c.strokeStyle = '#fefefe';
        c.stroke();
        c.fillStyle = '#1b1b1b';
        c.fillRect(0, yLineBegin, 1000, 20); // to hide aberations
        c.fill();
    }
}
lineDraw()

let i = 0;
const loop = () => {
    if (i < 30) {
        requestAnimationFrame(loop);
        //reset position
        yLineBegin = 60;
        yArrivalOld = yLineBegin;
        //redraw canvas
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillRect(0, 0, 1000, 1200);
        lineDraw() //initialize drawing
        i++
    }else{
        i = 0;
    }
};
