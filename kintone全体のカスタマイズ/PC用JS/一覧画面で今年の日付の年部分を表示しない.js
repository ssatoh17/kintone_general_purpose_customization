setTimeout( () =>
{
   let 今年の年 = new Date().getFullYear();
   // 日付型フィールドと日時型フィールドの値を置換する
   const 日付関連フィールドセレクタ = 'td.recordlist-cell-gaia.recordlist-date-gaia,'
                               + 'td.recordlist-cell-gaia.recordlist-datetime-gaia,'
                               + 'td.recordlist-cell-gaia.recordlist-created_at-gaia,'
                               + 'td.recordlist-cell-gaia.recordlist-modified_at-gaia';
   document.querySelectorAll(日付関連フィールドセレクタ).forEach( elm =>{
      elm.innerHTML = elm.innerHTML.replaceAll(`<span>${今年の年}-`,'<span>').replaceAll('-','/');
   });
}, 3000);
