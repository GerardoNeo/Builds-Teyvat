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
        <div></div>
        <p>Builts Teyvat</p>
        <div class="login">
            <i class='bx bx-user'></i>
        </div>
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
                        <div class="new-comment">
                            <div class="new-input">
                                <input type="text" id="new-comment" placeholder="Comentar...">
                                <div class="btn-comment">
                                    <span><i class='bx bx-send'></i></span>
                                </div>
                            </div>
                            <div class="line-new"></div>
                        </div>
                        <div class="comments">
                            <div class="comment-content">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-column2">
                <div class="voto-content">
                    <div class="voto-cuadro">
                        <div class="btn-voto">
                            <p>Votar</p>
                        </div>
                    </div>
                </div>
                <div class="weapon-column">
                    <div class="item" id="weapon"></div>
                    <div class="item" id="artefact">
                    </div>
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

    <div class="pop-up-voto">
        <div class="pop-voto-content">
            <div class="close-btn-voto">
                <p>X</p>
            </div>
            <div class="pop-voto">
                <div class="voto-column-content">
                    <div class="voto-column1">
                        <div class="op-voto" id="pj">
                            <div class="perso">
                            </div>
                        </div>
                        <div class="op-voto" id="artef">
                            <img src="{{ asset('img/Artefactos.webp') }}">
                        </div>
                        <div class="op-voto" id="arma">
                            <div class="artefacto">

                            </div>
                        </div>
                        
                    </div>
                    <div class="voto-column2">
                        <input type="text">
                        <div class="voto-print-content">
                            <div class="voto-print"></div>
                        </div>
                        <div class="btn-confirm-voto">
                            <p>Recomendar</p>
                        </div>
                    </div>

                    <div class="voto-column3">
                        <div class="column3-voto-content">
                            <img src="">
                            <div class="votos">
                                <span class="estrella" data-value="1">★</span>
                                <span class="estrella" data-value="2">★</span>
                                <span class="estrella" data-value="3">★</span>
                                <span class="estrella" data-value="4">★</span>
                                <span class="estrella" data-value="5">★</span>
                                </div>
                                <p>Tu voto: <span id="voto-seleccionado">0</span></p>
                            </div>
                        <div class="btn-confirm-voto" id="btn-pj-voto">
                            <p>Votar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pop-up-login">
        <div class="pop-up-login-content">
            <div class="btn-login-close">
                <p>X</p>
            </div>
            <div class="login-content-all">
                <div class="circle-login">
                    <i class='bx bx-user'></i>
                </div>
                <div class="input-row-pop">
                    <p>Usuario o correo</p>
                    <input type="text" id="pop-correo">
                </div>
                <div class="input-row-pop">
                    <p>Contraseña</p>
                    <input type="text" id="pop-contra">
                </div>
                <div class="content-create">
                    <div class="btn-pop-login">
                        <p>Iniciar session</p>
                    </div>
                    <p id="create-log">Crear cuenta</p>
                </div>
            </div>
        </div>
    </div>

    <div class="pop-up-perfil">
        <div class="pop-perfil-content">
            <div class="pop-perfil-content-all">
                <div class="perfil-close">
                    <p>X</p>
                </div>
                <div class="pop-icon-content">
                    <i class='bx bx-user'></i>
                </div>
                <div class="pop-btn-op-content">
                    <div class="pop-btn-op" id="ver-perfil">
                        <p>Ver perfil</p>
                    </div>
                    <div class="pop-btn-op" id="cerrar-session">
                        <p>Cerrar session</p>
                    </div>
                    <div class="pop-btn-op" id="iniciar-session">
                        <p>Iniciar session</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/informacion.js') }}"></script>
</html>