$(document).ready(function () {

    $('button').click('button', function () {
        //  alert("testing");
        $("#outputbox").append(`
        <div class="contactinfo">
        <p><h1>
        ${$('input[type="text"][name="first_name"]').val()}
        ${$('input[type="text"][name="last_name"]').val()}
        </h1>
        <p class="desc">Click for description!</p>
        </p>
        <p class="contactinfo2">
        ${$('textarea').val()}
        </p></div>`)
        return false;
        });


        $(document).on('click','.contactinfo', function(){
            // alert('click to show description')
            $(this).children().toggle();
        })
    })
 