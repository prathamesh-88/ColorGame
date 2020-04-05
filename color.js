// Selectors
var goalDisplay=document.querySelector("#goalColor");
var allSquares=document.querySelectorAll(".square");
var stat=document.querySelector(".status");
var header=document.querySelector("#header h1");
var resetBtn=document.querySelector(".reset");
var modeBtn=document.querySelectorAll(".mode");

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

function setupSquares()
{
	for(var i =0; i < allSquares.length; i++ )
	{
		allSquares[i].style.backgroundColor = ranColors[i];
		
		allSquares[i].addEventListener("click",function(){
			var pickedColor = this.style.backgroundColor;
			if (pickedColor === clickColor)
			{
				setAllSquares(pickedColor);
				stat.textContent= " Correct! ";
				header.style.backgroundColor = pickedColor;
				resetBtn.textContent=" Try Again ?"
			}
			else
			{
				this.style.backgroundColor = "#232323";
				stat.textContent= " Incorrect! ";
			}
		});
	}
}

function setupBtns()
{	
	for(var i=0 ; i<modeBtn.length ; i++)
	{
		modeBtn[i].addEventListener("click",function(){
			(this.textContent==="Easy") ? num = 3 : num = 6 ;
			modeBtn[0].classList.remove("active");
			modeBtn[1].classList.remove("active");
			this.classList.add("active");
			reset();
		});
		resetBtn.addEventListener("click",reset);
	}
}

function reset()
{
	ranColors=generateRandomList(num);
	clickColor=ranColors[randomNum(num)-1];
	goalDisplay.textContent=clickColor;
	for(var i =0; i < allSquares.length; i++ )
	{
		allSquares[i].style.display = "block";
		if(ranColors[i])
			allSquares[i].style.backgroundColor = ranColors[i];
		else
			allSquares[i].style.display = "none";	
	}
	header.style.backgroundColor = "steelblue";
	stat.textContent="";
	resetBtn.textContent="New Colors";	
}

function init()
{
	num=6;
	setupBtns();
	setupSquares();
	reset();
}

//Global Variables
var num;
var ranColors = [];
var clickColor;

//Mainloop
init();


