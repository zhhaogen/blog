document.addEventListener("DOMContentLoaded", function() {
	//katex 自动初始化
	let texs=document.getElementsByTagName("tex"); 
	texs=Array.from(texs);//转换成数组,或querySelectorAll 使用for of 进行遍历
	for(let i=0;i<texs.length;i++)
	{
		var item=texs[i];  
		var displayMode=item.hasAttribute("displayMode"); 
		let html=katex.renderToString(item.innerText,{displayMode:displayMode}); 
		item.outerHTML=html; 
	}  
	
	//其他初始化
	
});
/**
*生成均分数组
*@param a 最小值
*@param b 最大值
*@param n 数组长度
*/
function linespace(a,b,n)
{
	if(n==0)
	{
		return [];
	}
	if(n==1)
	{
		return [a];
	}
	var step=(b-a)/(n-1);
	var x=[];
	x[0]=a;
	for(var i=1;i<n;i++)
	{
		x[i]=x[i-1]+step;
	}
	return x;
}
/**
*组合数组,比如将2个数组组成2维数组
*@param args 数组不定参数,每个数组长度应保持一致
*/
function join()
{ 
	var arr=[];
	if(arguments.length>0)
	{
		for(var i=0;i<arguments[0].length;i++)
		{
			var item=[];
			for(var j=0;j<arguments.length;j++)
			{
				item[j]=arguments[j][i];
			}
			arr[i]=item;
		}			
	}
	return arr;
}
/**
*随机符号,-1或1
*/
function randomSign()
{
	return Math.random()>0.5?1:-1;
}
/**
*随机线性波动,范围-deta ~ deta
*@param deta 范围 
*/
function randomDeta(deta)
{
	return -deta+Math.random()*2*deta;
}
/**
*求和<br>
*sum(array) ,array求和
*sum(array1,array2,array3...) ,array乘积求和
*@param args 不定参数,数组,每个数组长度应一致并且大于1 
*/
function sum()
{
	if(arguments.length==0)
	{
		return 0;
	}
	var ret=0;  
	for(var i=0;i<arguments[0].length;i++)
	{
		var item=1;
		for(var j=0;j<arguments.length;j++)
		{
			item=item*arguments[j][i];
		}
		ret=ret+item;
	}	 
	return ret;
}
/***
*打印矩阵
*/
function printMatrix(x)
{
	var str="[";	
	for(var i=0;i<x.length;i++)
	{
		var xi=x[i];
		if(Array.isArray(xi))
		{
			for(var j=0;j<xi.length;j++)
			{
				str+=xi[j]+" ";
			}
			str+=";";
		}else
		{
			str+=xi +" ";
		}
	}
	str+="]";
	console.log(str);
	return str;
}
