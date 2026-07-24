const cube = document.getElementById("cube");

let rotation = 0;
let last = performance.now();

function animate(now) {

    const delta = now - last;
    last = now;

    rotation += delta * 0.0018;

    cube.style.transform = `
        translate(-50%, -50%)
        rotateX(-10deg)
        rotateY(${rotation}deg)
        scale(1.38)
    `;

    requestAnimationFrame(animate);

}

requestAnimationFrame(animate);
