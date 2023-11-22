document.getElementById('formBarang').addEventListener('submit', function (e) {
  e.preventDefault();

  var nama = document.getElementById('nama').value;
  var jumlah = document.getElementById('jumlah').value;
  var harga = document.getElementById('harga').value;

  if (nama && jumlah && harga) {
    // Tambahkan barang ke daftar
    var row = document.getElementById('daftarBarang').insertRow();
    row.insertCell(0).innerText = nama;
    row.insertCell(1).innerText = jumlah;
    row.insertCell(2).innerText = harga;
    row.insertCell(3).innerHTML = `
    <button onclick="editRow(this)">Edit</button> 
    <button onclick="deleteRow(this)">Delete</button>`;

    // Reset formulir
    document.getElementById('nama').value = '';
    document.getElementById('jumlah').value = '';
    document.getElementById('harga').value = '';
  }
});

function editRow(button) {
  var row = button.parentNode.parentNode;
  var nama = row.cells[0].innerText;
  var jumlah = row.cells[1].innerText;
  var harga = row.cells[2].innerText;

  document.getElementById('nama').value = nama;
  document.getElementById('jumlah').value = jumlah;
  document.getElementById('harga').value = harga;

  row.remove();
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.remove();
}

