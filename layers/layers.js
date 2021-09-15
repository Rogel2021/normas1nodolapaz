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
var format_Cuerpos_de_Agua_SENAMHI_z20s2_1 = new ol.format.GeoJSON();
var features_Cuerpos_de_Agua_SENAMHI_z20s2_1 = format_Cuerpos_de_Agua_SENAMHI_z20s2_1.readFeatures(json_Cuerpos_de_Agua_SENAMHI_z20s2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_1.addFeatures(features_Cuerpos_de_Agua_SENAMHI_z20s2_1);
var lyr_Cuerpos_de_Agua_SENAMHI_z20s2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_1, 
                style: style_Cuerpos_de_Agua_SENAMHI_z20s2_1,
                interactive: true,
                title: '<img src="styles/legend/Cuerpos_de_Agua_SENAMHI_z20s2_1.png" /> Cuerpos_de_Agua_SENAMHI_z20s2'
            });
var format_LIMITESLEY_2 = new ol.format.GeoJSON();
var features_LIMITESLEY_2 = format_LIMITESLEY_2.readFeatures(json_LIMITESLEY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESLEY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESLEY_2.addFeatures(features_LIMITESLEY_2);
var lyr_LIMITESLEY_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESLEY_2, 
                style: style_LIMITESLEY_2,
                interactive: true,
                title: '<img src="styles/legend/LIMITESLEY_2.png" /> LIMITES LEY'
            });
var format_ComunidadesLey24deSeptiembrede1938z20s_3 = new ol.format.GeoJSON();
var features_ComunidadesLey24deSeptiembrede1938z20s_3 = format_ComunidadesLey24deSeptiembrede1938z20s_3.readFeatures(json_ComunidadesLey24deSeptiembrede1938z20s_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesLey24deSeptiembrede1938z20s_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesLey24deSeptiembrede1938z20s_3.addFeatures(features_ComunidadesLey24deSeptiembrede1938z20s_3);
var lyr_ComunidadesLey24deSeptiembrede1938z20s_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ComunidadesLey24deSeptiembrede1938z20s_3, 
                style: style_ComunidadesLey24deSeptiembrede1938z20s_3,
                interactive: true,
                title: '<img src="styles/legend/ComunidadesLey24deSeptiembrede1938z20s_3.png" /> Comunidades Ley 24 de Septiembre de 1938 z20s'
            });
var format_Limites_Pando_4 = new ol.format.GeoJSON();
var features_Limites_Pando_4 = format_Limites_Pando_4.readFeatures(json_Limites_Pando_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_Pando_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_Pando_4.addFeatures(features_Limites_Pando_4);
var lyr_Limites_Pando_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_Pando_4, 
                style: style_Limites_Pando_4,
                interactive: true,
                title: '<img src="styles/legend/Limites_Pando_4.png" /> Limites_Pando'
            });
var format_PisoFirme_5 = new ol.format.GeoJSON();
var features_PisoFirme_5 = format_PisoFirme_5.readFeatures(json_PisoFirme_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PisoFirme_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PisoFirme_5.addFeatures(features_PisoFirme_5);
var lyr_PisoFirme_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PisoFirme_5, 
                style: style_PisoFirme_5,
                interactive: true,
                title: '<img src="styles/legend/PisoFirme_5.png" /> Piso Firme'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Cuerpos_de_Agua_SENAMHI_z20s2_1.setVisible(true);lyr_LIMITESLEY_2.setVisible(true);lyr_ComunidadesLey24deSeptiembrede1938z20s_3.setVisible(true);lyr_Limites_Pando_4.setVisible(true);lyr_PisoFirme_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Cuerpos_de_Agua_SENAMHI_z20s2_1,lyr_LIMITESLEY_2,lyr_ComunidadesLey24deSeptiembrede1938z20s_3,lyr_Limites_Pando_4,lyr_PisoFirme_5];
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_1.set('fieldAliases', {'gml_id': 'gml_id', 'NBHIDROGRA': 'NBHIDROGRA', 'CATEG_DES': 'CATEG_DES', 'SUBCUENCA': 'SUBCUENCA', 'COCLASIFHI': 'COCLASIFHI', 'COESCALA': 'COESCALA', 'IDELEMENTO': 'IDELEMENTO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LIMITESLEY_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'ESTADO': 'ESTADO', 'Z_UTM': 'Z_UTM', 'N_LEY': 'N_LEY', 'FECHA_LEY': 'FECHA_LEY', 'ID_ARCHIVO': 'ID_ARCHIVO', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_3.set('fieldAliases', {'Name': 'Name', 'ESTE_WGS84': 'ESTE_WGS84', 'NORTE_WGS8': 'NORTE_WGS8', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', });
lyr_Limites_Pando_4.set('fieldAliases', {'FID_Depart': 'FID_Depart', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID_UT_D': 'ID_UT_D', 'DEPARTAMEN': 'DEPARTAMEN', 'B_LEGAL_D': 'B_LEGAL_D', 'SUP_KM2': 'SUP_KM2', });
lyr_PisoFirme_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'ID_EXP': 'ID_EXP', 'LIMITE': 'LIMITE', 'ESTADO': 'ESTADO', 'TIPO_LIMIT': 'TIPO_LIMIT', 'Z_UTM': 'Z_UTM', 'LEY': 'LEY', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_1.set('fieldImages', {'gml_id': 'TextEdit', 'NBHIDROGRA': 'TextEdit', 'CATEG_DES': 'TextEdit', 'SUBCUENCA': 'TextEdit', 'COCLASIFHI': 'TextEdit', 'COESCALA': 'TextEdit', 'IDELEMENTO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LIMITESLEY_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'ESTADO': 'TextEdit', 'Z_UTM': 'TextEdit', 'N_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_ARCHIVO': 'TextEdit', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_3.set('fieldImages', {'Name': 'TextEdit', 'ESTE_WGS84': 'TextEdit', 'NORTE_WGS8': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', });
lyr_Limites_Pando_4.set('fieldImages', {'FID_Depart': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID_UT_D': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'B_LEGAL_D': 'TextEdit', 'SUP_KM2': 'TextEdit', });
lyr_PisoFirme_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_EXP': 'TextEdit', 'LIMITE': 'TextEdit', 'ESTADO': 'TextEdit', 'TIPO_LIMIT': 'TextEdit', 'Z_UTM': 'TextEdit', 'LEY': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_1.set('fieldLabels', {'gml_id': 'inline label', 'NBHIDROGRA': 'inline label', 'CATEG_DES': 'inline label', 'SUBCUENCA': 'inline label', 'COCLASIFHI': 'inline label', 'COESCALA': 'inline label', 'IDELEMENTO': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_LIMITESLEY_2.set('fieldLabels', {'OBJECTID': 'inline label', 'ID_LIMITE': 'inline label', 'ID_TRAMO': 'inline label', 'DIST_KM': 'inline label', 'ESTADO': 'inline label', 'Z_UTM': 'inline label', 'N_LEY': 'inline label', 'FECHA_LEY': 'inline label', 'ID_ARCHIVO': 'inline label', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_3.set('fieldLabels', {'Name': 'inline label', 'ESTE_WGS84': 'inline label', 'NORTE_WGS8': 'inline label', 'LAT_WGS84': 'inline label', 'LON_WGS84': 'inline label', });
lyr_Limites_Pando_4.set('fieldLabels', {'FID_Depart': 'inline label', 'OBJECTID': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', 'ID_UT_D': 'inline label', 'DEPARTAMEN': 'inline label', 'B_LEGAL_D': 'inline label', 'SUP_KM2': 'inline label', });
lyr_PisoFirme_5.set('fieldLabels', {'OBJECTID': 'inline label', 'COD_SIOT': 'inline label', 'ID_LIMITE': 'inline label', 'ID_TRAMO': 'inline label', 'DIST_KM': 'inline label', 'FECHA_LEY': 'inline label', 'ID_EXP': 'inline label', 'LIMITE': 'inline label', 'ESTADO': 'inline label', 'TIPO_LIMIT': 'inline label', 'Z_UTM': 'inline label', 'LEY': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_PisoFirme_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});