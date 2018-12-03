$(document).ready(function () {

  $("#contact-form").on("submit", function(e) {
    e.preventDefault();
    var formIsValid = true;
    var nameIsValid = $("#name-field").prop("validity").valid;
    var emailIsValid = $("#email-field").prop("validity").valid;
    var messageIsValid = $("#message-box").prop("validity").valid;

    if (!nameIsValid) {
      formIsValid = false;
      $("#name-field-error").removeClass("hidden");
    } else {
      $("#name-field-error").addClass("hidden");
    }

    if (!emailIsValid) {
      formIsValid = false;
      $("#email-field-error").removeClass("hidden");
    } else {
      $("#email-field-error").addClass("hidden");
    }

    if (!messageIsValid) {
      formIsValid = false;
      $("#message-field-error").removeClass("hidden");
    } else {
      $("#message-field-error").addClass("hidden");
    }

    if (formIsValid) {
      $("#form-container").addClass("hidden");
      $("#post-message").removeClass("hidden");
    }
    return formIsValid;
  });

})
