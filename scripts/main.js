let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/零基础启蒙.jpg') {
      myImage.setAttribute('src', 'images/正式入门.jpg');
    } else {
      myImage.setAttribute('src', 'images/零基础启蒙.jpg');
    }
};



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
      }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  // 为按钮设置 onclick 事件处理器：
  myButton.onclick = function() {
  setUserName();
  }
  
  
  
  
  
  
