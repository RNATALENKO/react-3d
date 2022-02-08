import logo from './logo.svg';
import './App.css';
import {Canvas} from '@react-three/fiber'; //creates the scene
import Box from './Components/Box';
import { AnimatedSphere } from './Components/AnimatedSphere';
import {OrbitControls} from "@react-three/drei";
import React, {Suspense} from 'react'; //suspense is used when you're adding material to the box, it's a fall back incase the material can't be retrieved
import IphoneDraco from './Components/IphoneDraco';




/* doing this tutorial right now: https://www.youtube.com/watch?v=wxvSHOrBHbw&list=PLvPQCUi6RdBPNftYB-SOBigvS2TNh3WFf&index=12 
https://threejs.org/docs/#manual/en/introduction/Installation


@react-three/fiber is the renderer for 3d
@react-three/drei is a collection of helpers for three.js (just a bunch of functions you can use)
drei has functions to rotate the geometry
you can also download textures and apply anyone that you want: https://www.textures.com/library, you import it as a jpeg
sketch fab is good for importing 3d already made assets. 
if you get models from sketch fab, install gltf pipeline and convert gltf file to 2.0, so that animations, shadings, can be rendered. COnvert gltf to draco gltf, where it says in gltf-pipeline
for jltf-pipeline make sure to install it globally so you can use the command outside of the react-3rd project folder
then you have to go here to convert the new draco gltf to jsx: https://github.com/pmndrs/gltfjsx
note: you can simply use npx gltfjsx in the same directory as the iphonemodeldraco.gltf file, npx allows you to run the commands without installing them
then you should get an iphoneDraco.js file 
then drag the iphoneDraco.gltf in the public folder, and iphone.js into components folder, the iphoneDraco.js file is a component with meshes and geometries, and it needs to be in a new canvas
*/

function App() {





  return (
    <div className="App" style={{display:'flex', flexDirection:'column', width:'100vw', backgroundColor:'#122d69', height:'100vh', justifyContent:'center', alignItems:'center', position:'relative', zIndex:0}}>
        <Canvas>
          {/* note: you can also style the canvas with style attribute, inside canvas a div cannot exist, inside the canvas, so replace the div with a shape that can be used */}
          <Box/>

          {/* add lighting to the box, these have intensity of the light, and directional light you have to position it as if it's on an x,y,z coordinate plane, as you did in the three.js editor*/}
          <ambientLight intensity={.5}></ambientLight>
          <directionalLight position={[-2,5,2]} intensity={5}></directionalLight>

          {/* enables some controls on the shape, note you can zoom in and out with the scroll wheel */}
          <OrbitControls enableZoom={false}></OrbitControls>


          {/* suspense has a fallback incase content can't be loaded, then add your box inside, and the box won't break */}
          <Suspense fallback={null}>
              <Box/>
          </Suspense>


        </Canvas>
        <Canvas style={{position:'relative', zIndex:2}}>
          {/* note: you can also style the canvas with style attribute, inside canvas a div cannot exist, inside the canvas, so replace the div with a shape that can be used */}
          <AnimatedSphere/>

          {/* add lighting to the box, these have intensity of the light, and directional light you have to position it as if it's on an x,y,z coordinate plane, as you did in the three.js editor*/}
          <ambientLight intensity={.5}></ambientLight>
          <directionalLight position={[-2,5,2]} intensity={5}></directionalLight>

          {/* enables some controls on the shape, note you can zoom in and out with the scroll wheel */}
          <OrbitControls enableZoom={false}></OrbitControls>


          {/* suspense has a fallback incase content can't be loaded, then add your box inside, and the box won't break */}
          <Suspense fallback={null}>
              <AnimatedSphere/>
          </Suspense>


        </Canvas>

        <div style={{backgroundColor:'yellow', height: 100, width:100, position: 'relative', top:-100, zIndex:1}}> mouse target </div>

        <Canvas style={{height:600*4}}>
    
          <IphoneDraco></IphoneDraco>

          <Suspense fallback={null}>
              <IphoneDraco/>
          </Suspense>

           {/* add lighting to the box, these have intensity of the light, and directional light you have to position it as if it's on an x,y,z coordinate plane, as you did in the three.js editor*/}
           <ambientLight intensity={.5}></ambientLight>
          <directionalLight position={[-2,5,2]} intensity={5}></directionalLight>

          {/* enables some controls on the shape, note you can zoom in and out with the scroll wheel */}
          <OrbitControls enableZoom={false}></OrbitControls>

          
        </Canvas>


        

        
        <div style={{width:'100%', height:700}}>spacing</div>
        
    </div>
  );
}

export default App;

