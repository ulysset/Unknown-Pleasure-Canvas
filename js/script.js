const canvas = document.querySelector('#analyser_render');
const c = canvas.getContext('2d');

let roundness = 0.3,
    xArrivalOld = 100,
    xArrival = 100,
    yLineBegin = 40,
    yArrivalOld = yLineBegin,
    lineHeightStartEnd = 5,
    lineHeightQuarter = 12,
    lineHeightMiddle = 40,
    spaceBetween = 13;

// to help position random points
const numberGenerator = (start, limit) => {return Math.floor(Math.random() * (limit-start)) + 1 + start} ;
//draws a curve between two point with the right amount of curviness depending on the spacing of start and begin point
const bezierDraw = (xArrival, yArrival) => {
    c.bezierCurveTo(xArrivalOld + roundness * ( xArrival - xArrivalOld), yArrivalOld, xArrival - roundness * (xArrival - xArrivalOld), yArrival, xArrival, yArrival)
    //switch de variables
    xArrivalOld = xArrival;
	yArrivalOld = yArrival;
};

for (var i = 0; i< 80; i++){
    console.log(xArrivalOld, xArrival, yLineBegin, yArrivalOld, lineHeightStartEnd, lineHeightQuarter, lineHeightMiddle, spaceBetween)
    console.log('xArrivalOld', 'xArrival', 'yLineBegin', 'yArrivalOld', 'lineHeightStartEnd','lineHeightQuarter', 'lineHeightMiddle', 'spaceBetween')
    // Y starting point for each line
    yLineBegin += spaceBetween;
    // reset
    yArrivalOld = yLineBegin;
    // X starting point for each line
    xArrival = 100;
    c.beginPath();
    c.moveTo(xArrival, yLineBegin);
    c.lineTo(xArrival + 20, yLineBegin);
    xArrival += 20;
    // draw begin
    while (xArrival < 200){
        xArrival = numberGenerator(xArrival, xArrival + 20);
        bezierDraw(xArrival, numberGenerator(yLineBegin - lineHeightStartEnd, yLineBegin))
    }
    while (xArrival < 250){
        xArrival = numberGenerator(xArrival, xArrival + 20);
        bezierDraw(xArrival, numberGenerator(yLineBegin - lineHeightQuarter, yLineBegin))
    }
    // draw middle
    while (xArrival < 700){
        xArrival = numberGenerator(xArrival, xArrival + 60);
        bezierDraw(xArrival, numberGenerator(yLineBegin - lineHeightMiddle, yLineBegin))
    }
    // draw end
    while (xArrival < 750){
        xArrival = numberGenerator(xArrival, xArrival + 20);
        bezierDraw(xArrival, numberGenerator(yLineBegin - lineHeightQuarter, yLineBegin))
    }
    while (xArrival < 880){
        xArrival = numberGenerator(xArrival, xArrival + 20);
        bezierDraw(xArrival, numberGenerator(yLineBegin - lineHeightStartEnd, yLineBegin))
    }
    xArrivalOld = 100;
    xArrival = 100;

    // to end at the same point
    c.lineTo(900, yLineBegin);
    //wave width
    c.lineWidth = 5;
    c.strokeStyle = '#fefefe';
    c.stroke();
    c.fillStyle = '#1b1b1b';
    // to hide distorsion
    c.fillRect(0, yLineBegin, 1000,100);
    c.fill();
    c.closePath();
    console.log(i);
}




































/**
 * Push
 */
