/* jshint esversion: 8 */

function includeHTML()
{
   // console.log('includeHTML() starts...')
   var z, i, elmnt, file, xhttp;
   /* Loop through a collection of all HTML elements: */
   z = document.getElementsByTagName("*");
   for (i = 0; i < z.length; i++)
   {
      elmnt = z[i];
      /* search for elements with a certain atrribute: */
      file = elmnt.getAttribute("w3-include-html");
      if (file)
      {
         /* Make an HTTP request using the attribute value as the file name: */
         xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function ()
         {
            if (this.readyState == 4)
            {
               if (this.status == 200) { elmnt.innerHTML = this.responseText; }
               if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
               /* Remove the attribute, and call this function once more: */
               elmnt.removeAttribute("w3-include-html");
               includeHTML();
            }
         }
         xhttp.open("GET", file, true);
         xhttp.send();
         /* Exit the function: */
         // console.log('includeHTML() ends...')
         return;
      }
   }
}
// console.log("include 111111111")
// 「呼叫」(call)這個函數。函數一定要有人呼叫(或稱調用)才會執行。
includeHTML();

// 注意：以下須為相對於index.html的路徑。
// document.write('<script src="/lib/_common/pureJsLinking.js"></script>');