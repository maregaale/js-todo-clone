// creare una todo list che permetta di aggiungere (tramite campo input) e rimuovere gli elementi!

// clono il template
var listItemTemplate = $(".template .todo_list_item").clone();

// creo un evento alla pressione sul tasto invio
$("#list_element").keydown(function (e) {
  if (e.which == 13) {
    // prendo il valore che arriva dall'input
    var inputValue = $(this).val();

    // immetto il valore nel mio list-item in template
    listItemTemplate.text(inputValue);

    // innietto tutto il list-item nella lista visibile in html
    $(".todo_list").append(listItemTemplate);

    // setto a vuoto il valore della casella di input
    $(this).val("");
  }
});
