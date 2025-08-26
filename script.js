function hitungEmisi() {
  let aktivitas = parseFloat(document.getElementById("aktivitas").value);
  let hasilDiv = document.getElementById("hasil");

  if (isNaN(aktivitas) || aktivitas < 0) {
    hasilDiv.innerText = "Masukkan jumlah yang valid.";
    hasilDiv.style.opacity = 1;
    hasilDiv.style.animation = "fadeIn 0.5s ease";
    return;
  }

  let faktorTerendah = 2.9;
  let faktorTertinggi = 6.0;

  let emisiMin = aktivitas * faktorTerendah;
  let emisiMax = aktivitas * faktorTertinggi;

  hasilDiv.innerText = `Emisi Karbon: ${emisiMin.toFixed(2)} - ${emisiMax.toFixed(2)} kg CO₂`;

  hasilDiv.style.opacity = 1;
  hasilDiv.style.animation = "fadeIn 0.5s ease";
}


// efek scroll
window.addEventListener("scroll", () => {
  document.body.classList.add("scrolling");
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(() => {
    document.body.classList.remove("scrolling");
  }, 150);
});
