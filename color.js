// Selectors
var goalDisplay=document.querySelector(".goalColor");
var allSquares=document.querySelectorAll(".square");
var stat=document.querySelector(".status");
var header=document.querySelector("#header");
var resetBtn=document.querySelector(".reset");
var easyBtn=document.querySelector(".easy");
var hardBtn=document.querySelector(".hard");

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
var num=6;
var ranColors=generateRandomList(num);
var clickColor=ranColors[randomNum(num)];
goalDisplay.textContent=clickColor;

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

resetBtn.addEventListener("click",function(){
	ranColors=generateRandomList(num);
	clickColor=ranColors[randomNum(num)];
	goalDisplay.textContent=clickColor;
	for(var i =0; i < allSquares.length; i++ )
	{
		allSquares[i].style.backgroundColor = ranColors[i];
		header.style.backgroundColor = "#232323";
	}
	stat.textContent="";	
});

hardBtn.addEventListener("click",function(){
	num = 6;
	this.classList.add("active");
	easyBtn.classList.remove("active");
	ranColors=generateRandomList(num);
	clickColor=ranColors[randomNum(num)];
	goalDisplay.textContent=clickColor;

	for(var i =0; i < allSquares.length; i++ )
	{
		if(ranColors[i])
			allSquares[i].style.backgroundColor = ranColors[i];
			allSquares[i].style.display = "block";
	}
});

easyBtn.addEventListener("click",function(){
	num = 3;
	this.classList.add("active");
	hardBtn.classList.remove("active");
	ranColors=generateRandomList(num);
	clickColor=ranColors[randomNum(num)];
	goalDisplay.textContent=clickColor;
	console.log(ranColors.length);
	for(var i =0; i < allSquares.length; i++ )
	{
		if(ranColors[i])
			allSquares[i].style.backgroundColor = ranColors[i];
		else
			allSquares[i].style.display = "none";
	}	
});