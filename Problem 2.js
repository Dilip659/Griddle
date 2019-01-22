var count = 1, maxNum = 0, maxLength = 0;
for (var i = 1; i <= 1000000; i++) {
	count = 1;
	collatzProb(i);
}
console.log(maxNum);

function collatzProb(n){
	let t = n;
	while(n!==1){
		if(n%2 === 0){
			n = n/2;
		}
		else{
			n = 3*n+1;
		}
		count++;
	}
	if(count > maxLength){
		maxLength = count;
		maxNum = t;
	}
}