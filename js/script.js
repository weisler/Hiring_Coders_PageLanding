const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let produto = document.getElementById('produto').value
    let lance = document.getElementById('lance').value;
    let data = {
        produto,
        lance,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead',convertData);

    let content = document.getElementById('content');
    
    content.innerHTML = '<p>Gravando Lance...</p>'+'<p> Produto: '+produto+'</p>'+'<p> Lance...: '+lance;

    setTimeout(() => {
        content.innerHTML = '<p>Lance Incluido.</p>';
    },3000)
})