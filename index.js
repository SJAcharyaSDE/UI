$(document).ready(function () {

    let valideUsername; 
    let validPaassword;
   function ValideUsername(username){
    if (!/^[A-Z][A-Za-z0-9]*$/.test(username)) {
        $('#error_Username').css("visibility", "visible");
        
        return false;
   }
   else{
    $('#error_Username').css("visibility", "hidden");
    return true;
   }
  }

  function ValidePassword(password){
    var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);

    if (!pattern.test(password)) {
        $('#error_Password').css("visibility", "visible");
        console.log(pattern.test(password))
        return false;
   }
   else{
    $('#error_Password').css("visibility", "hidden");
    return true;
   }
  }

  $('#Username').on('blur', function() {
    const username = $(this).val();
    valideUsername = ValideUsername(username);
  });

  $('#Password').on('blur', function() {
    const password = $(this).val();
    validPaassword = ValidePassword(password);
  });
  
  $("#submit").click(function() {
    // This function will be executed when the button is clicked
    if(valideUsername && validPaassword)
    {
        window.location.href = "home.html";
    }
});

});