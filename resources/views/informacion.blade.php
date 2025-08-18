<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/informacion.css') }}">
    <title>principal</title>
</head>
<body>
    <div class="head"></div>
    <div class="content">
        <div class="content-left">
            <div class="info">
                <div class="info-row1">
                    <div class="btn-back-pag">
                        <h1>Back</h1>
                    </div>
                </div>
                <div class="info-row2">
                    <div class="info-img"></div>
                    <div class="info-text">
                    </div>
                </div>
                <div class="info-row3"></div>
            </div>
        </div>
        <div class="content-right">
            <div class="vote-content">
                <div class="vote">

                </div>
            </div>
            <div class="equipment-content">
                <div class="equipment">
                    <div class="equip">
                        <div class="title">
                            <h1>Armas recomendadas</h1>
                        </div>
                        <div class="equip-img" id="1">
                            <div class="weapon-img"></div>
                            <div class="weapon-name">
                                <h1>Baculo de homa</h1>
                            </div>
                        </div>
                        <div class="button-content">
                            <div class="btn-back">
                                <i class='bx bx-left-arrow-alt'></i>
                            </div>
                            <div class="btn-better">
                                <i class='bx bxs-star'></i>
                            </div>
                            <div class="btn-next">
                                <i class='bx bx-right-arrow-alt'></i>
                            </div>
                        </div>
                    </div>
                    <div class="equip">
                        <div class="title">
                            <h1>Sets recomendados</h1>
                        </div>
                        <div class="equip-img" id="2">

                        </div>
                        <div class="button-content">
                            <div class="btn-back">
                                <i class='bx bx-left-arrow-alt'></i>
                            </div>
                            <div class="btn-better">
                                <i class='bx bxs-star'></i>
                            </div>
                            <div class="btn-next">
                                <i class='bx bx-right-arrow-alt'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/informacion.js') }}"></script>
</html>