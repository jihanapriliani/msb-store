<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>


<body style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; color: rgb(82, 82, 82); font-weight: 500; font-size: 1rem; font-family: sans-serif;">

    <div style="max-width: 500px; padding: 2rem; border: 1px solid rgb(206, 201, 201); border-radius: 2%; " >

      <div style="padding: 1rem 2rem; color: black; font-weight: bold; text-align: center; display: flex; justify-content: center; align-items: center; font-size: 2rem;">
        MSB-STORE
      </div>
    
      <h5 style="font-weight: bold; font-size: 1rem"> Hai {{ $transaction->user->fullname }},</h5>

      <h6 ></h6>
      <p > Pesanan
        <span style="color: rgb(218, 30, 30); font-weight: 700;">
          {{ $transaction->code }}
        </span>
         telah dikirim!</p>

      <a href="{{ env("APP_MAIN_URL") . "/user-transaction/" . $transaction->code }}" target="_blank" style="display: block; padding: 0.7rem 1rem; background: rgb(201, 36, 36); color: white; margin: 2rem auto; text-align: center; border: 1px solid rgb(201, 36, 36);  border-radius: 5%; max-width: 150px; text-decoration: none;">
        Lihat Pesanan
      </a>
      
      <p >
        Mohon menerima dan mengkonfirmasi pesanan di aplikasi MSB-Store dalam waktu 3 hari setelah diterima. Setelah dikonfirmasi, pembayaran akan dilepas ke MSB-Store. Jika tidak ada konfirmasi dalam waktu yang telah ditentukan, pesanan dianggap diterima dalam kondisi baik.
      </p>

      <hr style="width: 100%; background: rgb(221, 221, 221); margin: 2rem 0;" />
      
      <p style="font-weight: 600;">
       Bagaimana jika barang yang saya terima rusak atau salah?
      </p>

      <p style="font-size: 0.8rem; margin-top: -0.5rem;">
        Kamu bisa meminta pengajuan pengembalian dengan menghubungi kontak admin yang ada pada setiap transaksi dengan menyertakan bukti berupa video unboxing saat membuka paket  dalam waktu 3 hari setelah kamu menerima email ini. Harap diketahui bahwa pengembalian barang/dana tidak bisa dilakukan jika pembayaran telah dilepas ke MSB-Store.

      </p>

    </div>

</body>
</html>