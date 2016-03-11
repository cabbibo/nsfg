
//TODO:
// target rotation texture
var MakePages = function(){
  sNoise = new SimplexNoise();

  firstLookup = makeSingleTexture( 1 , 0 );
  secondLookup = makeSingleTexture( 1 , 0.0 );

  cabbiboTexture = makeImageTexture(.3,  G.textures.cabbiboEnd );
  asLogoLookup = makeImageTexture(.3,  G.textures.asLogo );
  asLogoColor = makeColorFromTextureImage( .3 , asLogoLookup, G.textures.asLogo );

  randomRotationAxis = makeNormalizedTexture();
  verticalRotationAxis = makeVerticalTexture();
  


  console.log( G.highGeo );
  shoeBuffers = makeBufferGeometryTexture( G.highGeo , .0001 , .0001);
  shoeLookup = shoeBuffers.position;// makeBufferGeometryTexture( G.highGeo , .0001 , .0001);
  shoeColor = shoeBuffers.color;// makeBufferGeometryTexture( G.highGeo , .0001 , .0001);


  sunTexture = makeMeshTexture( new THREE.IcosahedronGeometry( .1 , 4 ) , .008 , .0);
  sunColor = makeHueSphereTexture( sunTexture );
  

  //emergenceTexture = makeNoiseMeshTexture( new THREE.IcosahedronGeometry( .4 , 4 ) , .004 , .0);
  


  var PAGES = [

    {

    title                        : "Starting Scene",

    pageTurnTime                 : 1000,

    targetTexture                : secondLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:.1
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0.,
                                    toTargetAxis:1,
                                    toTargetAngle:1,
                                 
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    simulationSize:1,
                                    baseSize:.00,
                                    semAmount:1,
                                    reflectColorAmount:1,
                                   },


    cameraPosition               : new THREE.Vector3( 0 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 



  {

    title                        : "Particles Making 3D Model",

    pageTurnTime                 : 1000,

    targetTexture                : shoeLookup,
    targetColorTexture           : shoeColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 20,
                                    dampening: .8,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                     mouseRepel:.05,
                                    mouseRepelRadius:0.1,
                                    movementSpeed:.05,
                                    movementSize:.5,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 0.,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   },
                                      

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    //colorValue: 1,
                                    rainbowValue: 0,
                                    normalMapDepth:10.,
                                    normalMapSize:.01,
                                    //reflectColorAmount:0,
                                    normalColorAmount:1,
                                    velocityColorAmount:0.5,
                                    individualColorAmount:1,

                                    simulationSize:1,
                                    baseSize:0,
                                    semAmount:.5,
                                   },

    cameraPosition               : new THREE.Vector3( .0 , 0 , .5 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 


  {

    title                        : "LOGO",

    pageTurnTime                 : 1000,

    targetTexture                : asLogoLookup,
    targetColorTexture           : asLogoColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 20,
                                    dampening: .8,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                     mouseRepel:.01,
                                    mouseRepelRadius:0.06,
                                    movementSpeed:.01,
                                    movementSize:.001,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   },
                                      

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalMapDepth:1,
                                    normalMapSize:.04,
                                    reflectColorAmount:0,
                                    normalColorAmount:0,
                                    velocityColorAmount:0,
                                    individualColorAmount:1,
                                    simulationSize:3,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 



    {

    title                        : "<a href='http://cabbi.bo'>cabbi.bo</a><br/> @cabbibo<br/>isaaclandoncohen@gmail.com",

    pageTurnTime                 : 1000,

    targetTexture                : cabbiboTexture,
    targetColorTexture           : asLogoColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 10,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    audioRadius: .4,
                                    audioPower: .005,
                                    movementSpeed:.1,
                                    movementSize:0,
                                    mouseRepel:.1,
                                    mouseRepelRadius:.02
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:0,
                                      toTargetAngle:1,
                                      toVelocity:1
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    simulationSize: 1,
                                    audioSize:0,
                                    baseSize:0,
                                    audioDisplacement:.01,
                                    rainbowValue: 0,
                                    audioColorAmount:0,
                                    reflectColorAmount:1.,
                                    velocityColorAmount:.3,
                                    individualColorAmount: 0,
                                    semAmount:1.0,
                                    brightness:0,
                                    simulationSize:3,
                                    //audioDisplacement: .,
                                    biggerFartherAddition: 0.3,
                                   },

    cameraPosition               : new THREE.Vector3( -0.0 , -0.0 , .4 ),
    cameraTarget                 : new THREE.Vector3( -0.0 , -0.0 , 0 ),


  },








]

return PAGES

}