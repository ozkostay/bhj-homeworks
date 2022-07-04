const chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', onclickChatWidget);

function onclickChatWidget() {
    console.log('asd');
    console.log(chatWidget);
    chatWidget.classList.add('chat-widget_active');
}

const chatInput = document.getElementById('chat-widget__input');

chatInput.addEventListener('change', onchangeChatInput);

function onchangeChatInput() {
    const time = new Date();
    

    let message = '\
    <div class="message message_client">\
        <div class="message__time">' + time.getHours().toString() + ':'  + time.getMinutes().toString() + '</div>\
        <div class="message__text">' + chatInput.value + '</div>\
    </div>';
    const elementMessages = document.getElementById('chat-widget__messages');

    elementMessages.innerHTML += message;
    
    console.log(chatInput.value);
}