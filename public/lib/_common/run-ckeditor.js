/* jshint esversion: 8 */

ClassicEditor
   .create(document.querySelector('#editor'))
   .then(editor =>
   {
      console.log(editor);
   })
   .catch(error =>
   {
      console.error(error);
   });