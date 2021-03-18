// creare una todo list che permetta di aggiungere (tramite campo input) e rimuovere gli elementi!

// clono il template
var listItemTemplate = $(".template .todo_list_item").clone();

// creo un evento alla pressione sul tasto invio
$("#list_element").keydown(function (e) {
  if (e.which == 13) {
    // prendo il valore che arriva dall'input
    var inputValue = $(this).val();
    listItemTemplate.text(inputValue);
    $(".todo_list").append(listItemTemplate);
  }
});
