
function deleteTodo() {
  $.ajax({
    type:'delete',
    url:"/todos",
    data: {
      id: dataId,
      accessToken : accessToken
    },
    success: function(msg){
      // alert("success");
      alert(msg);
    },
    error: function(msg){
      alert("error:" + msg);
    }
  });
}
var dataId = document.querySelector('.todo-description').getAttribute('data-id')
  , accessToken = document.querySelector('#accessToken').getAttribute('value');
console.log(accessToken + 'from delete.js');
console.log(document.querySelector('.delete-button'))
document.querySelector('.delete-button').addEventListener('click', deleteTodo, false);
