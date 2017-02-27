// шаг 1
const arr = [];
const limit = 50;

for (var i = 2; i < limit; i++) { arr[i] = true; }


// шаг 2
let p = 2;
do {
  for (i = 2 * p; i < limit; i += p) {
    	arr[i] = false;
  }

  for (i = p + 1; i < limit; i++) {
    if (arr[i]) {
      	break;
    }
  }
  p = i;
} while (p < limit / 10); // шаг 5


for (i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    console.log('simple found', i);
  }
}
