<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $owners = DB::table('owners')->pluck('id')->all();

        foreach (range(1, 25) as $index) {
            DB::table('cars')->insert([
                'model' => $faker->randomElement( ['audi', 'vw', 'bmw', 'opel', 'mercedes', 'mazda']),
                'version' => $faker->word,
                'year_of_production' => $faker->numberBetween(1990,2017),
                'color' => ltrim($faker->hexColor,'#'),
                'vin' => $faker->regexify('[A-Z]{3}[A-Z0-9]{6}[A-Z0-9]{8}'),
                'owner_id' => $faker->randomElement($owners),
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime()
            ]);
        }
    }
}
