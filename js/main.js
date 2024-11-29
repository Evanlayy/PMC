document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateMemeIdea(input) {
        // This is where you'd typically connect to an AI API
        // For now, we'll use some basic response logic
        const responses = [
            `Based on your interests in ${input}, how about a memecoin called "${input.split(' ')[0]}Coin" with a focus on community engagement?`,
            `I suggest creating a memecoin that combines ${input} with popular crypto culture. We could call it "Meme${input.split(' ')[0]}"!`,
            `Looking at ${input}, we could create a unique tokenomics system based on meme sharing and community voting.`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    sendButton.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            const response = generateMemeIdea(message);
            setTimeout(() => addMessage(response), 1000);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendButton.click();
        }
    });
});
