const notificationCounter = document.getElementById('notification-counter');
const markAllBtn = document.getElementById('markAll');
const notificationArr = document.querySelectorAll('.notification-elem');

document.addEventListener('DOMContentLoaded', () => {
  for (let i=0; i<3; ++i){
    // console.log(notificationArr[i].classList);
    notificationArr[i].style['background-color'] = 'var(--color-light-grayish-blue-1)';
    const notificationAlert = notificationArr[i].querySelector('.notification-alert');
    notificationAlert.innerHTML = '🚨';
    
    console.log(notificationAlert.innerHTML);
  }
})