<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/catalogo.css') }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <header>
        <p>Builts Teyvat</p>
    </header>
    <div class="content">
        <div class="column-content">
            <div class="column-filt">
                <div class="filt-content">
                    <div class="filter">
                        <div class="content-text">
                            <p>Elemento</p>
                            <div class="line"></div>
                        </div>
                        <div class="elementos" id="element">
                            <div class="item">
                                <p>Anemo</p>
                            </div>
                            <div class="item">
                                <p>Geo</p>
                            </div>
                            <div class="item">
                                <p>Electro</p>
                            </div>
                            <div class="item">
                                <p>Dendro</p>
                            </div>
                            <div class="item">
                                <p>Hydro</p>
                            </div>
                            <div class="item">
                                <p>Pyro</p>
                            </div>
                            <div class="item">
                                <p>Cryo</p>
                            </div>
                        </div>
                    </div>
                    <div class="filter">
                        <div class="content-text">
                            <p>Arma</p>
                            <div class="line"></div>
                        </div>
                        <div class="elementos" id="weapon">
                            <div class="item">
                                <p>Espada ligera</p>
                            </div>
                            <div class="item">
                                <p>Mandoble</p>
                            </div>
                            <div class="item">
                                <p>Arco</p>
                            </div>
                            <div class="item">
                                <p>Lanza</p>
                            </div>
                            <div class="item">
                                <p>Catalizador</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column-catalogo">
                <div class="search-content">
                    <input type="text" class="search" placeholder="Buscar...">
                    <div class="icon-content">
                        <i class='bx bx-search'></i>
                    </div>
                </div>
                <div class="catalogo-content">
                    <div class="catalogo">
                        <div class="list-pj">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/catalogo.js') }}"></script>
</html>