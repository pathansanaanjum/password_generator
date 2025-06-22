document.getElementById('generateBtn').addEventListener('click', async () => {
  const length = parseInt(document.getElementById('length').value);
  const upper = document.getElementById('upper').checked;
  const lower = document.getElementById('lower').checked;
  const number = document.getElementById('number').checked;
  const symbol = document.getElementById('symbol').checked;

  const res = await fetch('http://localhost:3000/generate-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ length, upper, lower, number, symbol })
  });

  const data = await res.json();
  document.getElementById('result').value = data.password;
});