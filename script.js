"use strict";
/*
 * MTD280 Online Multimedia
 * http://www.fh-ooe.at/mtd
 *
 * MTD280 Example
 *
 */

var mtd280 = mtd280 || {};

mtd280.module = (function($) {

    // private  
    let canvas, ctx,
        width, height,
		colSize, rowSize,x1,y1,
		offsetX, offsetY;
	let	count=0;
	
	const DIMENSION = 9;
	
	function drawBoard() {
		
		let i;
		offsetX = colSize/2 ;
		offsetY = rowSize/2 ;
		ctx.beginPath();
		
		for(i = 0; i < DIMENSION; i++) {
			
			// vertical lines
			ctx.moveTo(offsetX + i*colSize, offsetY);
			ctx.lineTo(offsetX + i*colSize, height-offsetY);
			
			// horizontal lines
			ctx.moveTo(offsetX, offsetY + i*rowSize);
			ctx.lineTo(width-offsetX, offsetY + i*rowSize);	
		}
		
		ctx.stroke();
		ctx.closePath();
		
	}
	
	function clickHandler(e) {
		let x, y;
		let newx,newy;
		offsetX = colSize/2 ;
		offsetY = rowSize/2 ;

		x = e.clientX - canvas[0].offsetLeft;
		y = e.clientY - canvas[0].offsetTop;
		

		if (offsetX<=x<=offsetX*17 && offsetY<=y<=offsetY*17){
		newx= Math.round(x / offsetX);
		newy = Math.round(y / offsetY);
		if(newx % 2 == 0){
			newx ++ ;
		}
		if(newy % 2 == 0){
			newy ++ ;
		}
		x1= offsetX *newx;  
		y1= offsetY *newy;
		
		}

		alert(newx + "," + newy);
			if (count%2 == 0) {
				ctx.fillStyle = "black";
				count++;
			} else {
				ctx.fillStyle = "white";
				count++;
			}

			ctx.beginPath();
			ctx.arc(x1,y1,20,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		
	}



  //------------------//    	
	function init() {
  //------------------//
		
		canvas = $('#canvas');
		ctx = canvas[0].getContext('2d');
		
		width = canvas.prop('width');
		height = canvas.prop('height');
		
		colSize = width / DIMENSION;
		rowSize = height / DIMENSION;
		
		canvas.click(clickHandler);
		
		drawBoard();
	};	

	$(document).ready(init);

    // public
    return {};
		
}($));
