var finalsum = 0,
	pair = [];
for(let i=1;i<10000;i++)
{
	if(!pair.includes(i))
		divisors(i);
}
console.log(finalsum);

function divisors(n){
	var sum = 0,sum1 = 0;
	for(let j=1;j<=(n/2);j++){
		if(n%j === 0){
			sum = sum + j;
		}
	}
	if(sum !== n)
	{
		for(let k=1;k<=(sum/2);k++){
			if(sum%k === 0){
				sum1 = sum1 + k;
			}
		}
	}
	if(sum1 === n)
	{
		pair.push(sum);
		pair.push(sum1);
		finalsum = finalsum + sum + sum1;
	}
}