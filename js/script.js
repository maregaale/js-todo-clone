// creo un evento alla pressione sul tasto invio
$("#list_element").keydown(function (e) {

  // controllo la pressione del tasto invio
  if (e.which == 13) {
    // clono il template
    var listItemTemplate = $(".template .todo_list_item").clone();

    // prendo il valore che arriva dall'input
    var inputValue = $(this).val();

    // controllo che l'utente non abbia inserito una stringa vuota
    if (inputValue != "") {
      // immetto il valore nel mio list-item in template
      listItemTemplate.prepend(inputValue);

      // faccio apparire la lista
      $(".todo_list").slideDown(1000);

      // innietto tutto il list-item nella lista visibile in html
      $(".todo_list").append(listItemTemplate);

      // faccio apparire i list items
      listItemTemplate.slideDown(1000);

      // setto a vuoto il valore della casella di input
      $(this).val("");
    }
  }
});

// creo un evento on-click sul bottone che elimini l'elemento e la riga corrispondente
$(".todo_list").on("click", "#btn", function () {
  $(this).parent().slideUp('slow');
});
