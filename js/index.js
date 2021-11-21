//Lightbulb Stuff
let power = true
let lightbulb = document.getElementById("lightbulb")
lightbulb.onclick = function(e) {
    pop(e)
    lightbulb.innerHTML = ""
    power ? power = false : power = true
    console.log(power)
    let bulbImg = document.createElement("img")
    if(power) {
        bulbImg.setAttribute("src","res/light-bulb on.png")
    } else {
        bulbImg.setAttribute("src","res/light-bulb off.png")
    }
    lightbulb.appendChild(bulbImg)
}

//Button Particle Stuff
if (document.body.animate) {
    // If yes, we add a click listener on our button
    document.querySelector('#lightbulb').addEventListener('click', pop);
}

function pop(e) {
    // Loop to generate 30 particles at once
    for (let i = 0; i < 30; i++) {
        // We pass the mouse coordinates to the createParticle() function
        createParticle(lightbulb.offsetLeft + lightbulb.offsetWidth / 2, lightbulb.offsetTop + lightbulb.offsetHeight / 2);
    }
    }
    function createParticle(x, y) {
    // Create a custom particle element
    const particle = document.createElement('particle');
    // Append the element into the body
    document.body.appendChild(particle);
}

function createParticle (x, y) {
    // Create a custom particle element
    const particle = document.createElement('particle');
    // Append the element into the body
    document.body.appendChild(particle);
    // Calculate a random size from 5px to 25px
    const size = Math.floor(Math.random() * 20 + 5);
    // Apply the size on each particle
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // Generate a random color in a blue/purple palette
    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 8 * 75;
    const destinationY = y + (Math.random() - 0.5) * 8 * 75;

    // Store the animation in a variable because we will need it later
    const animation = particle.animate([
        {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(${x - (size / 2)}px, ${y - (size / 2)}px)`,
        opacity: 1
        },
        {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
        }
    ], {
        // Set a random duration from 500 to 1500ms
        duration: 500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        // Delay every particle with a random value from 0ms to 200ms
        delay: Math.random() * 200
    });
    // When the animation is finished, remove the element from the DOM
    animation.onfinish = () => {
        particle.remove();
    };
}