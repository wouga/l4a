<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{

//    protected $with = ['cars'];
    public function cars()
    {
        return $this->hasMany(Car::class);
    }
}
