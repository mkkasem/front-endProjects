let time=new Date();
//duration of the quiz
let minutes=20,seconds=0;
const numberOfQuestions=7;
//counter of number of question presented for user so far
let counter=0;
let result=0;

 
$(".wrapper").hide();

$(document).ready(function () {
    
    $(".start").click(function () {
        $(this).hide();
        setTiming();
        setInterval(changeTiming,1000);
        setTimeout(setNextQestion,50);

    });

    $(".option").click(function () { 

        result=$(".result").val();
        
        if ($(this).val()==="true") 
            result=Number(result)+1;
            
        setTimeout(setNextQestion,500);
        $(".result").val(result);
         
    });
       
});



function setNextQestion(){
    if(counter===numberOfQuestions){
        setTimeout(()=>$(".wrapper").attr("style", 'display:none !important'),500);
        clearTimeout();
        displayResult();
        return;
    }
    counter++;    

    $(".wrapper").show();
    // select random quesiton number 
    let random=Math.floor( Math.random()*questions.length);
    // select random answer from that quesiton 
    let randomOption=Math.floor( Math.random()*questions[random].answers.length);
    
    $(".quesiton").text(questions[random].question); 

    for (let index = 0; index < 4; index++) {
        $(`._${index+1}`).text(questions[random].answers[randomOption][0]);
        $(`._${index+1}`).val(questions[random].answers[randomOption][1]);
        // remove that option not to repeat it 
        questions[random].answers.splice(randomOption,1);
        // generate random option from remaining options 
        randomOption=Math.floor( Math.random()*questions[random].answers.length);
    }
    //remove the question not to show again for the user 
    questions.splice(random, 1);

}


function setTiming(){    
    time.setMinutes(minutes);
    time.setSeconds(seconds);
    $(".timer").text( `${time.getMinutes()}:${time.getSeconds()} `);

}
function changeTiming(){
    if(seconds===0 && minutes===0)
        displayResult();

    if(seconds===0) {
        minutes--;
        seconds=59;  
    }
    else seconds--;

    time.setMinutes(minutes);
    time.setSeconds(seconds);
    $(".timer").text( `${time.getMinutes()}:${time.getSeconds()} `);
}

function displayResult(){
    //calculate grade of correct question out of the total number of the questions
    result=Math.round((result/numberOfQuestions)*100);

    $(".result").text(result);
    calcuateLetterGrade(result);

    $(".wrapper").hide();
    $(".result, .result_text,.letter").attr("style", "display:block !important");    
}

function calcuateLetterGrade(result) {

    let letter=$(".letter");
    switch(true){
        case result>=90:
            letter.text("A");
            break;
        case result>=85:
            letter.text("b1");
            break;
        case result>=80:
            letter.text("b2");
            break;
        case result>=75:
            letter.text("b3");
            break;
        case result>=70:
            letter.text("c1");
            break;
        case result>=65:
            letter.text("c2");
            break;
        case result>=60:
            letter.text("c3");
            break;
        default:
            letter.text("f1");
      
    }
 
}

//sample qestions
let questions=[
    
   { question:"JavaScript is ...",
        answers:[
            ["the same as Java",true],
            ["kind of like Java",false],
            ["different than Java",false],
            ["ther written part of Java",false]
        ]
    },
    { question:"java is ...",
        answers:[
            ["compiled",false],
            ["ınterpreted",false],
            ["hybird",true],
            ["none",false]
        ]
    },
    { question:"In which view Headers and Footers are visible ...",
        answers:[
            ["Normal View",false],
            ["Print Layout View",true],
            ["Page Layout View",false],
            ["Draft View",false]
        ]
    },
    { question:"To apply center alignment to a paragraph we can press ...",
        answers:[
            ["Ctrl + S",false],
            ["Ctrl + C + A",false],
            ["Ctrl + E",true],
            ["Ctrl + C",false]
        ]
    },
    { question:"The process of removing unwanted part of an image is called",
        answers:[
            ["Hiding",false],
            ["Cropping",true],
            ["Bordering",false],
            ["Cutting",false]
        ]
    },
    { question:"The space left between the margin and the start of a paragraph is called  ",
        answers:[
            ["Spacing",false],
            ["Gutter",false],
            ["Indentation",true],
            ["Alignment",false]
        ]
    },
    { question:"Text-styling feature of MS word is...",
        answers:[
            ["WordColor",false],
            ["WordFont",false],
            ["WordArt",true],
            ["WordFill",false]
        ]
    } 
];

