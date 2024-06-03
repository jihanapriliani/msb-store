<table style="border-collapse: collapse; width: 100%;">
    <thead>
        <tr>
            <th colspan="12" style="text-align: center; font-weight: bold; font-size: 18px; border: 1px solid black;">
                LAPORAN TRANSAKSI MSBStore</th>
        </tr>
    </thead>
    @foreach ($transactions as $transaction)
        <tr>
            <td colspan="12" style="border: 1px solid black;"></td>
        </tr>
        <tr>
            <td colspan="12" style="text-align: center; font-weight: bold; font-size: 16px; border: 1px solid black;">
                TRANSAKSI {{ $transaction->id }}</td>
        </tr>
        <thead>
            <tr>
                <th style="border: 1px solid black; border-right: none; width: 55%;">Tanggal</th>
                <th style="border-top: 1px solid black; border-bottom: 1px solid black; width: 15%;">:</th>
                <th style="font-weight: bold; border: 1px solid black; border-left: none; width: 95%;">{{ $transaction->created_at }}</th>
                <th style="border: 1px solid black; border-right: none;">Kode Transaksi</th>
                <th style="border-top: 1px solid black; border-bottom: 1px solid black; width: 15%;">:</th>
                <th style="font-weight: bold; border: 1px solid black; border-left: none; width: 95%;">{{ $transaction->code }}</th>
                <th style="border: 1px solid black; border-right: none;">Status</th>
                <th style="border-top: 1px solid black; border-bottom: 1px solid black; width: 15%;">:</th>
                <th style="font-weight: bold; border: 1px solid black; border-left: none; width: 95%;">{{ $transaction->status }}
                    ({{ $transaction->updated_at }})</th>
                <th style="border: 1px solid black; border-right: none;">Kode Pengiriman</th>
                <th style="border-top: 1px solid black; border-bottom: 1px solid black; width: 15%;">:</th>
                <th style="font-weight: bold; border: 1px solid black; border-left: none; width: 95%;">{{ $transaction->delivery_code }}</th>
            </tr>
            <tr>
                <th style="border: 1px solid black; border-right: none;">Pembeli</th>
                <th style="border-top: 1px solid black; border-bottom: 1px solid black; width: 15%;">:</th>
                <th colspan="4" style="font-weight: bold; border: 1px solid black; border-left: none; width: 95%;">
                    {{ $transaction->user->fullname }}</th>
                <th style="border: 1px solid black; border-right: none;">Email</th>
                <th style="border-top: 1px solid black; border-bottom: 1px solid black; width: 15%;">:</th>
                <th colspan="4" style="font-weight: bold; border: 1px solid black; border-left: none; width: 95%;">{{ $transaction->user->email }}
                </th>
            </tr>
            <tr>
                <th style="font-weight: bold; font-size: 14px; text-align: center; border: 1px solid black;"
                    colspan="12">Detail Transaksi</th>
            </tr>
            <tr>
                <th style="font-weight: bold; border: 1px solid black;">No</th>
                <th style="font-weight: bold; border: 1px solid black;" colspan="5">Nama Produk</th>
                <th style="font-weight: bold; border: 1px solid black;">Berat (Kg)</th>
                <th style="font-weight: bold; border: 1px solid black;" colspan="2">Harga</th>
                <th style="font-weight: bold; border: 1px solid black;">Jumlah</th>
                <th style="font-weight: bold; border: 1px solid black;" colspan="2">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($transaction->transaction_details as $key => $transaction_detail)
                <tr>
                    <td style="border: 1px solid black;">{{ $key + 1 }}</td>
                    <td colspan="5" style="border: 1px solid black;">{{ $transaction_detail->product->name }}</td>
                    <td style="border: 1px solid black;">{{ $transaction_detail->product->unit_weight }}</td>
                    <td colspan="2" style="border: 1px solid black;">Rp.
                        {{ number_format($transaction_detail->actual_price, 0, ',', '.') }}</td>
                    <td style="border: 1px solid black;">{{ $transaction_detail->amount }}</td>
                    <td colspan="2" style="border: 1px solid black;">Rp.
                        {{ number_format($transaction_detail->actual_price * $transaction_detail->amount, 0, ',', '.') }}
                    </td>
                </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <td style="font-weight: bold; border: 2px solid black;" colspan="10">Subtotal Produk</td>
                <td style="font-weight: bold; border: 2px solid black;" colspan="2">Rp.
                    {{ number_format($transaction->total_price, 0, ',', '.') }}</td>
            </tr>
            <tr>
                <td style="border: 2px solid black;" colspan="10">Ongkos Kirim</td>
                <td style="border: 2px solid black;" colspan="2">Rp.
                    {{ number_format($transaction->shipping_cost, 0, ',', '.') }}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; border: 2px solid black;" colspan="10">Total</td>
                <td style="font-weight: bold; border: 2px solid black;" colspan="2">Rp.
                    {{ number_format($transaction->total_price + $transaction->shipping_cost, 0, ',', '.') }}</td>
            </tr>
        </tfoot>
    @endforeach
</table>
