const cube = document.getElementById("cube");

let rotation = 0;


function animate(){

    rotation += 0.002;


    cube.style.transform = `

        translate(-50%, -50%)

        rotateY(${rotation}rad)

    `;


    requestAnimationFrame(animate);

}


animate();
