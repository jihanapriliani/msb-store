<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'user_address_id',
        'total_weight',
        'shipping_cost',
        'delivery_code',
        'code',
        'status'
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function transaction_details(): HasMany
    {
        return $this->hasMany(TransactionDetails::class);
    }

    public function user_address(): BelongsTo
    {
        return $this->belongsTo(UserAddress::class);
    }

}
