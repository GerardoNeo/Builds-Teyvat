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
                            <p>NeoXD_Play</p>
                            <div class="line2"></div>
                        </div>
                        <div class="info">
                            <p>En proceso</p>
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
                    <div class="btn-op" id="btn-delete">
                        <p>Borrar cuenta</p>
                    </div>
                    <div class="btn-op" id="btn-close">
                        <p>Cerrar session</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/perfil.js') }}"></script>
</html>