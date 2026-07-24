const cube = document.getElementById("cube");

let rotation = 0;


function animate(){

rotation += 0.02;


cube.style.transform = `

translate(-50%, -50%)

rotateY(${rotation}deg)

rotateX(-5deg)

`;

requestAnimationFrame(animate);

}


animate();
