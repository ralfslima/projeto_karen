document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('status').textContent = data.mensagem;
            document.getElementById('status').style.color = 'green';
        } else {
            document.getElementById('status').textContent = data.error || data.mensagem;
            document.getElementById('status').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('status').textContent = 'Erro ao realizar a requisição.';
        document.getElementById('status').style.color = 'red';
    }
});
