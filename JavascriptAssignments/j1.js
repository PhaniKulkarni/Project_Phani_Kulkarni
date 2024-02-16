const likeImage=document.querySelector('.like-img');
const likeDialog=document.querySelector('.like-dialog');
likeImage.addEventListener('mouseover', () => {
    likeDialog.style.display = 'block';
});  