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