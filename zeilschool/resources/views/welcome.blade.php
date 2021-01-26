<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>Zeil School De Waai</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">

        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
        <link rel="shortcut icon" href="{{ asset('/images/Logo.jpg') }}"><!--favicon-->
    </head>
    <body>
        @extends('layouts.app')
        @section('content')
            <div id="intro"></div>
            <div id="floot"></div>
            <div id="section"></div>
            <div id="main"></div>
            <div id="prive"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave" style="background-color:#fff">
                <path fill="#171717" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,133.3C672,139,768,181,864,192C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div id="footer"></div>
        @endsection
    </body>
</html>
