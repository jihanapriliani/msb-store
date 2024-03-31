<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserAddress extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'users_id',
        'provinces_id',
        'regencies_id',
        'zipcode',
        'country',
        'address',
        'lat',
        'long',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
