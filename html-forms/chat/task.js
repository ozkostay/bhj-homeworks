const chatWidget = document.querySelector('.chat-widget');
let robotText = ['aaa', 'bbb', 'ccc'];

chatWidget.addEventListener('click', onclickChatWidget);

function onclickChatWidget() {
    chatWidget.classList.add('chat-widget_active');
}

const chatInput = document.getElementById('chat-widget__input');
chatInput.addEventListener('change', onchangeChatInput);

function onchangeChatInput() {
    let time = new Date();
    let message = '\
    <div class="message message_client">\
        <div class="message__time">' + ('0' + time.getHours()).slice(-2) + ':'  + ('0' + time.getMinutes()).slice(-2) + '</div>\
        <div class="message__text">' + chatInput.value + '</div>\
    </div>';
    const elementMessages = document.getElementById('chat-widget__messages');
    elementMessages.innerHTML += message;
    chatInput.value = "";
    
    time = new Date();
    message = '\
    <div class="message">\
        <div class="message__time">' + ('0' + time.getHours()).slice(-2) + ':'  + ('0' + time.getMinutes()).slice(-2) + '</div>\
        <div class="message__text">' + robotText[Math.floor(Math.random ()*3)] + '</div>\
    </div>';
    elementMessages.innerHTML += message;

}