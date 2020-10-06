/* jshint esversion: 8 */

// window.addEventListener("DOMContentLoaded", (event) =>
window.addEventListener("load", (event) =>
{
   function setPageInfoArray()
   // 產生網站各版面資訊的array。
   {
      let pageInfoArr =
         [
            {
               title: '首頁',
               filename: 'index.html',
               state: ''
            },
            {
               title: '搜尋',
               filename: 'search.html',
               state: ''
            },
            {
               title: '編輯',
               filename: 'edit.html',
               state: ''
            },
            {
               title: '分類',
               filename: 'category.html',
               state: ''
            },
            {
               title: '播放',
               filename: 'play.html',
               state: ''
            },
            {
               title: '字幕',
               filename: 'subtitle.html',
               state: ''
            },
            {
               title: '工具',
               filename: 'tools.html',
               state: ''
            },
            {
               title: '連結',
               filename: 'links.html',
               state: ''
            }
         ]
      let path = window.location.pathname
      let page = path.split("/").pop()
      // console.log(page)

      let itemValue = pageInfoArr.find(({ filename }) => filename === page)
      // console.log(itemValue)

      // console.log(pageInfoArr.indexOf(itemValue))
      pageInfoArr[pageInfoArr.indexOf(itemValue)].state = 'disabled'
      return pageInfoArr

   }


   let pageInfo =
   {  // 要給pure.js用的資料object。
      pages: setPageInfoArray()
   }

   function renderPageInfo(pageInfo)
   {
      let directive = {
         'li': {
            'page<-pages': {
               'a@href+': 'page.filename',
               'a': 'page.title',
               'a@class+': function ()
               {
                  return ' ' + this.state
               }
            }
         }
      }
      $p('.navbar-nav').render(pageInfo, directive)
   }

   // 渲染
   renderPageInfo(pageInfo)
})