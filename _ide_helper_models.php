<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\Car
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\CarPart[] $carParts
 * @property-read \App\Owner $owner
 */
	class Car extends \Eloquent {}
}

namespace App{
/**
 * App\CarPart
 *
 */
	class CarPart extends \Eloquent {}
}

namespace App{
/**
 * App\Owner
 *
 */
	class Owner extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 */
	class User extends \Eloquent {}
}

