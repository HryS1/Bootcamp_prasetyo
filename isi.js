// Populate Tanggal
    const tanggalSelect = document.getElementById('tanggal');
    for (let i = 1; i <= 31; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      tanggalSelect.appendChild(option);
    }

    // Populate Bulan
    const bulanSelect = document.getElementById('bulan');
    for (let i = 1; i <= 12; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      bulanSelect.appendChild(option);
    }

    // Populate Tahun
    const tahunSelect = document.getElementById('tahun');
    const currentYear = new Date().getFullYear();
    for (let i = 1900; i <= currentYear; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      tahunSelect.appendChild(option);
    }

    // Button click event
    const cekBtn = document.getElementById('cekBtn');
    const messageDiv = document.getElementById('message');

    cekBtn.addEventListener('click', () => {
      const tanggalVal = tanggalSelect.value;
      const bulanVal = bulanSelect.value;

      if (tanggalVal === '' || bulanVal === '') {
        messageDiv.textContent = 'Mohon diisi terlebih dahulu tanggal dan bulan.';
        messageDiv.className = 'error';
      } else {
        messageDiv.textContent = `Tanggal yang dipilih adalah ${tanggalVal}-${bulanVal}`;
        messageDiv.className = 'success';
      }
    });