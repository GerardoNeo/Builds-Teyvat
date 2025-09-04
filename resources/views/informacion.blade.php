<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/informacion.css') }}">
    <title>informacion</title>
</head>
<body>
    <header>
        <p>Builts Teyvat</p>
    </header>
    <div class="content">
        <div class="info-content">
            <div class="info-column1">
                <div class="row-column">
                    <div class="back-row">
                        <div class="btn-back">
                            <p>Back</p>
                        </div>
                    </div>
                    <div class="info-row">
                        <div class="pj-row">
                            
                        </div>
                        <div class="pj-info-row">
                            <div class="info-pj-content">
                                <div class="text-content">
                                    <p>Información del personaje</p>
                                    <div class="line"></div>
                                </div>
                                <div class="pj-info"></div>
                                <div class="btn-more">
                                    <p>Ver mas...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coment-row">
                        <div class="new-coment">
                            <input type="text" id="new-c">
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-column2">
                <div class="voto-content">
                    <div class="voto-cuadro">

                    </div>
                </div>
                <div class="weapon-column">
                    <div class="item" id="weapon"></div>
                    <div class="item" id="artefact"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="pop-up-info">
        <div class="pop-info">
            <div class="pop-up-cont">
                <div class="close-btn">
                    <p>X</p>
                </div>
                <div class="pop-content">
                    <div class="select">
                        <div class="option on" data-campo="detalles">
                            <p>Detalles</p>
                        </div>
                        <div class="option" data-campo="historia1">
                            <p>Historia 1</p>
                        </div>
                        <div class="option" data-campo="historia2">
                            <p>Historia 2</p>
                        </div>
                        <div class="option" data-campo="historia3">
                            <p>Historia 3</p>
                        </div>
                        <div class="option" data-campo="historia4">
                            <p>Historia 4</p>
                        </div>
                        <div class="option" data-campo="historia5">
                            <p>Historia 5</p>
                        </div>
                        <div class="option" data-campo="vision">
                            <p>Vision</p>
                        </div>
                    </div>
                    <div class="pj-text">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/informacion.js') }}"></script>
</html>