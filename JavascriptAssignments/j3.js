const likeImage=document.querySelector('.like-img');
const btn=document.querySelector('.ibtn');
let cnt=0
btn.addEventListener('click', () => {
    cnt++;
    if(cnt%2==0){
        likeImage.src='like.png';
    }
    else{
        likeImage.src='likeb.png';
    }
});  