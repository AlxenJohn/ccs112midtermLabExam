<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book; // Import your model
use Illuminate\Support\Str;
use  Illuminate\Support\Facades\DB;

class SampleDataSeeder extends Seeder
{
    public function run()
    {

        for($i=0; $i <  10; $i++){
            DB::table('books')->insert([
                'title' => Str::random(10),
                'author' => Str::random(10),
                'published_year' => rand(1900, 2023), 
                'genre' => Str::random(10),
                'description' => Str::random(30), 
            ]);

        }
     
    }
}