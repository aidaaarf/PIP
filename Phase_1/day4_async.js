// ======================================================
// Bagian 1: Demonstrasi "Race Condition"
// Tulis script untuk melihat urutan eksekusi (Synchronous vs Asynchronous).
// ======================================================

// ASYNC
console.log("1. Start Login Process");

// Tugas: Isi setTimeout ini supaya log muncul setelah 2 detik
setTimeout(() => {
  console.log("2. Server Response Received (2 detik kemudian)");
}, 2000);

console.log("3. Checking for Success Message");

// ======================================================
// Bagian 2: Berkenalan dengan Promises
// Buat fungsi waitForSeconds agar kita bisa menghindari "Callback Hell".
// ======================================================

function waitForSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}
await waitForSeconds(3);

// ======================================================
// Bagian 3: Simulasi UI Delay (Mocking)
// Gunakan async/await untuk membuat script berjalan berurutan (tunggu klik selesai, baru cek hasil).
// Kita harus kasih tanda 'async' biar bisa pakai 'await' di dalamnya
// ======================================================

async function mockLoginProcess() {
  const btn = document.querySelector("#login-btn-fake"); 
  const msg = document.querySelector("#success-msg");
  const email_ = "jasdak@jkdhs.csd";
  const pw_ = "rahasia123";

  const email = document.querySelector(".input-field");
  email.value = email_;
  
  const pw = document.querySelector(".input-wrapper #secret-pass");
  pw.value = pw_;

  console.log("Action: Klik tombol...");
  btn.click();

  console.log("Waiting: Menunggu server...");
  await waitForSeconds(4);

  // 3. Verifikasi
  if (msg.style.display === "block") {
    console.log("✅ Test Passed: Pesan muncul.");
  } else {
    console.error("❌ Test Failed: Pesan belum muncul (Race Condition?).");
  }
}

// ======================================================
// Bagian 4: Strategi "Polling" (Advanced - Logic Test)
// Membuat fungsi yang "sabar". Dia akan mengecek berkali-kali sampai elemen muncul atau batas waktu habis. Ini adalah
//  cara kerja asli Playwright expect(locator).toBeVisible().
// ======================================================

async function pollForElement(selector, maxAttempts) {
  let attempts = 0;

  // Loop terus selama attempts masih kurang dari maxAttempts
  while (attempts < maxAttempts) {
    const element = document.querySelector(selector);

    // Cek: Apakah elemen ada DAN visible (display block)?
    if (element && element.style.display === "block") {
      console.log(`✅ Elemen ditemukan pada percobaan ke-${attempts + 1}`);
      return true; // Keluar dari fungsi, sukses
    }

    console.log(`⏳ Percobaan ke-${attempts + 1} gagal. Menunggu sebentar...`);

    // Tunggu 500ms (0.5 detik) sebelum cek lagi
    // Gunakan await waitForSeconds(0.5) di sini
    await waitForSeconds(0.5);
    attempts++; // Tambah hitungan percobaan
  }

  throw new Error(
    "❌ Timeout! Elemen tidak muncul setelah " + maxAttempts + " kali coba.",
  );
}

// Cara test:
mockLoginProcess();
pollForElement("#success-msg", 10);
