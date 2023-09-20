const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach((button) => {
    let liked = false;

    button.addEventListener('click', () => {
        liked = !liked;
        if (liked) {
            button.textContent = 'Liked';
            button.style.backgroundColor = '#007bff'; // Change to your desired liked button style
        } else {
            button.textContent = 'Like';
            button.style.backgroundColor = ''; // Remove liked button style
        }
    });
});

const commentButtons = document.querySelectorAll('.comment-button');
commentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Toggle the visibility of the corresponding comment section
        const commentSection = document.querySelectorAll('.comment-section')[index];
        commentSection.style.display = (commentSection.style.display === 'none' || commentSection.style.display === '') ? 'block' : 'none';
    });
});