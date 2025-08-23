<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');
Route::inertia('/about', 'Info/About');
Route::inertia('/contact', 'Info/Contact');