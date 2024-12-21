let boxes=document.querySelector(".box");
let resetbtn=document.querySelector("#reset-btn");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.foreach{(box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        box.innerText = "abcd";
        if(turn0)
        {
            box.innerText="0";
            turn0="false";
        }
        else{
            box.innerText="x";
            turn0="true";
        }
    });
}};
