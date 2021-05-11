const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const quesAns1 = document.querySelector("#zero");
const quesAns2 = document.querySelector("#one");
const quesAns3 = document.querySelector("#two");
const quesAns4 = document.querySelector("#three");
const quesAns5 = document.querySelector("#four");
const initialtext0 = quesAns1.innerHTML;
const initialtext1 = quesAns2.innerHTML;
const initialtext2 = quesAns3.innerHTML;
const initialtext3 = quesAns4.innerHTML;
const initialtext4 = quesAns5.innerHTML;
const ansHide1 = document.querySelector(".ans1");
const ansHide2 = document.querySelector(".ans2");
const ansHide3 = document.querySelector(".ans3");
const ansHide4 = document.querySelector(".ans4");
const ansHide5 = document.querySelector(".ans5");


container1.addEventListener("mouseover", e=>{
    quesAns1.innerHTML = "Congratulations! Your next step is to contact the organization listed on the pet’s page on our site or on Petfinder. If the pet is with a rescue group, you’ll probably be asked to email or phone, or even fill out a preliminary application.";
    ansHide1.style.visibility = "hidden";
});

container1.addEventListener("mouseout", e=>{
    quesAns1.innerHTML = initialtext0;
    ansHide1.style.visibility = "visible";
});

container2.addEventListener("mouseover", e=>{
    quesAns2.innerHTML = "They will ask you to fill out an adoption application. The questionnaire is mostly about practical things like your experience with pets, landlord information, and references.";
    ansHide2.style.visibility = "hidden";
});

container2.addEventListener("mouseout", e=>{
    quesAns2.innerHTML = initialtext1;
    ansHide2.style.visibility = "visible";
});


container3.addEventListener("mouseover", e=>{
    quesAns3.innerHTML = "Because most rescue groups are run by volunteers, it can take a little longer for them to get back to you about an adoption than a “brick and mortar” shelter or animal control agency.";
    ansHide3.style.visibility = "hidden";
});

container3.addEventListener("mouseout", e=>{
    quesAns3.innerHTML = initialtext2;
    ansHide3.style.visibility = "visible";
});

container4.addEventListener("mouseover", e=>{
    quesAns4.innerHTML = "Sometimes pets are free if there’s a special promotion going on, but adoption fees commonly range between $25 and $250.";
    ansHide4.style.visibility = "hidden";
});

container4.addEventListener("mouseout", e=>{
    quesAns4.innerHTML = initialtext3;
    ansHide4.style.visibility = "visible";
});

container5.addEventListener("mouseover", e=>{
    quesAns5.innerHTML = "Some shelters and rescue groups have free or discounted services, such as dog-training classes or veterinary or behavior assistance, to make sure your adoption goes smoothly after you get your new pet home.";
    ansHide5.style.visibility = "hidden";
});

container5.addEventListener("mouseout", e=>{
    quesAns5.innerHTML = initialtext4;
    ansHide5.style.visibility = "visible";
});






