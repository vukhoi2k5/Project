const buttons = document.querySelectorAll('.hinhnho button');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const newanh= button.getAttribute('data-image-url');
        document.getElementById('anh').src= newanh;
    })
})
// 


var colors = document.querySelectorAll('.color button');


colors.forEach(color=>{
    color.addEventListener('click',()=>{
        colors.forEach(c=>{
            c.classList.remove('active');
        })
        color.classList.add('active');
    })
})



// 
var thea1 = document.getElementById('thea1')
var  thea2 = document.getElementById('thea2');
var thea3 = document.getElementById('thea3');
var general = document.getElementById('General');
var peformance= document.getElementById('Peformance');
var question = document.getElementById('Question')
thea1.addEventListener('click',function(){
    general.style.display='block';
    peformance.style.display='none';
    question.style.display='none'
    thea1.style.color='#4A5291';
    thea1.style.textDecoration='underline'
    thea1.style.textDecorationThickness='3px'
    thea2.style.color='';
    thea2.style.textDecoration=''
    thea2.style.textDecorationThickness=''
    thea3.style.color='';
    thea3.style.textDecoration=''
    thea3.style.textDecorationThickness=''
    
})

thea2.addEventListener('click',function(){
    general.style.display='none';
    peformance.style.display='block';
    question.style.display='none'

    thea1.style.color='#818386';
    thea1.style.textDecoration='none'
    thea1.style.textDecorationThickness=''
    thea2.style.color='#4A5291';
    thea2.style.textDecoration='underline'
    thea2.style.textDecorationThickness='3px'
    thea3.style.color='';
    thea3.style.textDecoration=''
    thea3.style.textDecorationThickness=''

})
thea3.addEventListener('click',function(){
    general.style.display='none';
    peformance.style.display='none';
    question.style.display='block'

    thea1.style.color='#818386';
    thea1.style.textDecoration='none'
    thea1.style.textDecorationThickness=''
    thea2.style.color='';
    thea2.style.textDecoration=''
    thea2.style.textDecorationThickness=''
    thea3.style.color='#4A5291';
    thea3.style.textDecoration='underline'
    thea3.style.textDecorationThickness='3px'

})
 



// 


var giagiam = document.getElementById('giagiam');
var giagoc = document.getElementById('giagoc')
var min = document.getElementById('min');
var trb = document.getElementById('trb');
var max = document.getElementById('max');


function Min(){
    giagiam.innerText='899$';
    giagoc.innerText= '900$';
    trb.style.color='';
    trb.style.backgroundColor='';
    min.style.color='white';
    min.style.backgroundColor='#6C757D';
    max.style.color='';
    max.style.backgroundColor='';


}
function Trb(){
    giagiam.innerText='1000$';
    giagoc.innerText= '1200$';
    trb.style.color='white';
    trb.style.backgroundColor='#6C757D';
    min.style.color='';
    min.style.backgroundColor='';
    max.style.color='';
    max.style.backgroundColor='';
    
}
function Max(){
    giagiam.innerText='1500$';
    giagoc.innerText= '2000$';
    max.style.color='white';
    max.style.backgroundColor='#6C757D';
    min.style.color='';
    min.style.backgroundColor='';
    trb.style.color='';
    trb.style.backgroundColor='';
}
