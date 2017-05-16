<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class Car extends Model
{
    use CascadesDeletes;
    protected $cascadeDeletes = ['carParts'];

    public function owner()
    {
        return $this->belongsTo(Owner::class);
    }

    public function carParts()
    {
        return $this->hasMany(CarPart::class);
    }

}
