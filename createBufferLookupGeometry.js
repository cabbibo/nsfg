  function createBufferLookupGeometry( bufferGeo , size ){        
        
    var geo = new THREE.BufferGeometry();

    var length = bufferGeo.attributes.position.array.length;
    var total = size * size  * length
 

    // Lookups
    var positions = new Float32Array(  size * size * length );
    var normals = new Float32Array(  size * size * length );

    var uvs = new Float32Array(  size * size *  length * (2 / 3) );
    var ids = new Float32Array(  size * size *  length * (1/3));

    // position in tetrahedron
    var triPos = new Float32Array(  size * size * 3 * length );

    for ( var i = 0; i < positions.length;  i += 3 ) {

      var f = Math.floor( i / length );
      positions[ i     ] = ( f % size ) / size;
      positions[ i + 1 ] = Math.floor( f / size ) / size;
      positions[ i + 2 ] = 0;
    
    }


    for ( var i = 0; i < positions.length;  i += 1 ) {

      var f = i % length;

      triPos[ i + 0 ] = bufferGeo.attributes.position.array[ f ];

    
    }

    for ( var i = 0; i < positions.length;  i += 1 ) {

      var f = i % length;

      normals[ i + 0 ] = bufferGeo.attributes.normal.array[ f ];

    
    }

    for ( var i = 0; i < uvs.length;  i += 1 ) {

      var f = i % (length * 2/3);

      uvs[ i ] = bufferGeo.attributes.uv.array[ f ];

    
    }


    for ( var i = 0; i < ids.length; i ++) {

      var f = Math.floor( i / length );

      ids[ i ] = f;

    
    }





    var posA = new THREE.BufferAttribute( positions , 3 );
    var triA = new THREE.BufferAttribute( triPos , 3 );
    var norA = new THREE.BufferAttribute( normals , 3 );
    var uvA  = new THREE.BufferAttribute( uvs , 2 );
    var idA  = new THREE.BufferAttribute( ids , 1 );

    geo.addAttribute( 'position' , posA );
    geo.addAttribute( 'triPos'   , triA );
    geo.addAttribute( 'normal'   , norA );
    geo.addAttribute( 'uv'       , uvA );
    geo.addAttribute( 'id'       , idA );

    return geo;
    
  }