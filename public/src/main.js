import '/assets/css/style.css';
import '/assets/css/cards.css';
import '/assets/css/projects.css';
import '/assets/css/timeline.css';
import * as THREE from 'three';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-5);

renderer.render(scene, camera);

// sun
const sunTexture = new THREE.TextureLoader().load('/assets/img/sun.jpg');
const normalSunTexture = new THREE.TextureLoader().load('/assets/img/normal.jpg');
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(40, 36, 36),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: normalSunTexture,
  })
);

scene.add(sun);

sun.position.z = -100;
sun.position.x = 2;
// Lights

const pointLight = new THREE.PointLight(0xffffed);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

ambientLight.intensity = 0.6
pointLight.intensity = 0.7

function addStar(col) {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: col });

  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}
const arr = [0x00FFFF, 0xFF7F7F, 0x90ee90];


Array(400).fill().forEach(() => addStar(arr[Math.floor(Math.random() * arr.length)]));

// Background
const backgrounds = [
  '/assets/img/star.jpg',
  '/assets/img/nebula.jpg',
  '/assets/img/sp1.jpg',
  '/assets/img/space.jpg'
];
const spaceTexture = new THREE.TextureLoader().load(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
scene.background = spaceTexture;

// Avatar

const meTexture = new THREE.TextureLoader().load('/assets/img/me.jpg');

const me = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 3), new THREE.MeshBasicMaterial({ map: meTexture }));

scene.add(me);

me.position.z = -5;
me.position.x = 2;

// Moon

const moonTexture = new THREE.TextureLoader().load('/assets/img/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('/assets/img/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-40);

// EARTH

const earthTexture = new THREE.TextureLoader().load('/assets/img/Earth2kTexture.png');
const normalEarthTexture = new THREE.TextureLoader().load('/assets/img/Earth2kNormal.png');

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: normalEarthTexture,
  })
);

scene.add(earth);

earth.position.z = 50;
earth.position.setX(-40);

// Pivot point
const pivotPoint = new THREE.Object3D();
earth.add(pivotPoint);
pivotPoint.add(moon);

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  earth.rotation.y += 0.01;

  me.rotation.y += 0.005;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  sun.rotation.y += 0.005;
  earth.rotation.y += 0.005;
  //Moon orbiting
  pivotPoint.rotation.y += 0.0001;
  renderer.render(scene, camera);
}

animate();