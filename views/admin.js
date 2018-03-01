module.exports =  () => {
    return ( `
    <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <title>Администратор</title>
    <style>
        body{
            height: 100%;
        }
        main{
            height: 100vh;
            width: 100%;
            position: relative;
        }
    
        input{
            border: 1px solid #20303c;
            position: absolute;
            left: 10px;
            top: 0px;
            width: 500px;
            height: 38px;
            border-radius: 5px;
            font-size: 24px;
        }
        section{
            position: absolute;
            left: 10px;
            top: 80px;
        }
        div{
            
        }
        
        #but-2, #but-1{
                
                width: 500px;
                height: 40px;
                background-color: #20303c;
                color: #f8f8f2;
                text-align: center;
                line-height: 40px;
                vertical-align: bottom;
                cursor: pointer;
        }
        #but-1{
            display: block;
            margin-bottom: 20px;
        }
        @media screen and (max-device-width: 1076px) {
            input{
            border: 1px solid #20303c;
            position: absolute;
            left: 2%;
            top: 50px;
            width: 96%;
            height: 38px;
            border-radius: 5px;
            font-size: 24px;
        }
        section{
            position: absolute;
            left: 2%;
            top: 110px;
            width: 100%;
        }
        #but-2, #but-1{
                
                width: 96%;
                height: 40px;
                background-color: #20303c;
                color: #f8f8f2;
                text-align: center;
                line-height: 40px;
                vertical-align: bottom;
                
        }
        }
    </style>
    <script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
    <script type="text/javascript">
        $( document ).ready(function() {
            let ask = ()=>{ 
                let askres = prompt('Пароль: ', '');
                console.log(askres);
                $.ajax({
                type: 'POST',
                url: '/indefication',
                data: {pass: askres},
                success: function (data) {
                    console.log(data);
                    if (data === "e"){
                        ask();
                    }
                    
                }
            });
            };
              ask();  
            $("#but-1").click(()=> {
            let name = $('input').val();
            $.ajax({
                type: 'POST',
                url: '/updateitem',
                data: {name: name},
                success: function (data) {
                    alert("Добавлено");
                }
            });

    });
            $("#but-2").click(()=> {
        let name = $('input').val();
            $.ajax({
                type: 'POST',
                url: '/getitem',
                data: {name: name},
                success: function (data) {
                       alert(data);
                }
            });

    });
        });
    </script>
</head>
<body>
<main>
<input type="text" placeholder="Иванов Иван Иваныч">
<section>
<div id="but-1">Добавить</div>
<div id="but-2">Проверить</div>
</section>
</main>
</body>
</html>
    `)
}