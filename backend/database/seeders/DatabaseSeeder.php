<?php

namespace Database\Seeders;

use App\Models\Book; // Change to singular form if your model is named Book
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Book::table('Book')->insert([
            'title' => 'Test User', 
            'author' => 'Alxen',
            'published_year' => '1999',
            'genre' => 'fantasy',
            'description' => 'This is a test book',
        ]);
    }
}