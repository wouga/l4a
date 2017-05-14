<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarPart extends Model
{
    public function car()
    {
        $this->belongsTo(Car::class);
    }
}
