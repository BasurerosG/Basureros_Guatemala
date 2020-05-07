var wms_layers = [];

var format_Usot_0 = new ol.format.GeoJSON();
var features_Usot_0 = format_Usot_0.readFeatures(json_Usot_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usot_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usot_0.addFeatures(features_Usot_0);
var lyr_Usot_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Usot_0, 
                style: style_Usot_0,
                interactive: true,
    title: 'Usot<br />\
    <img src="styles/legend/Usot_0_0.png" /> Bosque Natural<br />\
    <img src="styles/legend/Usot_0_1.png" /> Cuerpos de Agua<br />\
    <img src="styles/legend/Usot_0_2.png" /> Cultivos<br />\
    <img src="styles/legend/Usot_0_3.png" /> Humedales y Tierras Inundables<br />\
    <img src="styles/legend/Usot_0_4.png" /> Infraestructura<br />\
    <img src="styles/legend/Usot_0_5.png" /> Pastos / Matorrales<br />\
    <img src="styles/legend/Usot_0_6.png" /> Tierras Áridas o Estériles<br />\
    <img src="styles/legend/Usot_0_7.png" /> <br />'
        });
var format_Municipioscortado_1 = new ol.format.GeoJSON();
var features_Municipioscortado_1 = format_Municipioscortado_1.readFeatures(json_Municipioscortado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipioscortado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipioscortado_1.addFeatures(features_Municipioscortado_1);
var lyr_Municipioscortado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipioscortado_1, 
                style: style_Municipioscortado_1,
                interactive: true,
                title: '<img src="styles/legend/Municipioscortado_1.png" /> Municipios cortado'
            });
var format_DeptosCort_2 = new ol.format.GeoJSON();
var features_DeptosCort_2 = format_DeptosCort_2.readFeatures(json_DeptosCort_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeptosCort_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeptosCort_2.addFeatures(features_DeptosCort_2);
var lyr_DeptosCort_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeptosCort_2, 
                style: style_DeptosCort_2,
                interactive: true,
                title: '<img src="styles/legend/DeptosCort_2.png" /> Deptos Cort.'
            });
var format_Report_basureros_3 = new ol.format.GeoJSON();
var features_Report_basureros_3 = format_Report_basureros_3.readFeatures(json_Report_basureros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Report_basureros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Report_basureros_3.addFeatures(features_Report_basureros_3);
var lyr_Report_basureros_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Report_basureros_3, 
                style: style_Report_basureros_3,
                interactive: true,
    title: 'Report_basureros<br />\
    <img src="styles/legend/Report_basureros_3_0.png" /> 2020-04-30<br />\
    <img src="styles/legend/Report_basureros_3_1.png" /> 2020-05-01<br />\
    <img src="styles/legend/Report_basureros_3_2.png" /> 2020-05-02<br />\
    <img src="styles/legend/Report_basureros_3_3.png" /> 2020-05-03<br />\
    <img src="styles/legend/Report_basureros_3_4.png" /> 2020-05-04<br />\
    <img src="styles/legend/Report_basureros_3_5.png" /> 2020-05-05<br />\
    <img src="styles/legend/Report_basureros_3_6.png" /> 2020-05-06<br />\
    <img src="styles/legend/Report_basureros_3_7.png" /> <br />'
        });

lyr_Usot_0.setVisible(true);lyr_Municipioscortado_1.setVisible(true);lyr_DeptosCort_2.setVisible(true);lyr_Report_basureros_3.setVisible(true);
var layersList = [lyr_Usot_0,lyr_Municipioscortado_1,lyr_DeptosCort_2,lyr_Report_basureros_3];
lyr_Usot_0.set('fieldAliases', {'GRUPO': 'GRUPO', });
lyr_Municipioscortado_1.set('fieldAliases', {'MUNICI_': 'MUNICI_', 'MUNICI_ID': 'MUNICI_ID', 'COD_MUN': 'COD_MUN', 'MUNICIPIO': 'MUNICIPIO', 'CODDEPTO': 'CODDEPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'CATEGORIA': 'CATEGORIA', 'AREA_CALC': 'AREA_CALC', 'AREA_ENCIC': 'AREA_ENCIC', 'COD_REG': 'COD_REG', 'REGION': 'REGION', });
lyr_DeptosCort_2.set('fieldAliases', {'DEPTOS4_': 'DEPTOS4_', 'DEPTOS4_ID': 'DEPTOS4_ID', 'DEPARTAMEN': 'DEPARTAMEN', 'COUNT': 'COUNT', 'Incendios': 'Incendios', 'TmaxAnualc': 'TmaxAnualc', 'TmaxAnuals': 'TmaxAnuals', 'TmaxAnualm': 'TmaxAnualm', });
lyr_Report_basureros_3.set('fieldAliases', {'Departamento': 'Departamento', 'Municipio': 'Municipio', 'Dirección': 'Dirección', 'Latitud y': 'Latitud y', 'Longitud x': 'Longitud x', 'Fecha_ingreso': 'Fecha_ingreso', });
lyr_Usot_0.set('fieldImages', {'GRUPO': 'TextEdit', });
lyr_Municipioscortado_1.set('fieldImages', {'MUNICI_': 'TextEdit', 'MUNICI_ID': 'TextEdit', 'COD_MUN': 'Range', 'MUNICIPIO': 'TextEdit', 'CODDEPTO': 'Range', 'DEPARTAMEN': 'TextEdit', 'CATEGORIA': 'TextEdit', 'AREA_CALC': 'TextEdit', 'AREA_ENCIC': 'TextEdit', 'COD_REG': 'Range', 'REGION': 'TextEdit', });
lyr_DeptosCort_2.set('fieldImages', {'DEPTOS4_': 'TextEdit', 'DEPTOS4_ID': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'COUNT': 'TextEdit', 'Incendios': 'Range', 'TmaxAnualc': 'TextEdit', 'TmaxAnuals': 'TextEdit', 'TmaxAnualm': 'TextEdit', });
lyr_Report_basureros_3.set('fieldImages', {'Departamento': 'TextEdit', 'Municipio': 'TextEdit', 'Dirección': 'TextEdit', 'Latitud y': 'TextEdit', 'Longitud x': 'TextEdit', 'Fecha_ingreso': 'TextEdit', });
lyr_Usot_0.set('fieldLabels', {'GRUPO': 'inline label', });
lyr_Municipioscortado_1.set('fieldLabels', {'MUNICI_': 'no label', 'MUNICI_ID': 'no label', 'COD_MUN': 'no label', 'MUNICIPIO': 'no label', 'CODDEPTO': 'no label', 'DEPARTAMEN': 'no label', 'CATEGORIA': 'no label', 'AREA_CALC': 'no label', 'AREA_ENCIC': 'no label', 'COD_REG': 'no label', 'REGION': 'no label', });
lyr_DeptosCort_2.set('fieldLabels', {'DEPTOS4_': 'no label', 'DEPTOS4_ID': 'no label', 'DEPARTAMEN': 'no label', 'COUNT': 'no label', 'Incendios': 'no label', 'TmaxAnualc': 'no label', 'TmaxAnuals': 'no label', 'TmaxAnualm': 'no label', });
lyr_Report_basureros_3.set('fieldLabels', {'Departamento': 'no label', 'Municipio': 'no label', 'Dirección': 'no label', 'Latitud y': 'no label', 'Longitud x': 'no label', 'Fecha_ingreso': 'no label', });
lyr_Report_basureros_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});