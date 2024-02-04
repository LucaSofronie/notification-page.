const notificationCounter = document.getElementById('notification-counter');
const markAllBtn = document.getElementById('markAll');
const notificationArr = document.querySelectorAll('.notification-elem');
const notificationAlertArr = document.querySelectorAll('.notification-alert');
const readNotification = [];

document.addEventListener('DOMContentLoaded', () => {
  setupNotifications();
})

// set the notification to pop
const setupNotifications = () => {
  for (let i=0; i<3; ++i){
    
    notificationArr[i].style['background-color'] = 'var(--color-light-grayish-blue-1)';
    notificationAlertArr[i].innerText = '🚨';
    readNotification[i] = false;

    readNotif(i, false);
  }
  // console.log(notificationAlertArr[0].innerText);
}

const readNotif = (index, all) => {

  const readIt = (index2) => {
    if (readNotification[index2] === true)
      return;
    readNotification[index2] = true;
    notificationAlertArr[index2].innerText = '';
    notificationCounter.innerText = parseInt(notificationCounter.innerText) - 1;
    notificationArr[index2].style['background-color'] = 'var(--color-white)';
  }
  if (all){
    for (let i=0; i<3; ++i){
      readIt(i);
    }
    return;
  }
  notificationArr[index].addEventListener('click', () => readIt(index));
}

markAllBtn.addEventListener('click', () => {
  readNotif(0, true);
})