const particleEl = document.querySelector("#js-div")
let particleDivArray = []
let particlesArray = []

function particleSwitch(randomNumber, particle) {
  switch (randomNumber) {
    case 0:
      particle.classList.add("particle-top");
      break
    case 1:
      particle.classList.add("particle-right");
      break
    case 2:
      particle.classList.add("particle-bottom");
      break
    case 3:
      particle.classList.add("particle-left");
      break
    default:
      particle.classList.add("particle-right");
  }
}

function generateParticles(number) {
  // input number is brought in and used as a reference to how many particles to create. This for loop creates the divs
  for (let x = 0; x < number; x++) {
    const makeParticleDiv = document.createElement("div");
    makeParticleDiv.classList.add("particles");
    particleEl.appendChild(makeParticleDiv);
    particleDivArray.push(makeParticleDiv)
  }
  // this for loop creates the particles and assigns the class with a switch for each index in the div array
  for (let x = 0; x < particleDivArray.length; x++) {
    randomNumber = Math.floor(Math.random() * 4)
    const makeParticle = document.createElement("div")
    particlesArray.push(makeParticle)
    particleSwitch(randomNumber, makeParticle)
    const div = particleDivArray[x]
    div.appendChild(makeParticle)
  }
  // this regenerates the particles with new directions after a chosen interval
  setInterval(function() {
    for (let x = 0; x < particleDivArray.length; x++) {
      randomNumber = Math.floor(Math.random() * 4)
      const particle = particlesArray[x]
      particle.className = "";
      particleSwitch(randomNumber, particle)
    }
  }, 100)
}
// this runs once or else the document starts without particles
generateParticles(30)
const particles = document.querySelector("#particles")
// the listener for the range input that reacts on change
particles.addEventListener("input", function() {
  particleDivArray = []
  particlesArray = []
  particleEl.innerHTML = ""
  let number = particles.value
  generateParticles(number)
})
