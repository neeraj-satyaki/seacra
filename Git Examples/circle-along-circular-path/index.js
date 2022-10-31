
// //get a reference to the canvas
// const cvs =  document.getElementById("myCanvas");
// const ctx = cvs.getContext("2d");

// //draw a dot
// ctx.beginPath();
// ctx.arc(20, 20, 10, 0, Math.PI*2, true);
// ctx.closePath();
// ctx.fill();


const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;


const circlePartOne = {
    angle : Math.PI,
    angle2 : 3/2*Math.PI,
    velocity : Math.PI/300,
    index : 1,
    bgClr : "rgb(107, 172, 47)",
    round : 0,
    pointPosRadians: 0,
    
    position : [
        {x : cvs.width/2, y : cvs.height/2 - 100, r : 10, c : "black"},
        {x : cvs.width/2, y :cvs.height/2, r : 150, c : "black"},
        {x : 0, y : 0 , r : 150, c : "green"}
    ],

    drawPoint: function(x, y, point_size, label) {
        ctx.beginPath();
        ctx.arc(x, y, point_size, 0, 2 * Math.PI, true);
        ctx.stroke();
    },

    draw : function(){
        // ctx.beginPath();
        // ctx.fillStyle = this.bgClr;
        // ctx.fillRect(0, 0, cvs.width, cvs.height);
        // ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = this.position[0].c;
        ctx.arc(this.position[0].x, this.position[0].y, this.position[0].r, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        
        ctx.strokeStyle = this.position[this.index].c;
        ctx.beginPath();
        ctx.lineWidth = 5;
        if (this.round == 2) {
            ctx.arc(this.position[this.index].x, this.position[this.index].y, this.position[this.index].r, 3/2*Math.PI, this.angle2);
            ctx.stroke();
            if (this.angle2.toFixed(2) == this.pointPosRadians.toFixed(2)) {
                this.pointPosRadians += Math.PI / 4;
                this.position[2] = this.position[0];
                // this.drawPoint(this.position[0].x + 0.5, this.position[0].y, 10, "  A");
                ctx.fillRect(this.position[0].x + 0.5, this.position[0].y, 10, 10);
                console.log(this.position[2].x + 0.5, this.position[2].y, this.pointPosRadians);
            }
        }
        ctx.closePath();
        
        
    },
    update : function(){
        ctx.clearRect(10, 0, cvs.width, cvs.height);
        if(this.angle2 >= 3/2*Math.PI && this.round == 2){
            this.index = 0;
            // this.position[0].c = "green";
        }
        
        this.angle -= this.velocity;
        this.angle2 += this.velocity;
        
        if(this.angle2 >= 2*Math.PI){
            this.angle2 = 0;
            if(this.round == 0 || this.round == 2) this.round = 1;
            else if(this.round == 1) this.round = 2;
        }
        this.position[0].x = cvs.width/2 + this.position[this.index].r * Math.sin(this.angle);
        this.position[0].y = cvs.height/2 + this.position[this.index].r * Math.cos(this.angle);
        // console.log(2);
    }
}


// const circlePartTwo = {
   
//     drawPixel : function(x, y, sizeX, sizeY) {
//         ctx.fillRect(x, y, sizeX, sizeY);
//     },

//     drawPoint :  function(x, y, point_size, label) {
//         ctx.beginPath();
//         ctx.arc(x, y, point_size, 0, 2 * Math.PI);
//         ctx.fill();
//         console.log("Part 2");
//         ctx.font = "200px";
//         ctx.fillText(label, x + 10, y);
//     },

//     // drawCircle :  async function(xCenter, yCenter, radius) {
//     //     var j = 0,
//     //       k = 0;
//         // for (i = 0; i < 2 * 3.14; i += 1 / radius) {
//         //   x = xCenter + radius * Math.cos(i);
//         //   y = yCenter + radius * Math.sin(i);

//         //   if (i.toFixed(2) == j.toFixed(2)) {
//         //     j += 3.14 / 4;
//         //     this.drawPoint(x + 0.5, y, 10, "  A");
//         //     // console.log(i, j);
//         //   }

//         //   await sleep(0.0001);
//         //   this.drawPixel(x, y, 2, 2);
//         //   // drawPoint(x, y, 4, 'A');
//         // }
//     // }
//     // drawCircle(400, 400, 300);
// }



// function PartOne(){
//     circlePartOne.update();
//     circlePartOne.draw();
// }

// function PartTwo() {
//     const x = cvs.width / 2;
//     const y = cvs.heigh / 2;

//     circlePartTwo.drawPoint(x, y, 10, 0, 2*Math.PI);
//     // requestAnimationFrame(PartTwo);
// }

// function main() {
//     PartOne();
//     PartTwo();
//     requestAnimationFrame(main);
// }
// requestAnimationFrame(main);

var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
console.log(canvas, canvasData, canvasHeight, canvasWidth, ctx);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function drawPixel(x, y, sizeX, sizeY) {
  ctx.fillRect(x, y, sizeX, sizeY);
}

function drawPoint(x, y, point_size, label) {
  ctx.beginPath();
  ctx.arc(x, y, point_size, 0, 2 * Math.PI);
  ctx.fill();

  ctx.font = "200px";
  ctx.fillText(label, x + 10, y);
}

async function drawCircle(xCenter, yCenter, radius) {
  var j = 0,
    k = 0;
  for (i = 0; i < 2 * 3.14; i += 1 / radius) {
    x = xCenter + radius * Math.cos(i);
    y = yCenter + radius * Math.sin(i);

    if (i.toFixed(2) == j.toFixed(2)) {
      j += 3.14 / 4;
      drawPoint(x + 0.5, y, 10, "  A");
      console.log(i, j);
    }

    await sleep(1 / 100);
    drawPixel(x, y, 2, 2);
    // drawPoint(x, y, 4, 'A');
  }
}

drawCircle(400, 400, 300);