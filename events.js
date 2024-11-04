//event bubbling:deeplevel element to toplevel element
//event trickling:toplevel element to bottom
const a=document.querySelector("#btn");
a.addEventListener("click", function (){
    alert("button clicked")
})
document.querySelector("#gparent").addEventListener("dblclick",function(e){
    alert("clicked on grandparent")
},true)
document.querySelector("#parent").addEventListener("dblclick",function(){
    alert("clicked on parent")
})
document.querySelector("#child").addEventListener("dblclick",function(){
    alert("clicked on child")
},true)
