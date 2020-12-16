//root -> tag vagy element- aminek a tag-je
function _load() {
  let rootE = document.getElementById("root");

  let myObjects = [
    {
      tag: "h1",
      content: "miyaa",
    },
    {
      tag: "p",
      content: "Frontend developer",
    },
  ];
  //console.log(myObject);

  /* for (let index = 0; index < myObject.length; index++) {
     
 }*/

  for (myObject of myObjects) {
    //console.log(myObject.tag);

    let createTag = document.createElement(myObject.tag);
    rootE.appendChild(createTag);
    createTag.insertAdjacentHTML("beforeend", myObject.content);
    // mind a 2 működik
    // rootE.insertAdjacentHTML("beforeend", ` <${myObject.tag}>myObject.content</${myObject.tag}>`);
  }
  
  rootE.addEventListener("click", function () {
    rootE.classList.toggle("clicked");
  });
}
window.addEventListener("load", _load);
