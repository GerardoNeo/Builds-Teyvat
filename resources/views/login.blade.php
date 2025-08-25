<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    <header>
        <p>Builts Teyvat</p>
    </header>
    <div class="content">
        <div class="login-content">
            <div class="perfil">
                <div class="circle">
                    <i class='bx bx-user'></i>
                </div>
            </div>
            <div class="formu-content">
                <div class="input-row">
                    <p>Correo o usuario</p>
                    <input type="text" placeholder="example@gmail.com" id="gmail">
                </div>
                <div class="input-row">
                    <p>Contraseña</p>
                    <input type="password" placeholder="*****************" id="pass">
                </div>
                <div class="input-row">
                    <p>Repita contraseña</p>
                    <input type="password" placeholder="*****************" id="pass-rep">
                </div>
            </div>
            <div class="btn-content">
                <div class="btn-login">
                    <p>Iniciar session</p>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{  asset('js/login.js') }}"></script>
</html>