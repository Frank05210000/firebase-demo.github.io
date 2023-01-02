//先創建一個Date實體
var time = new Date();

//獲取當前時間(取得的值為一個毫秒数值)
var theTime = time.getTime(); //1558492972644

var timeDetails = {
  year: time.getFullYear(),
  month: time.getMonth() + 1,
  date: time.getDate(),
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
};
console.log(timeDetails);