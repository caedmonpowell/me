const cube = document.getElementById("cube");

let rotation = 0;


function animate(){

    rotation += 0.01;


    cube.style.transform = `

        translate(-50%, -50%)

        rotateX(-10deg)

        rotateY(${rotation}deg)

    `;


    requestAnimationFrame(animate);

}


animate();
