<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class Owner extends Model
{
    use CascadesDeletes;
    protected $cascadeDeletes = ['cars'];

    public function cars()
    {
        return $this->hasMany(Car::class);
    }

}
