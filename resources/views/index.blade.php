@extends('layouts.master')

@section('meta:title', 'Twitter geo feed')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
@endsection

@section('page:content')
    <div id="app"></div>
@endsection

@section('scripts')
    <script>

        window.TweetFeedApp = {
            google_api_key: '{{ env('GOOGLE_MAP_API_KEY') }}'
        };
    </script>

    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendors.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>

    @parent

@endsection