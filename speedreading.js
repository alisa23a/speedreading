$(document).ready(function () {
    var a;
    var speed = 1000;
    $(function() {
        var el;
        $("#rng").change(function() {
        el = $(this);
        speed = el.val();
        var wpm = Math.round( 60000 / el.val() );
        el
        .next("#ong") 
        .text('Слов в минуту: ' + wpm);
        })
        .trigger('change');
    });

    var tsize = 5;

    $(function() {
        var el2;
        $("#rng2").change(function() {
        el2 = $(this);
        tsize = el2.val();
        tsizevh = tsize + 'vh';
        $('#disp').css('fontSize', tsizevh);
        el2
        .next("#ong2") 
        .text('Размер шрифта: ' + tsize);
        })
        .trigger('change');
    });

    var textarea = $('#textarea');

    function read(){
        var arr = [];

        if (textarea.val() != undefined){
            let text = textarea.val();
            arr = text.split(/\s+/g);

            function show(){
                var i = 0;
                var timer = setInterval(function() {
                    $('#stop').click(function(){
                        clearInterval(timer);
                    });
                    if (i >= arr.length) {
                    clearInterval(timer);
                    console.log("The end.");
                    } else {
                    
                    var word = arr[i];
                    $('#disp').html(word);
                    console.log(i + ": " + arr[i++]);
                    }
                    if(a == 1) {
                    return;
                    }
                }, speed);                
                
            }

            show();
        } else {
            false;
        }
    }    

    $("#start").click(function() {
        if (textarea.val()){
            //console.log('textarea value: ' + textarea.val());
            read();
            $('#textarea').css('display', 'none');
            $('#stop').css('display', 'inline-block');
            $('#start').css('display', 'none');
            $('#controls').css('display', 'none');
            $('#clearit').css('display', 'none');
            $('#cr').css('display', 'none');

        } else {
            alert('Вставьте текст в текстовое поле');
            false;
        }
    });

    $("#stop").click(function() {
            $('#textarea').css('display', 'inline-block');
            $('#stop').css('display', 'none');
            $('#start').css('display', 'inline-block');
            $('#controls').css('display', 'block');
            $('#clearit').css('display', 'inline-block');
            $('#cr').css('display', 'block');
    });

    $('#clearit').click(function(){
        $('#textarea').val('');
        $('#clearit').css('display', 'none');
        $('#disp').html('Текст');
    });

    $('#textarea').bind('input propertychange', function() {
        $('#clearit').css('display', 'inline-block');
    });

    $('#checkbox').click(function(){
        if ($(this).is(':checked')){
            $('body').css('backgroundColor', '#333');
            $('#main').css('backgroundColor', '#333');
            $('#main').css('color', '#fff');
            $('#textarea').css('backgroundColor', '#444');
            $('#textarea').css('borderColor', '#fff');
            $('#textarea').css('color', '#fff');
            $('#rng').css('backgroundColor', '#333');
            $('#rng2').css('backgroundColor', '#333');
            $('button').css('color', '#333');
        } else {
            $('body').css('backgroundColor', '#f8f8f8');
            $('#main').css('backgroundColor', '#f8f8f8');
            $('#main').css('color', '#333');
            $('#textarea').css('backgroundColor', '#fff');
            $('#textarea').css('borderColor', '#333');
            $('#textarea').css('color', '#000');
            $('#rng').css('backgroundColor', '#f8f8f8');
            $('#rng2').css('backgroundColor', '#f8f8f8');
            $('button').css('color', '#fff');
        }
    });
})