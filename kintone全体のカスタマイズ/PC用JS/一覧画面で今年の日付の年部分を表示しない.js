let 今年の年 = new Date().getFullYear();
// 日付型フィールドと日時型フィールドの値を置換する
document.querySelectorAll('td.recordlist-cell-gaia.recordlist-date-gaia, td.recordlist-cell-gaia.recordlist-datetime-gaia').forEach(elm=>{
   elm.innerHTML = elm.innerHTML.replaceAll(`<span>${今年の年}-`,'<span>').replaceAll('-','/');
});
