<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(OwnersTableSeeder::class);
        $this->call(CarsTableSeeder::class);
        $this->call(CarPartsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
