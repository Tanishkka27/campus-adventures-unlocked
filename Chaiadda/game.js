const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ================== Game Variables ==================
let score = 0, level = 1, targetScore = 100;
let objects = [], particles = [];
let gameOver = false, levelComplete = false, gameStarted = false;
let spawnInterval;

// ================== Classes ==================
class GameObject {
  constructor(type) {
    this.type = type;
    this.x = Math.random() * (canvas.width - 100) + 50;
    this.y = -60;
    this.width = 80;  // bigger elements
    this.height = 80;

    // Faster speed: food 7–11, bomb 8–13 + level scaling
    if (type === 'food') {
      this.speed = 7 + Math.random() * 4 + level * 0.7;
      this.color = 'yellow';
      this.emoji = getRandomFoodEmoji();
    } else {
      this.speed = 8 + Math.random() * 5 + level * 0.8;
      this.color = 'red';
      this.emoji = '💣';
    }
    this.sliced = false;
  }

  update() { if(!gameOver) this.y += this.speed; }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    ctx.fillStyle = 'black';
    ctx.font = '40px Arial'; // bigger emoji
    ctx.textAlign = 'center';
    ctx.fillText(this.emoji, this.x, this.y + 12);
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x; this.y = y;
    this.radius = Math.random() * 5 + 2;
    this.color = color;
    this.speedX = (Math.random() - 0.5) * 6;
    this.speedY = (Math.random() - 0.5) * 6;
    this.alpha = 1;
  }
  update() { this.x += this.speedX; this.y += this.speedY; this.alpha -= 0.03; }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  }
}

// ================== Food Emojis ==================
function getRandomFoodEmoji() {
  const foods = ['🍔','🥟','🍕','🍟'];
  return foods[Math.floor(Math.random() * foods.length)];
}

// ================== Spawn Objects ==================
function spawnObject() {
  if (!gameStarted || gameOver || levelComplete) return;
  const rand = Math.random();
  // Bomb frequency: 35%
  if (rand < 0.35) objects.push(new GameObject('bomb'));
  else objects.push(new GameObject('food'));
}

function startSpawning() {
  clearInterval(spawnInterval);
  const interval = Math.max(200, 500 - level*40); // faster spawn
  spawnInterval = setInterval(spawnObject, interval);
}

// ================== Slice Objects ==================
function sliceObject(x, y) {
  if (!gameStarted || gameOver || levelComplete) return;
  for (let i = objects.length-1; i>=0; i--) {
    const obj = objects[i];
    if (!obj.sliced && x > obj.x-obj.width/2 && x < obj.x+obj.width/2 &&
        y > obj.y-obj.height/2 && y < obj.y+obj.height/2) {
      obj.sliced = true;
      if (obj.type === 'bomb') {
        triggerExplosion(obj.x, obj.y);
        endGame();
      } else {
        score += 5; // 5 points per food
        for (let j=0;j<10;j++) particles.push(new Particle(obj.x,obj.y,'yellow'));
        objects.splice(i,1);
        document.getElementById('ui').innerText = `Score: ${score}`;
        checkLevelCompletion();
      }
    }
  }
}

// ================== Explosion ==================
function triggerExplosion(x, y) {
  for (let i=0;i<50;i++) particles.push(new Particle(x, y, 'red'));
}

// ================== Level Completion ==================
function checkLevelCompletion() {
  if (score >= targetScore && !levelComplete) {
    levelComplete = true;
    document.getElementById('nextLevelBtn').style.display = 'inline-block';
    document.getElementById('levelInfo').innerText = `Level: ${level} | Target: ${targetScore}`;
  }
}

// ================== End Game ==================
function endGame() {
  gameOver = true;
  clearInterval(spawnInterval);
  objects = [];
  showGameOverScreen();
}

// ================== Game Over Screen ==================
function showGameOverScreen() {
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = 'white';
  ctx.font = '60px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Oops! You sliced a bomb!', canvas.width/2, canvas.height/2 - 50);

  document.getElementById('retryBtn').style.display = 'inline-block';
  document.getElementById('backMapBtn').style.display = 'inline-block';
}

// ================== Reset / Retry Game ==================
function resetGame(fullReset=false) {
  if(fullReset) {
    level = 1;
    targetScore = 100;
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('welcomeMsg').style.display = 'block';
    document.getElementById('backMapBtn').style.display = 'inline-block';
  }

  score = 0;
  objects = [];
  particles = [];
  gameOver = false;
  levelComplete = false;
  gameStarted = !fullReset;

  document.getElementById('ui').innerText = `Score: ${score}`;
  document.getElementById('levelInfo').innerText = `Level: ${level} | Target: ${targetScore}`;
  document.getElementById('retryBtn').style.display = 'none';
  document.getElementById('nextLevelBtn').style.display = 'none';

  if(!fullReset) startSpawning();
}

// ================== Buttons ==================
document.getElementById('startBtn').addEventListener('click', () => {
  gameStarted = true;
  document.getElementById('welcomeMsg').style.display = 'none';
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('backMapBtn').style.display = 'none';
  startSpawning();
});

document.getElementById('backMapBtn').addEventListener('click', () => resetGame(true));
document.getElementById('retryBtn').addEventListener('click', () => resetGame(false));
document.getElementById('nextLevelBtn').addEventListener('click', () => {
  level++;
  targetScore += 50;
  resetGame(false);
});

// ================== Background ==================
function drawBackground() {
  const grad = ctx.createLinearGradient(0,0,0,canvas.height);
  grad.addColorStop(0,'#ff9a9e');
  grad.addColorStop(1,'#fad0c4');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

// ================== Game Loop ==================
function gameLoop() {
  drawBackground();

  objects.forEach(obj => { obj.update(); obj.draw(); });
  for (let i = particles.length-1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if(particles[i].alpha <= 0) particles.splice(i,1);
  }

  if(gameOver) showGameOverScreen();

  requestAnimationFrame(gameLoop);
}
gameLoop();

// ================== Controls ==================
canvas.addEventListener('mousemove', e => sliceObject(e.clientX, e.clientY));
canvas.addEventListener('touchmove', e => { 
  e.preventDefault(); 
  sliceObject(e.touches[0].clientX,e.touches[0].clientY); 
}, {passive:false});

// ================== Resize ==================
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
