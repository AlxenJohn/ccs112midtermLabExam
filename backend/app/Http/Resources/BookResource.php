<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
    return parent::toArray($request);
    /*
    return[
        'id'
        'title' => $this->title,
        'author' => $this->author,  
        'published_year' => $this->published_year,
        'price' => $this->price,
        'description' => $this->description,

    ];
    */
    }
}
