const canvas = document.querySelector('#joyCanvas');
const c = canvas.getContext('2d');

let roundness          = 0.3,
    xArrivalOld        = 100,
    xArrival           = 100,
    yLineBegin         = 60,
    yArrivalOld        = yLineBegin,
    lineHeightStartEnd = 5,
    lineHeightQuarter  = 20,
    lineHeightMiddle   = 60,
    spaceBetween       = 13;

// to help position random points
const numberGenerator = (start, limit) => {return Math.floor(Math.random() * (limit-start)) + 1 + start} ;
//draws a curve between two point with the right amount of curviness depending on the spacing of start and begin point
const bezierDraw = (xArrival, yArrival) => {
    c.bezierCurveTo(
            xArrivalOld + roundness * (xArrival - xArrivalOld),
            yArrivalOld,
            xArrival - roundness * (xArrival - xArrivalOld),
            yArrival,
            xArrival,
            yArrival
        )
    //switch de variables
    xArrivalOld = xArrival;
    yArrivalOld = yArrival;
};

const lineDraw = () => {
    for (var i = 0; i < 80; i++) {
        // Y starting point for each line
        yLineBegin += spaceBetween;
        // reset
        yArrivalOld = yLineBegin;
        // X starting point for each line
        xArrival = 100;
        c.beginPath();
        c.moveTo(xArrival, yLineBegin);
        // to start at the same point for each line
        c.lineTo(xArrival + 3, yLineBegin);
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

        // to end at the same point
        c.lineTo(900, yLineBegin);
        //wave width
        c.lineWidth = 5;
        c.strokeStyle = '#fefefe';
        c.stroke();
        c.fillStyle = '#1b1b1b';
        // to hide a
        c.fillRect(0, yLineBegin, 1000, 20);
        c.fill();
    }
}
lineDraw()

let randomizer = document.querySelector('.randomizer');
// randomizer.addEventListener('click', loop);

let i = 0;
const loop = () => {
    if (i < 30) {
        requestAnimationFrame(loop); //Avant d'effectuer d'autre action
        //reset position
        yLineBegin = 60;
        yArrivalOld = yLineBegin;
        //redraw canvas
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillRect(0, 0, 1000, 1200);
        lineDraw()
        i++
    }else{
        i = 0;
    }
};







































/**
 * Push
 */
