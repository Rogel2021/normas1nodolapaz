var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_TRAMO_IV_1 = new ol.format.GeoJSON();
var features_TRAMO_IV_1 = format_TRAMO_IV_1.readFeatures(json_TRAMO_IV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO_IV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO_IV_1.addFeatures(features_TRAMO_IV_1);
var lyr_TRAMO_IV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO_IV_1, 
                style: style_TRAMO_IV_1,
                interactive: true,
                title: '<img src="styles/legend/TRAMO_IV_1.png" /> TRAMO_IV'
            });
var format_VERTICES_2 = new ol.format.GeoJSON();
var features_VERTICES_2 = format_VERTICES_2.readFeatures(json_VERTICES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VERTICES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERTICES_2.addFeatures(features_VERTICES_2);
var lyr_VERTICES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VERTICES_2, 
                style: style_VERTICES_2,
                interactive: true,
                title: '<img src="styles/legend/VERTICES_2.png" /> VERTICES'
            });
var format_COMUNIDADES_3 = new ol.format.GeoJSON();
var features_COMUNIDADES_3 = format_COMUNIDADES_3.readFeatures(json_COMUNIDADES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNIDADES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIDADES_3.addFeatures(features_COMUNIDADES_3);
var lyr_COMUNIDADES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMUNIDADES_3, 
                style: style_COMUNIDADES_3,
                interactive: true,
                title: '<img src="styles/legend/COMUNIDADES_3.png" /> COMUNIDADES'
            });
var format_LIMITE_TRAMO_FINAL_19_NZ_CQ_4 = new ol.format.GeoJSON();
var features_LIMITE_TRAMO_FINAL_19_NZ_CQ_4 = format_LIMITE_TRAMO_FINAL_19_NZ_CQ_4.readFeatures(json_LIMITE_TRAMO_FINAL_19_NZ_CQ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITE_TRAMO_FINAL_19_NZ_CQ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_TRAMO_FINAL_19_NZ_CQ_4.addFeatures(features_LIMITE_TRAMO_FINAL_19_NZ_CQ_4);
var lyr_LIMITE_TRAMO_FINAL_19_NZ_CQ_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITE_TRAMO_FINAL_19_NZ_CQ_4, 
                style: style_LIMITE_TRAMO_FINAL_19_NZ_CQ_4,
                interactive: true,
                title: '<img src="styles/legend/LIMITE_TRAMO_FINAL_19_NZ_CQ_4.png" /> LIMITE_TRAMO_FINAL_19_NZ_CQ'
            });
var format_VERTICES_FINAL_19_NZ_CQ_5 = new ol.format.GeoJSON();
var features_VERTICES_FINAL_19_NZ_CQ_5 = format_VERTICES_FINAL_19_NZ_CQ_5.readFeatures(json_VERTICES_FINAL_19_NZ_CQ_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VERTICES_FINAL_19_NZ_CQ_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERTICES_FINAL_19_NZ_CQ_5.addFeatures(features_VERTICES_FINAL_19_NZ_CQ_5);
var lyr_VERTICES_FINAL_19_NZ_CQ_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VERTICES_FINAL_19_NZ_CQ_5, 
                style: style_VERTICES_FINAL_19_NZ_CQ_5,
                interactive: true,
                title: '<img src="styles/legend/VERTICES_FINAL_19_NZ_CQ_5.png" /> VERTICES_FINAL_19_NZ_CQ'
            });
var format_COMUNIDADES_FINAL_19_NZ_CQ_6 = new ol.format.GeoJSON();
var features_COMUNIDADES_FINAL_19_NZ_CQ_6 = format_COMUNIDADES_FINAL_19_NZ_CQ_6.readFeatures(json_COMUNIDADES_FINAL_19_NZ_CQ_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNIDADES_FINAL_19_NZ_CQ_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIDADES_FINAL_19_NZ_CQ_6.addFeatures(features_COMUNIDADES_FINAL_19_NZ_CQ_6);
var lyr_COMUNIDADES_FINAL_19_NZ_CQ_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMUNIDADES_FINAL_19_NZ_CQ_6, 
                style: style_COMUNIDADES_FINAL_19_NZ_CQ_6,
                interactive: true,
                title: '<img src="styles/legend/COMUNIDADES_FINAL_19_NZ_CQ_6.png" /> COMUNIDADES_FINAL_19_NZ_CQ'
            });
var group_99NazacaraCaquiaviri = new ol.layer.Group({
                                layers: [lyr_LIMITE_TRAMO_FINAL_19_NZ_CQ_4,lyr_VERTICES_FINAL_19_NZ_CQ_5,lyr_COMUNIDADES_FINAL_19_NZ_CQ_6,],
                                title: "99 Nazacara - Caquiaviri"});
var group_67CharaaSantiagoMachaca = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_TRAMO_IV_1,lyr_VERTICES_2,lyr_COMUNIDADES_3,],
                                title: "67 Charaña - Santiago Machaca"});

lyr_GoogleSatellite_0.setVisible(true);lyr_TRAMO_IV_1.setVisible(true);lyr_VERTICES_2.setVisible(true);lyr_COMUNIDADES_3.setVisible(true);lyr_LIMITE_TRAMO_FINAL_19_NZ_CQ_4.setVisible(true);lyr_VERTICES_FINAL_19_NZ_CQ_5.setVisible(true);lyr_COMUNIDADES_FINAL_19_NZ_CQ_6.setVisible(true);
var layersList = [group_67CharaaSantiagoMachaca,group_99NazacaraCaquiaviri];
lyr_TRAMO_IV_1.set('fieldAliases', {'Id': 'Id', 'Dist_': 'Dist_', });
lyr_VERTICES_2.set('fieldAliases', {'NRO': 'NRO', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ZONA': 'ZONA', 'NOMBRE': 'NOMBRE', });
lyr_COMUNIDADES_3.set('fieldAliases', {'NRO': 'NRO', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ZONA': 'ZONA', 'COMUNIDAD': 'COMUNIDAD', });
lyr_LIMITE_TRAMO_FINAL_19_NZ_CQ_4.set('fieldAliases', {'Id': 'Id', 'distancia': 'distancia', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ID__LIMITE': 'ID__LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM_1': 'DIST_KM_1', 'ESTADO': 'ESTADO', 'Z_UTM': 'Z_UTM', 'ID_ARCHIVO': 'ID_ARCHIVO', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_VERTICES_FINAL_19_NZ_CQ_5.set('fieldAliases', {'COD_ACTA_1': 'COD_ACTA_1', 'ID_VERT': 'ID_VERT', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'ALTURA': 'ALTURA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'Altura__Gl': 'Altura__Gl', 'Z_UTM': 'Z_UTM', 'NOM_MOJO_1': 'NOM_MOJO_1', 'MEDICION': 'MEDICION', 'TRAMO': 'TRAMO', 'ESTADO': 'ESTADO', 'ID_ARCHI': 'ID_ARCHI', });
lyr_COMUNIDADES_FINAL_19_NZ_CQ_6.set('fieldAliases', {'nom_comuni': 'nom_comuni', 'X': 'X', 'Y': 'Y', 'MUNICIPIO': 'MUNICIPIO', 'ID_ARCHIVO': 'ID_ARCHIVO', });
lyr_TRAMO_IV_1.set('fieldImages', {'Id': 'TextEdit', 'Dist_': 'TextEdit', });
lyr_VERTICES_2.set('fieldImages', {'NRO': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ZONA': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_COMUNIDADES_3.set('fieldImages', {'NRO': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ZONA': 'TextEdit', 'COMUNIDAD': 'TextEdit', });
lyr_LIMITE_TRAMO_FINAL_19_NZ_CQ_4.set('fieldImages', {'Id': 'TextEdit', 'distancia': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'ID__LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM_1': 'TextEdit', 'ESTADO': 'TextEdit', 'Z_UTM': 'TextEdit', 'ID_ARCHIVO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_VERTICES_FINAL_19_NZ_CQ_5.set('fieldImages', {'COD_ACTA_1': 'TextEdit', 'ID_VERT': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'ALTURA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'Altura__Gl': 'TextEdit', 'Z_UTM': 'TextEdit', 'NOM_MOJO_1': 'TextEdit', 'MEDICION': 'TextEdit', 'TRAMO': 'TextEdit', 'ESTADO': 'TextEdit', 'ID_ARCHI': 'TextEdit', });
lyr_COMUNIDADES_FINAL_19_NZ_CQ_6.set('fieldImages', {'nom_comuni': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ID_ARCHIVO': 'TextEdit', });
lyr_TRAMO_IV_1.set('fieldLabels', {});
lyr_VERTICES_2.set('fieldLabels', {});
lyr_COMUNIDADES_3.set('fieldLabels', {});
lyr_LIMITE_TRAMO_FINAL_19_NZ_CQ_4.set('fieldLabels', {});
lyr_VERTICES_FINAL_19_NZ_CQ_5.set('fieldLabels', {});
lyr_COMUNIDADES_FINAL_19_NZ_CQ_6.set('fieldLabels', {});
lyr_COMUNIDADES_FINAL_19_NZ_CQ_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});