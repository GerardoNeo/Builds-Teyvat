<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    <header>
        <div></div>
        <p>Builts Teyvat</p>
        <div></div>
    </header>
    <div class="content">
        <div class="login-content-registrar">
            <div class="perfil">
                <div class="circle">
                    <i class='bx bx-user'></i>
                </div>
            </div>
            <div class="formu-content">
                <div class="input-row">
                    <p>Nombre de usuario</p>
                    <input type="text" placeholder="astro123" class="name">
                </div>
                <div class="input-row">
                    <p>Correo electronico</p>
                    <input type="text" placeholder="example@gmail.com" class="gmail">
                </div>
                <div class="input-row">
                    <p>Contraseña</p>
                    <input type="password" class="pass">
                </div>
                <div class="input-row">
                    <p>Repita contraseña</p>
                    <input type="password" class="pass-rep">
                </div>
            </div>
            <div class="btn-content">
                <div class="btn-log">
                    <p>Crear cuenta</p>
                </div>
                <div class="change">
                    <p>Tienes cuenta?</p>
                </div>
            </div>
        </div>
        <div class="login-content-entrar">
            <div class="perfil">
                <div class="circle">
                    <i class='bx bx-user'></i>
                </div>
            </div>
            <div class="formu-content">
                <div class="input-row">
                    <p>Nombre de usuario</p>
                    <input type="text" placeholder="astro123" class="name-in">
                </div>
                <div class="input-row">
                    <p>Contraseña</p>
                    <input type="password" class="pass-in">
                </div>
            </div>
            <div class="btn-content">
                <div class="btn-in">
                    <p>Iniciar session</p>
                </div>
                <div class="change">
                    <p>No tienes cuenta?</p>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/login.js') }}"></script>
</html>