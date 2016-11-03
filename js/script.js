
$('form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
     
    
    $.ajax('http://ecity.org.ua:8080/city', {
        dataType: 'json',        
        data: form.serialize(),
        success: function(result){
            for (var key in result[0]) {
                var p = $('.ans').append('<p>').text(result[0]['name']);
                $('.info').append('<a>').text(result[0]['url']);
                console.log(key);

            }


           
        }
    });


    $('input').val(''); 

});

