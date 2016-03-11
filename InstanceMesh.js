function InstanceMesh( geometry , attributes , uniforms , vs , fs , params ){

  var params = params || {}
  var geometry = this.createGeometry( geometry , attributes );

  var attr = {}

  for( var propt in attributes ){

    attr[ propt ] = {
      type:   attributes[ propt ].type,
      value:  null
    }

  }

  var material = new THREE.ShaderMaterial({
  
    uniforms: uniforms,

    attributes: attr,

    vertexShader:   vs,
    fragmentShader: fs,

    side:         params.side         || THREE.BackSide,
    transparent:  params.transparent  || false,
    blending:     params.blending     || THREE.NormalBlending,
  
  });


  body = new THREE.Mesh( geometry , material );

  return body;

}


InstanceMesh.prototype.createGeometry = function( geometry  , attributes ){

  var positions; var normals;
  

  positions = geometry.attributes.position.array;
  normals = geometry.attributes.normal.array;




  var geo = new THREE.InstancedBufferGeometry();


  // Taking care of our instanced geometry  
  var a_position  = new THREE.BufferAttribute( positions , 3 );
  var a_normal    = new THREE.BufferAttribute( normals   , 3 );

  geo.addAttribute( 'position'  , a_position );
  geo.addAttribute( 'normal'    , a_normal   );

  for( var name in attributes ){

    var attribute = attributes[ name ];
    
    var data    = attribute.data;
    var type    = attribute.type;
     
    var length = 1;
    if( type == "v2" ){ length = 2; }
    if( type == "v3" ){ length = 3; }
    if( type == "v4" ){ length = 4; }

    var attr = new THREE.InstancedBufferAttribute( data , length , 1 , false );

    geo.addAttribute( name , attr ); 

  }
  
  return geo;

}
