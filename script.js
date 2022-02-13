require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "esri/widgets/Legend",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home, Legend) {
  //Now we call this web map:
  //https://slustl.maps.arcgis.com/home/webscene/viewer.html?webscene=a8789ca00ebc4def96ad3aec57c3cb13
  var scene = new WebScene({
    portalItem:{
      id:"a8789ca00ebc4def96ad3aec57c3cb13"
    }
  });
  
  // Where the camera starts out looking
  // Also used by the home button
  var camera = new Camera({
    position: [
      -90.688, // longitude
      38.065, // latitude
      2500// elevation in meters
    ],
    tilt: 45,
    heading: 0
  });
  
  // Create the div.
  var view = new SceneView({
    container: "washMap3",
    map: scene,
    camera: camera,
		viewingMode:'global'
  });
  
  // Create the home button, which returns us to the default camera.
  var homeBtn = new Home({
    view: view
  });
  // Add the home button to the top left corner of the view
  view.ui.add(homeBtn, "top-left");
  
  //Add a legend to map.
  let myLegend = new Legend({
    view: view
  });
  view.ui.add(myLegend, "top-right");
});
