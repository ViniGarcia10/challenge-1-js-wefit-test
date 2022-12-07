//modify container of webpage
function ModifyContainer() {
  //search components
  let container = document.getElementsByClassName("container");

  //apply property in the class
  container[0].setAttribute("class", "container-fluid");
}

//func modify menu format
function ModifyMenu() {
  //search components
  let headerMenu = document.getElementsByClassName("col-lg-12");
  let headerMenuButton = document.getElementsByClassName("btn-group-vertical");

  //apply property in the class
  headerMenu[0].setAttribute("class", "col-lg-12 pt-4");
  headerMenuButton[0].setAttribute("class", "btn-group-toggle");
}

//func modify card header
function ModifyCardHeader() {
  //search components
  let headerCard = document.getElementsByClassName("jumbotron");
  let headerCardLine = document.getElementsByClassName("my-4");
  let headerCardButton = document.getElementsByClassName("btn btn btn-lg");

  //apply property in the class
  headerCard[0].setAttribute(
    "class",
    "d-flex flex-column align-items-end jumbotron bg-secondary text-white"
  );
  headerCardLine[0].setAttribute("class", "my-4 w-100");
  headerCardButton[0].setAttribute("class", "btn btn-success btn-lg");
}

//func modify list of cards
function ModifyListCards() {
  //search components
  let BtnCard = document.getElementsByClassName("btn btn-primary");
  let ListCard = document.getElementsByClassName("col-lg-3");

  //apply property in the class
  BtnCard[0].setAttribute("class", "btn btn-success");

  //modify position list by order attr
  ListCard[0].setAttribute("class", "col-lg-3 order-1"); //animals
  ListCard[1].setAttribute("class", "col-lg-3 order-3 order-last"); // tech
  ListCard[2].setAttribute("class", "col-lg-3 order-2"); //persons
  ListCard[3].setAttribute("class", "col-lg-3 order-0 order-first"); //nature
}

//func modify list options
function ModifyListOptions() {
  //search components
  let ContainOptions = document.getElementsByClassName("col-lg-4");
  let ListGroup = document.getElementsByClassName("list-group");
  let ListItem = document.getElementsByClassName("list-group-item");

  //apply property in the class
  ContainOptions[0].setAttribute("class", "col-lg-4 mb-5");
  ListItem[0].setAttribute("class", "list-group-item");

  //apply new child options
  ListGroup[0].innerHTML += `
  <li class="list-group-item active">Quarto item</li>
  <li class="list-group-item">Quinto item</li>
    `;
}

//call apply modifications
ModifyContainer();
ModifyMenu();
ModifyCardHeader();
ModifyListCards();
ModifyListOptions();
