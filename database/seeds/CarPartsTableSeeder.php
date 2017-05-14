<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CarPartsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $cars = DB::table('cars')->pluck('id')->all();

        foreach (range(1, 50) as $index) {
            DB::table('car_parts')->insert([
                'model' => $faker->word,
                'number' => $faker->numberBetween(1000, 20000),
                'price' => $faker->randomFloat(null,0,900),
                'car_id' => $faker->randomElement($cars),
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime()
            ]);
        }
    }
}
