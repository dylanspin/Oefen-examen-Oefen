<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function boot($bootId)
    {
        return view('boot')->with('num', $bootId);
    }

    public function contact()
    {
        return view('contact');
    }

    public function dag()
    {
        return view('dag');
    }

    public function prive()
    {
        return view('prive');
    }

    public function review()
    {
        return view('review');
    }

    public function ons()
    {
        return view('overOns');
    }
}
