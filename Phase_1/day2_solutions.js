//=================================
//Bagian 1: Perburuan (Selectors)
//=================================
//Select tombol "Sign In" menggunakan ID-nya.
document.getElementById("login-btn-fake");
<button id=​"login-btn-fake" onclick=​"simulateLogin()​">​ Sign In ​</button>​

// Select Input Email menggunakan Class Name-nya.
document.querySelector(".input-field");
// <input type=​"text" class=​"input-field" name=​"user_email" placeholder=​"user@example.com">​

//Select Input Password menggunakan CSS Attribute Selector
document.querySelector('input[placeholder="******"]');
// <input type=​"password" id=​"secret-pass" placeholder=​"******">​

//Select elemen <h2> ("System Login") menggunakan Hirarki (Hubungan Parent > Child), dimulai dari tag body. 
document.querySelector("body > div > h2");
{/* <h2>​System Login​</h2>​ */}

{/* ================================= */}
{/* Bagian 2: Manipulasi (Hacking Sederhana) */}
{/* ================================= */}

{/* Simpan elemen tombol "Sign In" ke dalam variabel: const btn = ... */}
const btn = document.getElementById("login-btn-fake");

{/* Ubah teks tombol tersebut menjadi "HACKED". */}
btn.innerText = "HACKED";
// 'HACKED'

{/* Pilih paragraf di bawah judul (elemen #desc). Ubah teksnya menjadi: "WARNING: Authorized Personnel Only". */}
const desc = document.getElementById("desc");
desc.innerText = "WARNING:Authorized Personnel Only"

{/* Coba set innerHTML dari elemen #desc menjadi '<b>BOLD ALERT</b>'.
 Apa yang terjadi? Apa bedanya sama innerText? */}

desc.innerHTML = "<b>BOLD ALERT</b>";
'<b>BOLD ALERT</b>'

{/* innerHTML akan me render sebagai HTML <b> <i></i> */}
{/* innerText hanya merubah teks */}

{/* ================================= */}
{/* Bagian 3: Operasi Bedah (DOM Injection) */}
{/* ================================= */}

{/* 1. Buat elemen div baru di memori (belum muncul di layar). */}
const div = document.createElement("div");
{/* 2. Set warnanya (style.color) jadi "red" dan tebal font-nya (style.fontWeight) jadi "bold". */}
div.style.color = "red";
div.style.fontWeight = "bold";
{/* 3. Isi teksnya dengan: "Error: Database Connection Failed". */}
div.innerText = "Error: Database Connection Failed";
{/* 4. Tempel (Append) div baru ini ke bagian paling bawah elemen .container supaya muncul di layar. */}
document.querySelector(".container").appendChild(div);

{/* ================================= */}
{/* Bagian 4: Si Hantu (Visibility vs Existence) */}
{/* ================================= */}

{/* 1. Cari elemen dengan ID success-msg (Teks "Login Successful"). */}
const success = document.getElementById("success-msg");
{/* 2. Cek properti innerText-nya di console. (Perhatikan: kamu bisa baca teksnya meskipun tidak terlihat di layar!) */}
console.log(success);
console.log(success.innerText);
// innerText = Login Successfull! Redirecting...
{/* 3. Cek properti style.display-nya. */}
// hidden-message == display : none;
{/* 4. Ubah properti style tersebut lewat console supaya pesannya jadi kelihatan di layar. */}
success.style.display = "block";


