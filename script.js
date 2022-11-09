const getUsaFlag = document.getElementById('usa-flag');
const getBrFlag = document.getElementById('br-flag');

const leftContainerEnglish = `<h2 id="name">Icaro Feitosa Dolzane</h2>
<h2>Studying</h2>
<p>Web Development Full Stack</p>
<h2>Degree</h2>
<p>Business Bachelor's Degree at Universidade Estácio de Sá.</p>
<h2>Contact Info</h2>
<p>Email: icaro.coder@gmail.com</p>
  <p>Github: github.com/icarodolzane</p>
  <p>LinkedIn: icaro-feitosa-dolzane</p>`;

const rightContainerEnglish = `    <section id="about" class="right-container">
  <h2>Sobre mim:</h2>
  <p>
    Hi everyone, I have business degree, worked with foreign trade and international logistics and at the moment I'm seeking for carreer transition to the web development. In order to accomplish my goal I'm studying web development at Trybe. 
  </p>
</section>
<section id="skills" class="right-container">
  <div class="skill">
    <h2>Hard Skills</h2>
    <ul>
      <li class="skill-list">HTML</li>
      <li class="skill-list">CSS</li>
      <li class="skill-list">Javascript</li>
       <li class="skill-list">Git / Github</li>
    </ul>
  </div>
  <div class="skill">
    <h2>Soft Skills</h2>
    <ul>
      <li class="skill-list">Team Work</li>
      <li class="skill-list">Resilience</li>
      <li class="skill-list">Communication</li>
       <li class="skill-list">Interpersonal Relationship</li>
    </ul>
  </div>
  <div class="skill">
    <h2>Languages:</h2>
    <ul>
      <li class="skill-list">English Upper intermediate B2 (CEFR).</li>
      <img src="./images/cambridge.png" alt="cambridge-certificate">
    </ul>
  </div>
</section>
<section id="projects">
  <div> <h2>Check my projects...</h2></div>
</section>`;

const getLeftDiv = document.getElementById('personal-info');
const getRightDiv = document.getElementById('right-container');

const translateText = (element) =>{
  const flagId = element.target; 
  if(flagId.id === 'usa-flag'){
    getLeftDiv.innerHTML = leftContainerEnglish;
    getRightDiv.innerHTML = rightContainerEnglish;    
  }
  if(flagId.id === 'br-flag'){
    window.location.reload(true);
  }
}

getUsaFlag.addEventListener('click', translateText);
getBrFlag.addEventListener('click', translateText);