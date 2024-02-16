const likeImage=document.querySelector('.like-img');
const btn=document.querySelector('.ibtn');
let cnt=0
btn.addEventListener('click', () => {
    cnt++;
    if(cnt%2!=0){
        likeImage.src='likeb.png';
    }
    else{
        likeImage.src='like.png';
    }
});  