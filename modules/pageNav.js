const navigate = () => {
  const bookListSection = document.querySelector('.books-container');
  const contactSection = document.querySelector('.contact');
  const addBookSection = document.querySelector('.add-new-books');
  const List = document.getElementById('list');
  const Contact = document.getElementById('contact');
  const AddNew = document.getElementById('add-new');

  List.addEventListener('click', () => {
    bookListSection.classList.remove('hide');
    contactSection.classList.add('hide');
    addBookSection.classList.add('hide');
  });

  Contact.addEventListener('click', () => {
    bookListSection.classList.add('hide');
    contactSection.classList.remove('hide');
    addBookSection.classList.add('hide');
  });

  AddNew.addEventListener('click', () => {
    bookListSection.classList.add('hide');
    contactSection.classList.add('hide');
    addBookSection.classList.remove('hide');
  });
};
export default navigate;

// const navigate = () => {
//   const removeLinks = () => {
//     links.forEach((link) => {
//       link.classList.remove("selected");
//     });
//   };

//   /* eslint-disable no-unused-vars */
//   const displayBookList = (elem) => {
//     bookListSection.style.display = "block";
//     addBookSection.style.display = "none";
//     contactSection.style.display = "none";
//     removeLinks();
//     elem.classList.add("selected");
//   };
//   const displayAddBooks = (elem) => {
//     bookListSection.style.display = "none";
//     addBookSection.style.display = "block";
//     contactSection.style.display = "none";
//     removeLinks();
//     elem.classList.add("selected");
//   };
//   const displayContact = (elem) => {
//     bookListSection.style.display = "none";
//     addBookSection.style.display = "none";
//     contactSection.style.display = "block";
//     removeLinks();
//     elem.classList.add("selected");
//   };
//   displayBookList();
//   displayAddBooks();
//   displayContact();
// }

// export default navigate