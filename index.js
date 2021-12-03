// arr=["Aaditya","Khurrana","Deepak","Khurana"]
// console.log(arr[0])
// console.log(arr.length)
// for(let i=0; i<arr.length ; i++)
// {
//   console.log(arr[i])
// }


// // Objects
// var superman={
// name:"superman",
// strength:10000,
// memory:12,
// age:24,
// };

// var batman={
// name:"Batman",
// strength:11000,
// memory:18,
// age:28,
// };

// var spiderman={
// name:"Spiderman",
// strength:12000,
// memory:20,
// age:38,
// };


// var powerRanger={
// name:"Black powerRanger",
// strength:120023,
// memory:24,
// age:34,
// };

// // console.log(batman.name)
// // console.log

// let ARR=[superman,spiderman,powerRanger,batman]
// let max=ARR[0].strength;
// let max_name=ARR[0].name;
// for(var i=0;i<ARR.length;i++)
// {
//   console.log(ARR[i].name)
//   console.log(ARR[i].strength)
//   console.log(ARR[i].memory)
//   console.log("-------------------")
//   if(max<ARR[i].strength)
//   {
//     max=ARR[i].strength
//     max_name=ARR[i].name
//   }


//   }
//   console.log(max_name)
//   console.log(max)
//   console.log("-------------------")


// Quiz
var read=require('readline-sync')

var score=0;
var username=read.question("Enter your username")

console.log("Welcome "+username+" to the Quiz")

//function
function play(Question,answer)
{
  var ans=read.question(Question);
  if(ans===answer)
  {
    console.log("Correct");
    score++;
  }
  else
  {
    console.log("InCorrect");
  }

  console.log("Current Score is : ",score)
  console.log("------------------------")
}

var QuestionBank=[
  {ques:"where do i live ?",
  ans:"kaithal"},

  {ques:"In which college I am Pursuing My btech ?",
  ans:"Thapar"},

  {ques:"What is my age?",
  ans:"20"}
]

for(var i=0;i<QuestionBank.length;i++)
{
  play(QuestionBank[i].ques,QuestionBank[i].ans);
}
