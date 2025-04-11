function abrirBurger() {
    const burger = document.querySelector('.janelaDepartamento')
    console.log(burger);
    
    
    burger.classList.add('abrir')

    burger.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelaDepartamento')
            burger.classList.remove('abrir')
    })
};