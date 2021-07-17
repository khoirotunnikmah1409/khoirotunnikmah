var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_INDONESIA_KEC_0 = new ol.format.GeoJSON();
var features_INDONESIA_KEC_0 = format_INDONESIA_KEC_0.readFeatures(json_INDONESIA_KEC_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDONESIA_KEC_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDONESIA_KEC_0.addFeatures(features_INDONESIA_KEC_0);var lyr_INDONESIA_KEC_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDONESIA_KEC_0, 
                style: style_INDONESIA_KEC_0,
    title: 'INDONESIA_KEC<br />\
    <img src="styles/legend/INDONESIA_KEC_0_0.png" /> Batangan<br />\
    <img src="styles/legend/INDONESIA_KEC_0_1.png" /> Cluwak<br />\
    <img src="styles/legend/INDONESIA_KEC_0_2.png" /> Dukuhseti<br />\
    <img src="styles/legend/INDONESIA_KEC_0_3.png" /> Gabus<br />\
    <img src="styles/legend/INDONESIA_KEC_0_4.png" /> Gembong<br />\
    <img src="styles/legend/INDONESIA_KEC_0_5.png" /> Gunungwungkal<br />\
    <img src="styles/legend/INDONESIA_KEC_0_6.png" /> Jaken<br />\
    <img src="styles/legend/INDONESIA_KEC_0_7.png" /> Jakenan<br />\
    <img src="styles/legend/INDONESIA_KEC_0_8.png" /> Juwana<br />\
    <img src="styles/legend/INDONESIA_KEC_0_9.png" /> Kayen<br />\
    <img src="styles/legend/INDONESIA_KEC_0_10.png" /> Mangunrejo<br />\
    <img src="styles/legend/INDONESIA_KEC_0_11.png" /> Margoyoso<br />\
    <img src="styles/legend/INDONESIA_KEC_0_12.png" /> Pati<br />\
    <img src="styles/legend/INDONESIA_KEC_0_13.png" /> Pucakwangi<br />\
    <img src="styles/legend/INDONESIA_KEC_0_14.png" /> Sukolilo<br />\
    <img src="styles/legend/INDONESIA_KEC_0_15.png" /> Tambakromo<br />\
    <img src="styles/legend/INDONESIA_KEC_0_16.png" /> Tayu<br />\
    <img src="styles/legend/INDONESIA_KEC_0_17.png" /> Tlogowungu<br />\
    <img src="styles/legend/INDONESIA_KEC_0_18.png" /> Trangkil<br />\
    <img src="styles/legend/INDONESIA_KEC_0_19.png" /> Wedarijaksa<br />\
    <img src="styles/legend/INDONESIA_KEC_0_20.png" /> Winong<br />\
    <img src="styles/legend/INDONESIA_KEC_0_21.png" /> <br />'
        });

lyr_INDONESIA_KEC_0.setVisible(true);
var layersList = [baseLayer,lyr_INDONESIA_KEC_0];
lyr_INDONESIA_KEC_0.set('fieldAliases', {'ID': 'ID', 'Kecamatan': 'Kecamatan', 'jml_baldes': 'jml_baldes', });
lyr_INDONESIA_KEC_0.set('fieldImages', {'ID': 'TextEdit', 'Kecamatan': 'TextEdit', 'jml_baldes': 'TextEdit', });
lyr_INDONESIA_KEC_0.set('fieldLabels', {'ID': 'inline label', 'Kecamatan': 'inline label', 'jml_baldes': 'inline label', });
lyr_INDONESIA_KEC_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});