const questions = [
    {id: 1, title: "Do You Accept All Major Credit Cards?"},
    {id: 2, title: "Do You Suppport Local Farmers?"},
    {id: 3, title: "Do You Use Organic Ingredients?"},
]

const answer = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
dolore illo dolores quia nemo doloribus quaerat, magni numquam
repellat reprehenderit.`;

// // where to declare variables
// // const myArticle = document.getElementsByClassName("question");
// const myArticle = document.querySelectorAll(".question");
// const articleTitles = document.getElementsByClassName("question-title-title");
// const articleContents = document.getElementsByClassName("question-content-content");
// const titleLength = articleTitles.length;
// const btnSwitch = document.querySelectorAll(".btn-switch") ;
// const questionContent = document.querySelectorAll(".question-content");
// const questionLine = document.querySelectorAll(".question-title-line");
// // class show line and show content
// const showLine = "show-line";
// const showContent = "show-content";
// // add questsions object to element
// for(let x = 0; x < titleLength; x++) {
//     articleTitles[x].textContent = questions[x]["title"];
//     articleContents[x].textContent = answer;
// }

// // btnSwitch.forEach((element, index) => {
//     // element.addEventListener("click", function(e) {
//         // if(index > 0 ) {
//         //     questionLine[index-1].classList.remove(showLine); 
//         //     questionContent[index-1].classList.remove(showContent);
//         // }
//         // if(index == 0 ) {
//         //     questionLine[btnSwitch.length - 1].classList.remove(showLine);
//         //     questionContent[btnSwitch.length - 1].classList.remove(showContent);
//         // }
//         // questionLine[index].classList.add(showLine);
//         // questionContent[index].classList.add(showContent);
//         // console.log(questionContent[index].classList.includes(""));
        
//     // })
// // });

// myArticle.forEach(function(question) {
//     const btn = question.querySelector(".btn-switch");
//     // console.log(btn);
//     btn.addEventListener("click", function() {
//         console.log(question);

//         myArticle.forEach(function(item) {
//             if(item !== question) {
//                 item.classList.remove(showContent);
//             }
//         });
//         question.classList.toggle(showContent);
//     });
// });

const myQuestions = document.querySelectorAll(".question");
myQuestions.forEach((element, index) => {
        element.firstElementChild.firstElementChild.textContent = questions[index]["title"]; 
        element.lastElementChild.firstElementChild.textContent = answer; 
    }
);

myQuestions.forEach(function(question) {
    const btn = question.querySelector(".btn-switch");
    
    btn.addEventListener("click", function(e) {

        myQuestions.forEach( function(item) {
            if(item !== question) {
                item.classList.remove("show-content");
            }
        });

        question.classList.toggle("show-content");
    });
})
