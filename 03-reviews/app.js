const persons = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:  
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: 
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:  
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: 
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:  
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: 
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "web developer",
        img:  
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: 
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
]
let count = 0;
const length = persons.length;
let personId = 0;
const personImg = document.getElementById("person-img");
const personName = document.getElementById("name");
const personJob = document.getElementById("job");
const personDes = document.getElementById("description");
const btnFunction = document.querySelectorAll(".button"); // buttons include: left, right, surprise me
// 
defaultContent(persons);
// 
btnFunction.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const myClick = e.currentTarget.classList;
        if(myClick.contains("left")) {
            count--;
            if(count < 0) {
                count = length-1;
            }
            changeContent(count, persons);
        }
        else if(myClick.contains("right")) {
            count ++;
            if(count >= length) {
                count = 0;
            }
            changeContent(count, persons);
        }
        else {
            count = Math.floor(Math.random() * length);
            changeContent(count, persons);
        }
    });
});
// 
function changeContent(index, myArray) {
    const item = myArray[index];
    personName.textContent = item["name"];
    personImg.src = item["img"];
    personJob.textContent = item["job"];
    personDes.textContent = item["text"];
}

function defaultContent(myArray) {
    const item = myArray[0];
    personName.textContent = item["name"];
    personImg.src = item["img"];
    personJob.textContent = item["job"];
    personDes.textContent = item["text"];
}