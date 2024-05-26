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
        Schema::table('transactions', function (Blueprint $table) {
            $table->dateTime("processed_at")->nullable()->change();
            $table->dateTime("shipped_at")->nullable()->change();
            $table->dateTime("accepted_at")->nullable()->change();
            $table->dateTime("rejected_at")->nullable()->change();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->date("processed_at")->nullable()->change();
            $table->date("shipped_at")->nullable()->change();
            $table->date("accepted_at")->nullable()->change();
            $table->date("rejected_at")->nullable()->change();
        });
    }

};
