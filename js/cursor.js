document.addEventListener('mousemove', (e) => {
  if (Math.random() < 0.3) { // No en cada movimiento, para no saturar
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 800);
  }

});

