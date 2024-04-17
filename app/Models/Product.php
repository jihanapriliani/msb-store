<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'price',
        'stock',
        'unit_weight',
        'slug',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class)->withTrashed();
    }

    public function carts(): BelongsToMany
    {
        return $this->belongsToMany(Cart::class);
    }
    
    public function transaction_details(): HasMany
    {
        return $this->hasMany(TransactionDetail::class);
    }

    public function images(): hasMany
    {
        return $this->hasMany(ProductImage::class);
    }
}



