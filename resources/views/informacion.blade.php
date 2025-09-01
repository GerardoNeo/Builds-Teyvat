<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/informacion.css') }}">
    <title>principal</title>
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
                            <div class="pj-pyro">
                                <img src="/img/Ganyu_banner.webp" alt="">
                            </div>
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
                <div class="pop-content">
                    <div class="select"></div>
                    <div class="pj-text">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/informacion.js') }}"></script>
</html>