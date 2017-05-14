<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    public function cars()
    {
        $this->hasMany(Car::class);
    }
}
