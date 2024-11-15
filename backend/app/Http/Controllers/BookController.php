<?php

namespace App\Http\Controllers;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all(); // Changed get() to all() for better readability

        if ($books->isNotEmpty()) {
            return BookResource::collection($books);
        } else {
            return response()->json(['Message' => 'No record available'], 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'author' => 'required|string',
            'published_year' => 'required|numeric',
            'genre' => 'required|string',
            'description' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 422);
        }

        // Create a new book instance
        $book = new Book(); 
        $book->title = $request->title;
        $book->author = $request->author;
        $book->published_year = $request->published_year;
        $book->genre = $request->genre;
        $book->description = $request->description;
        $book->save();

        return response()->json([
            'message' => 'Book created successfully',
            'data' => new BookResource($book) 
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Book::findOrFail($id);
        return response()->json($book);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       $book = Book::findOrFail($id);
       $book->title = $request->title;
       $book->author = $request->author;
       $book->published_year = $request->published_year;
       $book->genre = $request->genre;
       $book->description = $request->description;
       $book->save();
       return response()->json([

        'message' => 'Product Updated  Successfully',
    ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json([

            'message' => 'Product Deleted  Successfully',
        ], 200);
    }
}