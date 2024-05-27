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
        telah dibatalkan. Jika Anda memiliki pertanyaan atau memerlukan informasi lebih lanjut mengenai alasan pembatalan, silakan hubungi admin kami melalui tautan di bawah ini.</p>

      <a href="https://wa.me/6281770616509" target="_blank" style="display: block; padding: 0.7rem 1rem; background: rgb(201, 36, 36); color: white; margin: 2rem auto; text-align: center; border: 1px solid rgb(201, 36, 36);  border-radius: 5%; max-width: 150px; text-decoration: none;">
        Hubungi Admin
      </a>
      
      <p>
        Terima kasih telah berbelanja di MSB-Store. Kami berharap dapat melayani Anda kembali di masa mendatang. Jika ada hal lain yang dapat kami bantu, jangan ragu untuk menghubungi kami.
      </p>

  
    </div>

</body>
</html>