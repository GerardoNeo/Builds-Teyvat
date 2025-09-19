<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/perfil.css') }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Perfil</title>
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
        <div class="perfil-content">
            <div class="btn-back-content">
                <div class="btn-back">
                    <p>Back</p>
                </div>
            </div>
            <div class="perfil-info">
                <div class="info-content">
                    <div class="perfil-img">
                        <div class="img-content">

                        </div>
                        <div class="btn-change">
                            <p>Cambiar</p>
                        </div>
                    </div>
                    <div class="info-perfil-content">
                        <div class="name">
                            <p></p>
                            <div class="line2"></div>
                        </div>
                        <div class="info">
                            <div class="title-seccion">
                                <p>Información</p>
                                <div class="line"></div>
                            </div>
                            <div class="info-content-perfil">
                                
                            </div>
                            <div class="btn-edit-perfil">
                                <p>Editar información</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment-content">
                    <div class="line-content">
                        <p>Comentario mas reciente</p>
                        <div class="line"></div>
                    </div>
                    <div class="print-comment">
                    </div>
                </div>
                <div class="btns-content">
                    <!--<div class="btn-op" id="btn-delete">
                        <p>Borrar cuenta</p>
                    </div>-->
                    <div class="btn-op" id="btn-close">
                        <p>Cerrar session</p>
                    </div>
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
</body>

<div class="pop-up-img">
    <div class="pop-img-content">
        <div class="close-img">
            <p>X</p>
        </div>
        <div class="pop-content-all">
            <input type="text" class="search">
            <div class="img-print">
                <div class="print-content">

                </div>
            </div>
            <div class="btn-img">
                <p>Elegir</p>
            </div>
        </div>
    </div>
</div>
<script src="{{  asset('js/perfil.js') }}"></script>
</html>