var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_rioblancoexportado_1 = new ol.format.GeoJSON();
var features_rioblancoexportado_1 = format_rioblancoexportado_1.readFeatures(json_rioblancoexportado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rioblancoexportado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rioblancoexportado_1.addFeatures(features_rioblancoexportado_1);
var lyr_rioblancoexportado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rioblancoexportado_1, 
                style: style_rioblancoexportado_1,
                popuplayertitle: 'rioblancoexportado',
                interactive: true,
    title: 'rioblancoexportado<br />\
    <img src="styles/legend/rioblancoexportado_1_0.png" /> 0 - 3483000<br />\
    <img src="styles/legend/rioblancoexportado_1_1.png" /> 3483000 - 9716000<br />\
    <img src="styles/legend/rioblancoexportado_1_2.png" /> 9716000 - 22274000<br />\
    <img src="styles/legend/rioblancoexportado_1_3.png" /> 22274000 - 41857000<br />\
    <img src="styles/legend/rioblancoexportado_1_4.png" /> 41857000 - 76370000<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_rioblancoexportado_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_rioblancoexportado_1];
lyr_rioblancoexportado_1.set('fieldAliases', {'codigo_nue': 'codigo_nue', 'NOMBRE': 'NOMBRE', 'ESTADO CIV': 'ESTADO CIV', 'COMUNA': 'COMUNA', 'DESTINO EC': 'DESTINO EC', 'AREA TERRE': 'AREA TERRE', 'AREA CONST': 'AREA CONST', 'AVALUO': 'AVALUO', });
lyr_rioblancoexportado_1.set('fieldImages', {'codigo_nue': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO CIV': 'TextEdit', 'COMUNA': 'TextEdit', 'DESTINO EC': 'TextEdit', 'AREA TERRE': 'TextEdit', 'AREA CONST': 'TextEdit', 'AVALUO': 'TextEdit', });
lyr_rioblancoexportado_1.set('fieldLabels', {'codigo_nue': 'hidden field', 'NOMBRE': 'inline label - always visible', 'ESTADO CIV': 'hidden field', 'COMUNA': 'hidden field', 'DESTINO EC': 'inline label - visible with data', 'AREA TERRE': 'inline label - always visible', 'AREA CONST': 'hidden field', 'AVALUO': 'inline label - always visible', });
lyr_rioblancoexportado_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});