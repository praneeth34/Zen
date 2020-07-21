let myArr = [12,21,22,13,55,24];

let max = myArr[0];

for(let i=0;i<myArr.length;i++)
{
	if(myArr[i]>max)
	{
		max = myArr[i];
	}
}

console.log(max);