function updateBalance() {
    // Make a request to the server to get user's balance
    fetch('/get_balance')
        .then(response => response.json())
        .then(data => {
            document.getElementById('balance').textContent = data.balance;
        });
}

function sendTransaction() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    // Make a POST request to the server to send coins
    fetch('/send_transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipient: recipient, amount: amount })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        updateBalance();
    });
}

// Call updateBalance when the page loads
updateBalance();

//Маршрут для получения баланса пользователя
//@app.route('/get_balance', methods=['GET'])
//def get_balance():
//     # Здесь должна быть логика получения баланса пользователя из блокчейна
//     # Возвратим для примера статический баланс 100
//     return jsonify({'balance': 100})
// Маршрут для отправки транзакции
// @app.route('/send_transaction', methods=['POST'])
// def send_transaction():
//     data = request.get_json()
//     recipient = data['recipient']
//     amount = data['amount']
//     # Здесь должна быть логика отправки транзакции в блокчейн
//     # Добавим транзакцию в текущий блок
//     blockchain.new_transaction(sender="current_user", recipient=recipient, amount=amount)
//     # Возвращаем сообщение об успешной транзакции
//    return jsonify({'message': 'Transaction sent successfully'})
