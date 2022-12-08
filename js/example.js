const nameH1Element = document.querySelector('h1.inline');
const studentNoElement = document.querySelector('span.studentNo');
const emailElement = document.querySelector('span.email');
const connectNameElement = document.querySelector('span.red');

const inputModalElement = document.querySelector('#inputModal');

const setUserName = (name) => {
  nameH1Element.textContent = name;
  connectNameElement.textContent = name;
};

const setStudentNo = (studentNo) => {
  studentNoElement.textContent = studentNo;
};

const setEmail = (email) => {
  emailElement.textContent = email;
};

const localName = localStorage.getItem('name');
if (localName) setUserName(localName);

nameH1Element.onclick = () => {
  inputModalElement.showModal(localName);
  // const inputName = prompt('이름을 입력해주세요.');
  // if (inputName) {
  //   localStorage.setItem('name', inputName);

  //   setUserName(inputName);
  // } else {
  //   alert('이름이 입력되지 않았습니다.');
  // }
};

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    // console.log.(`${key} : ${value}`);
    if (key==='userName') setUserName(value);
    if (key==='studentNo') setStudentNo(value);
    if (key==='email') setEmail(value);

    inputModalElement.close();
  }
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
  // console.log(event.target.nodeName);
};
