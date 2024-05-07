<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https:://fonts.bunny.net">
        <link href="https:://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link href="https:://fonts.googleapis.com/css?family=Poppins:400,500,700,800&display=swap" rel="stylesheet">

        <script type="text/javascript" src="https://app.midtrans.com/snap/snap.js" data-client-key="Mid-client-lszkdY20Dm8kxGTe"></script>

       
        <script>
            window.LARAVEL_ASSET_URL = "{{ asset('') }}";
        </script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite('resources/css/app.css')
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
