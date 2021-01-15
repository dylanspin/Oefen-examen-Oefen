<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ZeilSchool</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href = {{ asset("bootstrap/css/bootstrap.css") }} rel="stylesheet" />
        <style>
            body {
                font-family: 'Nunito';
            }
        </style>
    </head>
    <body>
        <div id="header"></div>
        <div id="root"></div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
