let texto;
function ondeEstaOMouse(event) {
    if (event.pageX <= 100 || event.pageY <= 50) {
        alert("saiu");
        console.log(`Eixo x: ${event.pageX} e Eixo Y: ${event.pageY}`);

    };
    
    
}



onmousemove = ondeEstaOMouse;

