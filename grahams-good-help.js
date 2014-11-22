var obj = {
	int = 2; 
	func = function addOne(n) {return n + 1};
	} 

var obj1 = {
	int = 3
	func = function subOne(n) {return n - 1};
}
var arr = obj * 10;



for(i = 0; i < arr.length; i++){
	arr[i].int =  arr[i].func(arr[i].int);	

	iter: i = 0	
	obj.int = obj.func(obj.int)
	obj.int = addOne(obj.int)
	obj.int = addOne(2)
	obj.int = 3

	iter: i = 1
	obj1.int = obj1.func(obj1.int)
	obj1.int = obj1.func(3)
	obj1.int = subOne(3)
	obj1.int = 2

}