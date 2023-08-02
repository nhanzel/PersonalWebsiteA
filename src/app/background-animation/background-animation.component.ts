import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { GlobalService } from '../global';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.css'],
})

export class BackgroundAnimationComponent implements OnInit {
  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.createThreeJsBox();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        //? I don't know if this will retrigger the animation for one frame if they click on a page they are already on
        this.globalService.setIsAnimating(true);
        if (event.url === '/') {
          this.moveToHome(this.camera.position.x, this.camera.position.y, this.camera.position.z, this.camera.rotation.z);
        } else if (event.url === "/projects") {
          this.moveToProjects(this.camera.position.x, this.camera.position.y, this.camera.position.z, this.camera.rotation.z);
        } else if (event.url === "/about") {
          this.moveToAbout(this.camera.position.x, this.camera.position.y, this.camera.position.z, this.camera.rotation.z);
        } else if (event.url === "/blog") {
          this.moveToBlog(this.camera.position.x, this.camera.position.y, this.camera.position.z, this.camera.rotation.z);
        } else if (event.url === "/explore") {
          this.moveToExplore(this.camera.position.x, this.camera.position.y, this.camera.position.z, this.camera.rotation.z);
        }
      } else if (event instanceof NavigationEnd) {
        this.canvas.nativeElement.style.display = 'block';
      }
    });
  }

  @ViewChild('myCanvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement> = {} as ElementRef<HTMLCanvasElement>;

  canvasSizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  private scale: number = 1;
  private incrementSteps: number = 45;

  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;

  createThreeJsBox(): void {
    if (!this.canvas.nativeElement) {
      return;
    }

    this.scene = new THREE.Scene()

    //renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas.nativeElement,
    });
    this.renderer.setClearColor(0xe232222, 1);
    this.renderer.setSize(this.canvasSizes.width, this.canvasSizes.height);

    //camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvasSizes.width / this.canvasSizes.height,
      0.001,
      1000
    );
    //const controls = new OrbitControls(camera, renderer.domElement);
    this.camera.position.x = -30;
    this.camera.position.y = 4 * this.scale;
    this.camera.position.z = 60 * this.scale;
    this.camera.rotation.z = -.15;
    this.scene.add(this.camera);
    
    //planetary bodies
    const earthTexture = new THREE.TextureLoader().load('assets/earth_texture_8k.jpg');
    const earthNormal = new THREE.TextureLoader().load('assets/earth_normal_8k.tif');

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(18 * this.scale, 512 * this.scale, 512 * this.scale),
      new THREE.MeshStandardMaterial({
        map: earthTexture,
        normalMap: earthNormal,
        normalScale: new THREE.Vector2(4, 4),
        roughness: .5,
      })
    );

    this.scene.add(earth);

    this.scene.background = new THREE.Color(0x000000);

    const starRange = 500 * this.scale;
    
    for (var i=0; i<600; i++)
    {
      this.scene.add(this.makeStar(0xffffff, earth, starRange));
    }

    for (var i=0; i<20; i++)
    {
      this.scene.add(this.makeStar(0xffff00, earth, starRange));
    }


    //lights
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(400,-400,-400);
    sunLight.target = earth;
    this.scene.add(sunLight);
    this.scene.add(sunLight.target);

    const ambientLight = new THREE.AmbientLight(0xffffff, .3);
    this.scene.add(ambientLight);

    window.addEventListener('resize', () => {
      this.canvasSizes.width = window.innerWidth;
      this.canvasSizes.height = window.innerHeight;

      this.camera.aspect = this.canvasSizes.width / this.canvasSizes.height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(this.canvasSizes.width, this.canvasSizes.height);
      this.renderer.render(this.scene, this.camera);
    });

    const animateGeometry = () => {
      earth.rotation.y += .001;

      // Render cycle
      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }

  makeStar(color: number, earth: THREE.Mesh, starRange: number) {
    const geometry = new THREE.SphereGeometry(.4 * this.scale, 24 * this.scale, 24 * this.scale);
    const material = new THREE.MeshMatcapMaterial({ color: color });
    const star = new THREE.Mesh(geometry, material);
  
    do {
      star.position.x = THREE.MathUtils.randFloatSpread(starRange);
      star.position.y = THREE.MathUtils.randFloatSpread(starRange);
      star.position.z = THREE.MathUtils.randFloatSpread(starRange);
    } while (star.position.distanceTo(earth.position) < 150 * this.scale)

    return star;
  }

  moveToHome(x: number, y: number, z: number, zR: number) {
    //-20, 4, 60, -.15
    const animateCamera = () => {
      this.camera.position.x = this.shift(x, this.camera.position.x, -30, Math.abs(x + 30) / this.incrementSteps);
      this.camera.position.y = this.shift(y, this.camera.position.y, 4, Math.abs(y - 4) / this.incrementSteps);
      this.camera.position.z = this.shift(z, this.camera.position.z, 60, Math.abs(z - 60) / this.incrementSteps);
      this.camera.rotation.z = this.shift(zR, this.camera.rotation.z, -.15, Math.abs(zR + .15) / this.incrementSteps);
      this.renderer.render(this.scene, this.camera);
      if (this.camera.position.x != -30 ||
          this.camera.position.y != 4 ||
          this.camera.position.z != 60 ||
          Math.abs(this.camera.rotation.z - -.15) > .0001) {
        window.requestAnimationFrame(animateCamera);
      } else {
        this.globalService.setIsAnimating(false);
      }
    }

    animateCamera();
  }

  moveToProjects(x: number, y: number, z: number, zR: number) {
    //20, -2, 20, 0
    const animateCamera = () => {
      this.camera.position.x = this.shift(x, this.camera.position.x, 20, Math.abs(x - 20) / this.incrementSteps);
      this.camera.position.y = this.shift(y, this.camera.position.y, -2, Math.abs(y + 2) / this.incrementSteps);
      this.camera.position.z = this.shift(z, this.camera.position.z, 20, Math.abs(z - 20) / this.incrementSteps);
      this.camera.rotation.z = this.shift(zR, this.camera.rotation.z, 0, Math.abs(zR) / this.incrementSteps);
      this.renderer.render(this.scene, this.camera);
      if (this.camera.position.x != 20 ||
          this.camera.position.y != -2 ||
          this.camera.position.z != 20 ||
          Math.abs(this.camera.rotation.z) > .0001) {
        window.requestAnimationFrame(animateCamera);
      } else {
        this.globalService.setIsAnimating(false);
      }
    };

    animateCamera();
  }

  moveToAbout(x: number, y: number, z: number, zR: number) {
    //0, 19, 5, 0
    const animateCamera = () => {
      this.camera.position.x = this.shift(x, this.camera.position.x, 0, Math.abs(x) / this.incrementSteps);
      this.camera.position.y = this.shift(y, this.camera.position.y, 19, Math.abs(y - 19) / this.incrementSteps);
      this.camera.position.z = this.shift(z, this.camera.position.z, 5, Math.abs(z - 5) / this.incrementSteps);
      this.camera.rotation.z = this.shift(zR, this.camera.rotation.z, 0, Math.abs(zR) / this.incrementSteps);
      this.renderer.render(this.scene, this.camera);
      if (this.camera.position.x != 0 ||
          this.camera.position.y != 19 ||
          this.camera.position.z != 5 ||
          Math.abs(this.camera.rotation.z) > .0001) {
        window.requestAnimationFrame(animateCamera);
      } else {
        this.globalService.setIsAnimating(false);
      }
    };

    animateCamera();
  }

  moveToBlog(x: number, y: number, z: number, zR: number) {
    //-20, -2 20, 0
    const animateCamera = () => {
      this.camera.position.x = this.shift(x, this.camera.position.x, -20, Math.abs(x + 20) / this.incrementSteps);
      this.camera.position.y = this.shift(y, this.camera.position.y, -2, Math.abs(y + 2) / this.incrementSteps);
      this.camera.position.z = this.shift(z, this.camera.position.z, 20, Math.abs(z - 20) / this.incrementSteps);
      this.camera.rotation.z = this.shift(zR, this.camera.rotation.z, 0, Math.abs(zR) / this.incrementSteps);
      this.renderer.render(this.scene, this.camera);
      if (this.camera.position.x != -20 ||
          this.camera.position.y != -2 ||
          this.camera.position.z != 20 ||
          Math.abs(this.camera.rotation.z) > .0001) {
        window.requestAnimationFrame(animateCamera);
      } else {
        this.globalService.setIsAnimating(false);
      }
    };

    animateCamera();
  }

  moveToExplore(x: number, y: number, z: number, zR: number) {
    //-20, -2 20, 0
    const animateCamera = () => {
      this.camera.position.x = this.shift(x, this.camera.position.x, -20, Math.abs(x + 20) / this.incrementSteps);
      this.camera.position.y = this.shift(y, this.camera.position.y, -50, Math.abs(y + 50) / this.incrementSteps);
      this.camera.position.z = this.shift(z, this.camera.position.z, 400, Math.abs(z - 400) / this.incrementSteps);
      this.camera.rotation.z = this.shift(zR, this.camera.rotation.z, 1, Math.abs(zR - 1) / this.incrementSteps);
      this.renderer.render(this.scene, this.camera);
      if (this.camera.position.x != -20 ||
          this.camera.position.y != -50 ||
          this.camera.position.z != 400 ||
          Math.abs(this.camera.rotation.z - 1) > .0001) {
        window.requestAnimationFrame(animateCamera);
      } else {
        this.globalService.setIsAnimating(false);
      }
    };

    animateCamera();
  }

  shift(source: number, current: number, destination: number, increment: number) {
    let sd = Math.abs(source - destination);
    let sc = Math.abs(source - current);
    increment *= (1 - Math.abs(sc/sd - 0.5) * 2) < .05 ? .05 : 1 - Math.abs(sc/sd - 0.5) * 2;
    if (sc / sd > .9995) {
      return destination;
    } else if (current < destination) {
      return current + increment;
    } else if (current > destination) {
      return current - increment;
    } else {
      return current;
    }
  }
}