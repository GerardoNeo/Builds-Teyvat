<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/catalogo.css') }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="head"></div>
    <div class="content">
        <div class="column">
            <div class="filters">
                <div class="filter-column">
                    <h1>Elemento</h1>
                    <div class="line"></div>
                    <div class="elements">
                    </div>
                </div>
                <div class="filter-column">
                    <h1>Arma</h1>
                    <div class="line"></div>
                    <div class="weapons"></div>
                </div>
            </div>
        </div>
        <div class="catalogo-content">
            <div class="catalogo">
                <div class="cat-row1">
                    <input type="text" class="search">
                    <div class="btn-search"></div>
                </div>
                <div class="cat-row2"></div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/catalogo.js') }}"></script>
</html>