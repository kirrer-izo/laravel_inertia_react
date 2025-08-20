<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::inertia('/about', 'Info/About');
Route::inertia('/contact', 'Info/Contact');