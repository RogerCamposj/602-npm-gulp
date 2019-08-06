let texto;
function ondeEstaOMouse(event) {
    console.log(`Eixo x: ${event.pageX} e Eixo Y: ${event.pageY}`);
    alert("Não saia ainda! compre meus produtos!!")
    
}

window.onmouseout = ondeEstaOMouse;


