// Selectors
var goalDisplay=document.querySelector(".goalColor");
var allSquares=document.querySelectorAll(".square");
var stat=document.querySelector(".status");
var header=document.querySelector("#header");
var resetBtn=document.querySelector(".reset");


//Functions
function randomNum(num)
{
	return Math.floor(Math.random()*num+1);
}

function generateRandomColor()
{
	var r = randomNum(255);
	var g = randomNum(255);
	var b = randomNum(255);

	return ("rgb("+r+", "+g+", "+b+")");
}

function generateRandomList(num)
{
	arr=[];
	for(var i =0 ;i < num; i++)	
		arr.push(generateRandomColor());
	return arr;
}

function setAllSquares(color)
{
	for(var i =0; i < ranColors.length; i++ )
		allSquares[i].style.backgroundColor = color;		

}


//Main flow
var ranColors=generateRandomList(6);
var clickColor=ranColors[randomNum(6)];
goalDisplay.textContent=clickColor;

for(var i =0; i < ranColors.length; i++ )
{
	allSquares[i].style.backgroundColor = ranColors[i];
	
	allSquares[i].addEventListener("click",function(){
		var pickedColor = this.style.backgroundColor;
		console.log(clickColor,pickedColor);
		if (pickedColor === clickColor)
		{
			setAllSquares(pickedColor);
			stat.textContent= " Correct! ";
			header.style.backgroundColor = pickedColor;	
		}
		else
		{
			this.style.backgroundColor = "#232323";
			stat.textContent= " Incorrect! ";
		}
	})
}

resetBtn.addEventListener("click",function(){
	ranColors=generateRandomList(6);
	clickColor=ranColors[randomNum(6)];
	goalDisplay.textContent=clickColor;

	for(var i =0; i < ranColors.length; i++ )
	{
		allSquares[i].style.backgroundColor = ranColors[i];
		header.style.backgroundColor = "#232323";
	}	
})
