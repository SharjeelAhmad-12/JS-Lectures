
const paragraph=document.getElementById("para1")
// user input paragraph

// const inputPara=prompt("Enter a para: ");
// paragraph.innerText=inputPara

// HardCode Paragraph
paragraph.innerText="Shine Bright Like Diamond"


// UnorderList Create Element in DOM

const ul=document.getElementById("list")
// console.log(ul);
const li=document.createElement("li")
li.innerText="Always Believe In Yourself "
ul.appendChild(li)



// TEXT CHANGE

function changeText(){
    const paragraph=document.getElementById("para")
    const newPara=prompt("Enter the text")
    paragraph.innerText=newPara

}
