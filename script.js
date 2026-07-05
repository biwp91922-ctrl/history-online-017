// =======================
// ตัวแปร
// =======================

let student = "";

let preScore = 0;
let postScore = 0;

let currentQuestion = 0;

let timer = 30;
let countdown;

// =======================
// Login
// =======================

function login(){

student = document.getElementById("studentName").value.trim();

if(student==""){

alert("กรุณากรอกชื่อ-นามสกุล");

return;

}

document.getElementById("loginPage").style.display="none";

document.getElementById("mainPage").style.display="block";

document.getElementById("showName").innerHTML="ผู้เรียน : "+student;

showSection("pretest");

loadPreQuestion();

}

// =======================
// เปลี่ยนหน้า
// =======================

function showSection(id){

const page=document.querySelectorAll(".content");

page.forEach(function(item){

item.style.display="none";

});

document.getElementById(id).style.display="block";

}

// =======================
// Tabs
// =======================

function openTab(tab){

document.getElementById("tab1").style.display="none";

document.getElementById("tab2").style.display="none";

document.getElementById(tab).style.display="block";

}

// =======================
// ออกจากโปรแกรม
// =======================

function exitProgram(){

if(confirm("ต้องการออกจากโปรแกรมหรือไม่")){

location.reload();

}

}

// =======================
// ข้อสอบก่อนเรียน
// =======================

const preQuestions=[

{

question:"ข้อใดคือความหมายของศักราช",

options:[
"การนับปี",
"ชื่อจังหวัด",
"ชื่อบุคคล",
"ชื่อแม่น้ำ"
],

answer:0

},

{

question:"ประเทศไทยใช้ศักราชใดเป็นหลัก",

options:[
"พ.ศ.",
"ค.ศ.",
"จ.ศ.",
"ม.ศ."
],

answer:0

},

{

question:"ค.ศ. ย่อมาจากอะไร",

options:[
"คริสต์ศักราช",
"จุลศักราช",
"มหาศักราช",
"รัตนโกสินทรศก"
],

answer:0

},

{

question:"ศักราชใช้เพื่ออะไร",

options:[
"บอกเวลาและปี",
"บอกชื่อคน",
"บอกจังหวัด",
"บอกภูเขา"
],

answer:0

},

{

question:"พ.ศ. ย่อมาจากอะไร",

options:[
"พุทธศักราช",
"พิเศษศักราช",
"พระราชศักราช",
"ประชาศักราช"
],

answer:0

},

{

question:"ข้อใดเป็นศักราชของไทย",

options:[
"พ.ศ.",
"เมตร",
"กิโลกรัม",
"วินาที"
],

answer:0

},

{

question:"ศักราชช่วยให้ทราบอะไร",

options:[
"ลำดับเวลา",
"สีของวัตถุ",
"ขนาดของบ้าน",
"น้ำหนัก"
],

answer:0

},

{

question:"การนับปีเรียกว่าอะไร",

options:[
"ศักราช",
"ตำรา",
"ประเพณี",
"แผนที่"
],

answer:0

},

{

question:"ข้อใดเป็นศักราชสากล",

options:[
"ค.ศ.",
"พ.ศ.",
"ม.ศ.",
"ร.ศ."
],

answer:0

},

{

question:"ศักราชเกี่ยวข้องกับวิชาใด",

options:[
"ประวัติศาสตร์",
"คณิตศาสตร์",
"ศิลปะ",
"ดนตรี"
],

answer:0

}

];

// =======================
// แสดงข้อสอบ
// =======================

function loadPreQuestion(){

if(currentQuestion>=preQuestions.length){

clearInterval(countdown);

alert("ทำแบบทดสอบก่อนเรียนเสร็จแล้ว");

showSection("lesson");

return;

}

timer=30;

startTimer();

let q=preQuestions[currentQuestion];

let html="";

html+="<div class='question'>";

html+=(currentQuestion+1)+". "+q.question;

html+="</div>";

for(let i=0;i<q.options.length;i++){

html+="<div class='option' onclick='checkAnswer("+i+")'>";

html+=q.options[i];

html+="</div>";

}

document.getElementById("preQuestion").innerHTML=html;

}

// =======================
// Timer
// =======================

function startTimer(){

clearInterval(countdown);

document.getElementById("timer").innerHTML="เวลา : "+timer+" วินาที";

countdown=setInterval(function(){

timer--;

document.getElementById("timer").innerHTML="เวลา : "+timer+" วินาที";

if(timer<=0){

clearInterval(countdown);

currentQuestion++;

loadPreQuestion();

}

},1000);

}// =======================
// ตรวจคำตอบก่อนเรียน
// =======================

function checkAnswer(choice){

clearInterval(countdown);

if(choice===preQuestions[currentQuestion].answer){

preScore++;

}

currentQuestion++;

setTimeout(function(){

loadPreQuestion();

},500);

}

// =======================
// ข้อสอบหลังเรียน
// =======================

let currentPost=0;

const postQuestions=[

{
question:"ประเทศไทยใช้ศักราชใดเป็นหลัก",
options:["ค.ศ.","พ.ศ.","จ.ศ.","ม.ศ."],
answer:1
},

{
question:"ศักราชหมายถึงอะไร",
options:["การนับปี","ชื่อคน","ชื่อเมือง","ชื่อประเทศ"],
answer:0
},

{
question:"ค.ศ. คืออะไร",
options:["คริสต์ศักราช","จุลศักราช","มหาศักราช","รัตนโกสินทรศก"],
answer:0
},

{
question:"พ.ศ. ย่อมาจาก",
options:["พระศักราช","พุทธศักราช","พิเศษศักราช","ประชาศักราช"],
answer:1
},

{
question:"ศักราชใช้ทำอะไร",
options:["บอกเวลา","บอกปี","บอกลำดับเหตุการณ์","ถูกทุกข้อ"],
answer:3
},

{
question:"ข้อใดเป็นศักราช",
options:["พ.ศ.","เมตร","ลิตร","กิโลกรัม"],
answer:0
},

{
question:"ศักราชเกี่ยวข้องกับวิชา",
options:["ประวัติศาสตร์","วิทยาศาสตร์","ศิลปะ","ดนตรี"],
answer:0
},

{
question:"ข้อใดเป็นศักราชสากล",
options:["ค.ศ.","พ.ศ.","จ.ศ.","ร.ศ."],
answer:0
},

{
question:"ศักราชช่วยให้ทราบ",
options:["ลำดับเวลา","สี","กลิ่น","รส"],
answer:0
},

{
question:"ประเทศไทยใช้ พ.ศ. เพราะ",
options:["เกี่ยวกับพระพุทธศาสนา","เกี่ยวกับกีฬา","เกี่ยวกับดนตรี","เกี่ยวกับอาหาร"],
answer:0
}

];

// =======================
// โหลดข้อสอบหลังเรียน
// =======================

function loadPostQuestion(){

if(currentPost>=postQuestions.length){

showResult();

return;

}

let q=postQuestions[currentPost];

let html="";

html+="<div class='question'>";

html+=(currentPost+1)+". "+q.question;

html+="</div>";

for(let i=0;i<q.options.length;i++){

html+="<div class='option' onclick='checkPost("+i+")'>";

html+=q.options[i];

html+="</div>";

}

document.getElementById("postQuestion").innerHTML=html;

}

// =======================
// ตรวจคำตอบหลังเรียน
// =======================

function checkPost(choice){

if(choice===postQuestions[currentPost].answer){

alert("✅ ตอบถูก");

postScore++;

}else{

alert("❌ ตอบผิด");

}

currentPost++;

setTimeout(function(){

loadPostQuestion();

},500);

}

// =======================
// ปุ่มข้อถัดไป
// =======================

document.getElementById("nextPost").onclick=function(){

loadPostQuestion();

};

// =======================
// แสดงคะแนน
// =======================

function showResult(){

showSection("result");

document.getElementById("preScore").innerHTML=preScore+" / 10";

document.getElementById("postScore").innerHTML=postScore+" / 10";

let level="";

if(postScore>=8){

level="ดีมาก";

}else if(postScore>=6){

level="ดี";

}else if(postScore>=4){

level="พอใช้";

}else{

level="ควรปรับปรุง";

}

document.getElementById("level").innerHTML=level;

}

// =======================
// เปิดหลังเรียนเมื่อกดเมนู
// =======================

document.querySelectorAll("nav button")[2].onclick=function(){

showSection("posttest");

loadPostQuestion();

};

// =======================
// เกมจับคู่ (ตัวอย่าง)
// =======================

const gameWords=[
"พ.ศ.","ค.ศ.","จ.ศ.","ม.ศ."
];

function loadGame(){

let html="";

gameWords.forEach(function(word){

html+="<div class='card'>"+word+"</div>";

});

document.getElementById("gameBoard").innerHTML=html;

}

loadGame();
