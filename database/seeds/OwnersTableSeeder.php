<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class OwnersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1, 10) as $index) {
            DB::table('owners')->insert([
                'email' => $faker->email,
                'phone' =>  '+'.$faker->regexify('[0-9]{2} [0-9]{9}'),
                'name' => $faker->firstName,
                'surname' => $faker->lastName,
                'newsletter' => $faker->boolean(),
                'sex' => $faker->boolean(),
                'created_at'=>$faker->dateTime(),
                'updated_at'=>$faker->dateTime()
            ]);
        }
    }
}
