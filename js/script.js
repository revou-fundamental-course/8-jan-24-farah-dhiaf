// Fungsi untuk menampilkan section yang dipilih dan mengubah warna tombol yang aktif
function showSection(section) {
    // Menyembunyikan semua section
    document.getElementById('square').style.display = 'none';
    document.getElementById('rectangle').style.display = 'none';

    // Menghapus kelas 'active' dari semua tombol
    document.getElementById('btn-square').classList.remove('active');
    document.getElementById('btn-rectangle').classList.remove('active');

    // Menampilkan section yang dipilih
    document.getElementById(section).style.display = 'block';

    // Menambahkan kelas 'active' pada tombol yang dipilih
    document.getElementById('btn-' + section).classList.add('active');
}

function showSection2(section) {
    // Menyembunyikan semua section
    document.getElementById('square-area').style.display = 'none';
    document.getElementById('square-perimeter').style.display = 'none';
    document.getElementById('rectangle-area').style.display = 'none';
    document.getElementById('rectangle-perimeter').style.display = 'none';

    // Menghapus kelas 'active' dari semua tombol
    document.getElementById('btn-square-area').classList.remove('active');
    document.getElementById('btn-square-perimeter').classList.remove('active');
    document.getElementById('btn-rectangle-area').classList.remove('active');
    document.getElementById('btn-rectangle-perimeter').classList.remove('active');

    // Menampilkan section yang dipilih
    document.getElementById(section).style.display = 'block';

    // Menambahkan kelas 'active' pada tombol yang dipilih
    document.getElementById('btn-' + section).classList.add('active');

    var form = document.querySelector('#' + section + ' form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Ambil nilai input dari formulir
        var side = parseFloat(document.getElementById('side').value);
        var length = parseFloat(document.getElementById('length').value);
        var width = parseFloat(document.getElementById('width').value);

        // Lakukan perhitungan sesuai dengan rumus masing-masing
        var result;
        var formula;
        var calculation;

        switch (section) {
            case 'square-area':
                result = side * side;
                calculation = 'Luas = ' + side + ' × ' + side + ' = ';
                formula = 'Luas = sisi × sisi';
                break;
            case 'square-perimeter':
                result = 4 * side;
                calculation = 'Keliling = 4 × ' + side + ' = ';
                formula = 'Keliling = 4 × sisi';
                break;
            case 'rectangle-area':
                result = length * width;
                calculation = 'Luas = ' + length + ' × ' + width + ' = ';
                formula = 'Luas = panjang × lebar';
                break;
            case 'rectangle-perimeter':
                result = 2 * (length + width);
                calculation = 'Keliling = ' + 2 + ' × (' + length + ' + ' + width + ') = ';
                formula = 'Keliling = 2 × (panjang + lebar)';
                break;
        }

        // Menampilkan hasil dan rumus
        var resultElement = document.getElementById('result-' + section);
        resultElement.innerHTML = '<p>' + formula + '</p><p>' + calculation +  result + '</p>';
    });

}

function resetForm(section) {
    // Reset formulir dengan mengatur nilai-nilai input menjadi default
    var form = document.querySelector('#' + section + ' form');
    form.reset();

    // Sembunyikan hasil perhitungan dan rumus
    var resultElement = document.getElementById('result-' + section);
    resultElement.innerHTML = '';
}
