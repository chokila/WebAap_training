// Load the Map and MapView modules
require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Legend",
    "esri/widgets/ScaleBar",
    "esri/widgets/Home",
    "esri/widgets/Expand",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Locate",
    "esri/widgets/LayerList",
    "esri/widgets/AreaMeasurement2D",
    "esri/widgets/Fullscreen"


], function (esriConfig, WebMap, MapView, Legend, ScaleBar, Home, Expand, BasemapGallery, Locate, LayerList, AreaMeasurement2D, Fullscreen) {

    esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal"

    // Create a WebMap instance //
    const myMap = new WebMap({
        portalItem: {
            id: "7644b287ab3a4238b3dc8c1f7b7197aa"   //4653a4579f6c4be5bf1d0ed2e019d5da // 7644b287ab3a4238b3dc8c1f7b7197aa
        }
    });
    
    // Create a MapView //
    const view = new MapView({
        map: myMap,
        container: "viewDiv"
    });

    // SCALE BAR //
    const scaleBar = new ScaleBar({
        view: view,
        unit: "metric"
    });
    view.ui.add(scaleBar, { position: "bottom-right" });

    // HOME //
    const homeWidget = new Home({
        view: view
    });
    view.ui.add(homeWidget, "top-left");

    // BASEMAP GALLARY INSIDE EXPAND WIDGET //
    const basemapGallery = new BasemapGallery({
        view: view,
        container: document.createElement("div")
    });
    const bgExpand = new Expand({
        view: view,
        content: basemapGallery
    });
    view.ui.add(bgExpand, "top-right");

    // LOCATE //
    let locateWidget = new Locate({
        view: view,
    });
    view.ui.add(locateWidget, "top-left");

    // LEGEND  //
    const legend = new Legend({
        view: view,
        container: "legend-container"
    });

    // LAYER LIST modified in left panel //
    const layerList = new LayerList({
        view: view,
        container: "layerList-container"
    });


   // FULLSCREEN //
   let fullscreen = new Fullscreen({   
    view: view,
});
view.ui.add(fullscreen, "top-right"); 


   // MEASUREMENT //
   let measure = new AreaMeasurement2D({   //--use you own variable name ex measure--//
    view: view,
});
view.ui.add(measure, "bottom-left"); 


// Text MODALS //
const appDetailModalBtn = document.getElementById("app-details-action");
const appDetailModalEl = document.getElementById("app-details-modal");
appDetailModalBtn.addEventListener("click", () => { appDetailModalEl.open = !appDetailModalEl.open });

});