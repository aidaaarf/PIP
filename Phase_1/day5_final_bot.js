// Definisi Test Class
class LoginPageAutomation {
  // 1. Selector Library (Supaya kalau ID berubah, ganti di sini aja)
  selectors = {
    email: ".input-field", // Sesuaikan dengan ID/Class aslimu
    pass: "#secret-pass",
    btn: "#login-btn-fake",
    success: "#success-msg",
  };

  // 2. Helper: Fungsi nunggu (Polling)
  // Gunakan logika dari Day 4 di sini!
  async waitForSeconds(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  }
  
  async waitForElementVisible(selector, MaxAttempt) {
    let attempts = 0;

    // Loop terus selama attempts masih kurang dari maxAttempts
    while (attempts < MaxAttempt) {
      const element = document.querySelector(selector);

      // Cek: Apakah elemen ada DAN visible (display block)?
      if (element && element.style.display === "block") {
        console.log(`✅ Elemen ditemukan pada percobaan ke-${attempts + 1}`);
        return true; // Keluar dari fungsi, sukses
      }

      console.log(
        `⏳ Percobaan ke-${attempts + 1} gagal. Menunggu sebentar...`,
      );

      // Tunggu 500ms (0.5 detik) sebelum cek lagi
      // Gunakan await waitForSeconds(0.5) di sini
      await this.waitForSeconds(0.5);
      attempts++; // Tambah hitungan percobaan
    }

    throw new Error(
      "❌ Timeout! Elemen tidak muncul setelah " + MaxAttempt + " kali coba.",
    );
    // TODO: Implementasi loop/interval cek elemen di sini
    // Return true kalau ketemu, Throw error kalau timeout
  }

  // 3. Main Scenario
  async run() {
    console.clear();
    console.log("🚀 Memulai Test Skenario: Login Flow");

    try {
      // Step 1: Define Elements
      const emailInput = document.querySelector(this.selectors.email);
      const passInput = document.querySelector(this.selectors.pass);
      const loginBtn = document.querySelector(this.selectors.btn);

      if (!emailInput || !passInput || !loginBtn) {
        throw new Error("Elemen input/tombol tidak ditemukan! Cek selector.");
      }

      // Step 2: User Action
      console.log("👤 Mengisi form...");
      emailInput.value = "superadmin@test.com";
      passInput.value = "password123";

      console.log("🖱️ Klik tombol login...");
      loginBtn.click();

      // Step 3: Wait for Result (The Hard Part)
      // TODO: Panggil fungsi waitForElementVisible mu di sini untuk elemen success message
      await this.waitForElementVisible(this.selectors.success, 10);

      // Step 4: Final Assertion
      const successMsg = document.querySelector(this.selectors.success);
      if (successMsg.innerText.includes("Successful")) {
        console.log(
          "%c ✅ TEST PASSED: Login berhasil! ",
          "background: green; color: white; padding: 5px",
        );
      } else {
        throw new Error("Teks pesan tidak sesuai ekspektasi.");
      }
    } catch (error) {
      console.log(
        "%c ❌ TEST FAILED: " + error.message,
        "background: red; color: white; padding: 5px",
      );
    }
  }
}

// Eksekusi
const bot = new LoginPageAutomation();
bot.run();
