<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/catalogo.css') }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Catalogo</title>
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
<script src="{{  asset('js/catalogo.js') }}"></script>
</html>