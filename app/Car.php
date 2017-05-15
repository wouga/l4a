<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{

    public function owner()
    {
        return $this->belongsTo(Owner::class);
    }

    public function carParts()
    {
        return $this->hasMany(CarPart::class);
    }
}
