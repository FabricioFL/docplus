<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Docplus | sua plataforma de gestão para médicos e empresários</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/common.css')}}">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="{{asset('js/themes.js')}}" defer></script>
    </head>
    <body id="dynamic-theme">
        <div id="dynamic-navbar">
            <a href="#" id="dynamic-nav-title">Docplus</a>
            <img class="cursor-pointer" src="{{asset('images/light-mode.png')}}" id="light-theme-btn" onclick="switchTheme()" title="Mudar para o tema claro">
            <img class="cursor-pointer" src="{{asset('images/dark-mode.png')}}" id="dark-theme-btn" onclick="switchTheme()" title="Mudar para o tema escuro">
        </div>
    </body>
</html>
