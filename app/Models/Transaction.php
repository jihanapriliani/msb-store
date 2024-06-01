<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'user_address_id',
        'total_weight',
        'total_price',
        'shipping_cost',
        'delivery_code',
        'code',
        'status',
        'processed_at',
        'shipped_at',
        'accepted_at',
        'canceled_at',
        'payment_url',
        'address',
        'note'
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class)->withTrashed();
    }

    public function transaction_details(): HasMany
    {
        return $this->hasMany(TransactionDetail::class);
    }

    public function user_address(): BelongsTo
    {
        return $this->belongsTo(UserAddress::class);
    }

}
