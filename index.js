var messages = [
  "A vida trará coisas boas se tiveres paciência.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
];

var index = 0;

function pickOrderedMessage() {
    var message = messages[index++];
    if (index >= messages.length)
        index = 0;

    return message;
}

function pickRandomMessage() {
    var nr = Math.random();
    var msgIndex = parseInt(nr * messages.length);
    return messages[msgIndex];
}

function updateMessage() {
    document
        .querySelector('.letter p')
        .innerHTML = pickRandomMessage();
}

window.onload = function() {
    updateMessage();
}
