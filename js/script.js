// creo un evento alla pressione sul tasto invio
$("#list_element").keydown(function (e) {
  if (e.which == 13) {
    // clono il template
    var listItemTemplate = $(".template .todo_list_item").clone();

    // prendo il valore che arriva dall'input
    var inputValue = $(this).val();

    // immetto il valore nel mio list-item in template
    listItemTemplate.prepend(inputValue);

    // innietto tutto il list-item nella lista visibile in html
    $(".todo_list").append(listItemTemplate);

    // setto a vuoto il valore della casella di input
    $(this).val("");

    console.log($(this).val());

  }
});



// creo un evento al click sul bottone che elimini l'elemento corrispondente
$(".todo_list").on("click", $("#btn"), function () {
  $("#btn").parent().remove();
});
