// ===========================================
// Bagian 1: Wayang Kulit (Programmatic Trigger)
// ===========================================
const email_ = "jasdak@jkdhs.csd";
const pw_ = "rahasia123";
// 1. Select input Email, isi value-nya dengan string: "admin@test.com".
const email = document.querySelector(".input-field");
email.value = email_;
// 2. Select input Password, isi value-nya dengan: "rahasia123".
const pw = document.querySelector(".input-wrapper #secret-pass");
pw.value = pw_;
// 3. Select tombol "Sign In", lalu panggil method .click() padanya.
const btn = document.getElementById("login-btn-fake");
btn.click();
// 4.Observasi: Perhatikan apa yang terjadi di layar. Muncul loading? Berapa lama sampai sukses?
// RESULT:
// muncul loading dengan text "Verifying Credential..."
// "Login Successfull! Redirecting!"
// SERVER RESPONSE: 200 OK

// ===========================================
// Bagian 2:Mata-mata (Event Listeners)
// ===========================================

// 1. Refresh halaman.
// 2. Klik tombolnya secara manual (pakai mouse). Cek console, pastikan pesanmu muncul.
btn.addEventListener("click", function (e) {
  console.log("Tombol ditekan! Memulai proses login...");
});
// 3. Bisakah kamu membatalkan login? Pasang listener yang melakukan event.preventDefault() atau event.stopPropagation() (Cari tahu bedanya). Note: Ini mungkin tidak jalan di tombol ini karena function login-nya inline di HTML, tapi coba jelaskan kenapa.
btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Login Default Mati!!");
});

// 1. Isi Email & Password.
email.value = email_;
pw.value = pw_;
// 2.Klik tombol Login.
btn.click();
// 3. LANGSUNG (di baris berikutnya) cek apakah pesan sukses (#success-msg) sudah terlihat (display: block).
const success = document.querySelector("#success-msg");
console.log(
  success.style.display === "block" ? "Login Berhasil" : "Login Gagal",
);
if (success.style.display === "block") {
  console.log("Login Berhasil");
} else {
  console.log("Login Gagal");
}

// 4. Console log hasilnya: "Login Berhasil" atau "Login Gagal".
// VM2769:46 Login Gagal
// Pertanyaan: Kenapa hasilnya "Login Gagal" padahal inputnya benar? (Lihat kode HTML bagian setTimeout).

// 1. Mengisi form dan klik tombol.
email.value = email_;
pw.value = pw_;
btn.click();
// 2. Menggunakan setTimeout milik JavaScript untuk menunggu selama 3 detik.
// 3. Setelah menunggu, baru cek apakah pesan sukses muncul.
// 4. Print: "Test Passed: User logged in" atau "Test Failed".
setTimeout(() => {
  if (success.style.display === "block") {
    console.log("Test Passed: User logged in");
  } else {
    console.log("Test Failed");
  }
}, 3000);

// Di Playwright, fitur apa yang menangani masalah "tunggu" ini secara otomatis?

await page.click('#login-btn');
await expect(page.locator('#success-msg')).toBeVisible();
