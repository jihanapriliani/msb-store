<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->constrained('users');
            $table->bigInteger('user_address_id')->constrained('user_addresses');
            $table->float('total_weight');
            $table->integer("shipping_cost");
            $table->string("delivery_code");
            $table->string('code');
            $table->date("processed_at");
            $table->date("shipped_at");
            $table->date("accepted_at");
            $table->date("rejected_at");
            $table->enum('status', ['unpaid', 'processed', 'shipped', 'accepted', 'rejected', 'canceled'])->default('unpaid');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
