$(document).ready(function(){
    $(".error").hide();

    $("#password").on("input", function(){
       if(this.validity.patternMismatch) {
           $(".password").show()
       }
       else {
            $(".password").hide()
       }
    })

    $("#passwordConfirmation").on("input", function(){
        if(
            $(this).val() === $("#password").val()
            &&
            !this.validity.patternMismatch
            ) {
            $(".passwordConfirmation").hide()
        }
        else {
             $(".passwordConfirmation").show()
        }
    })


})