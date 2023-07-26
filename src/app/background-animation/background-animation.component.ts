import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.css'],
})

export class BackgroundAnimationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  @ViewChild('myCanvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement> = {} as ElementRef<HTMLCanvasElement>;

  canvasSizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  createThreeJsBox(): void {
    if (!this.canvas.nativeElement) {
      return;
    }

    const scene = new THREE.Scene();

    const scale = 1;

    //camera
    const camera = new THREE.PerspectiveCamera(
      75,
      this.canvasSizes.width / this.canvasSizes.height,
      0.001,
      1000
    );
    camera.position.z = 60 * scale;
    camera.position.y = 2 * scale;
    camera.rotation.z = -.15;
    scene.add(camera);
    
    //planetary bodies
    const earthTexture = new THREE.TextureLoader().load('assets/earth_texture_8k.jpg');
    const earthNormal = new THREE.TextureLoader().load('assets/earth_normal_8k.tif');

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(18 * scale, 512 * scale, 512 * scale),
      new THREE.MeshStandardMaterial({
        map: earthTexture,
        normalMap: earthNormal,
        normalScale: new THREE.Vector2(4, 4),
        roughness: .5,
      })
    );

    scene.add(earth);

    scene.background = new THREE.Color(0x000000);

    const starRange = 500 * scale;

    function addStar(color: number) {
      const geometry = new THREE.SphereGeometry(.4 * scale, 24 * scale, 24 * scale);
      const material = new THREE.MeshMatcapMaterial({ color: color });
      const star = new THREE.Mesh(geometry, material);
    
      do {
        star.position.x = THREE.MathUtils.randFloatSpread(starRange);
        star.position.y = THREE.MathUtils.randFloatSpread(starRange);
        star.position.z = THREE.MathUtils.randFloatSpread(starRange);
      } while (star.position.distanceTo(earth.position) < 150 * scale)

      scene.add(star);
    }
    
    for (var i=0; i<600; i++)
    {
      addStar(0xffffff);
    }

    for (var i=0; i<20; i++)
    {
      addStar(0xffff00);
    }


    //lights
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(400,-400,-400);
    sunLight.target = earth;
    scene.add(sunLight);
    scene.add(sunLight.target);

    const ambientLight = new THREE.AmbientLight(0xffffff, .3);
    scene.add(ambientLight);

    //renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas.nativeElement,
    });
    renderer.setClearColor(0xe232222, 1);
    renderer.setSize(this.canvasSizes.width, this.canvasSizes.height);

    window.addEventListener('resize', () => {
      this.canvasSizes.width = window.innerWidth;
      this.canvasSizes.height = window.innerHeight;

      camera.aspect = this.canvasSizes.width / this.canvasSizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(this.canvasSizes.width, this.canvasSizes.height);
      renderer.render(scene, camera);
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const animateGeometry = () => {
      earth.rotation.y += .001;

      // Render cycle
      renderer.render(scene, camera);
      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }
}