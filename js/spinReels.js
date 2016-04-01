
function Spin(){

}

animate();
function animate() {
    requestAnimationFrame(animate);

    reel0.update();
    reel1.update();
    reel2.update();
    reel3.update();
    reel4.update();



    // render
    renderer.render(stage);
}