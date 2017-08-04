let arr:number[] = [123, 456, 789];
let total:number = 0;
for(let i = 0;i < arr.length;i++){
  total += arr[i];
}
document.write('<h1>Array</h1>');
document.write('<p>' + total + '</p>');
