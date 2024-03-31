<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable =[
        'display_name',
        'icon',
        'slug'
    ];

 
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
