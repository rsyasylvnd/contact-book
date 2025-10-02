// script.js

function tambahKontak(nama, nomor) {
  // ambil tabel
  const tabel = document.querySelector("table");

  // buat baris baru
  const row = tabel.insertRow();

  // buat cell untuk nama
  const cellNama = row.insertCell(0);
  cellNama.textContent = nama;

  // buat cell untuk nomor
  const cellNomor = row.insertCell(1);
  cellNomor.textContent = nomor;
}

// ambil form
const form = document.getElementById("formKontak");

// event submit form
form.addEventListener("submit", function(event) {
  event.preventDefault(); // biar nggak reload

  // ambil nilai input
  const nama = document.getElementById("nama").value;
  const nomor = document.getElementById("nomor").value;

  // panggil fungsi tambah kontak
  tambahKontak(nama, nomor);

  // reset input
  form.reset();
});