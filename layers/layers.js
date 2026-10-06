var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_potentiel_densification_1 = new ol.format.GeoJSON();
var features_potentiel_densification_1 = format_potentiel_densification_1.readFeatures(json_potentiel_densification_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_potentiel_densification_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potentiel_densification_1.addFeatures(features_potentiel_densification_1);
var lyr_potentiel_densification_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_potentiel_densification_1, 
                style: style_potentiel_densification_1,
                popuplayertitle: 'potentiel_densification',
                interactive: true,
    title: 'potentiel_densification<br />\
    <img src="styles/legend/potentiel_densification_1_0.png" /> a maintenir<br />\
    <img src="styles/legend/potentiel_densification_1_1.png" /> a supprimer<br />\
    <img src="styles/legend/potentiel_densification_1_2.png" /> <br />' });
var format_OBB_2 = new ol.format.GeoJSON();
var features_OBB_2 = format_OBB_2.readFeatures(json_OBB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBB_2.addFeatures(features_OBB_2);
var lyr_OBB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBB_2, 
                style: style_OBB_2,
                popuplayertitle: 'OBB',
                interactive: false,
                title: '<img src="styles/legend/OBB_2.png" /> OBB'
            });
var format_parcelles_3 = new ol.format.GeoJSON();
var features_parcelles_3 = format_parcelles_3.readFeatures(json_parcelles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelles_3.addFeatures(features_parcelles_3);
var lyr_parcelles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelles_3, 
                style: style_parcelles_3,
                popuplayertitle: 'parcelles',
                interactive: false,
                title: '<img src="styles/legend/parcelles_3.png" /> parcelles'
            });
var format_EU_OBB_010126_4 = new ol.format.GeoJSON();
var features_EU_OBB_010126_4 = format_EU_OBB_010126_4.readFeatures(json_EU_OBB_010126_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EU_OBB_010126_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EU_OBB_010126_4.addFeatures(features_EU_OBB_010126_4);
var lyr_EU_OBB_010126_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EU_OBB_010126_4, 
                style: style_EU_OBB_010126_4,
                popuplayertitle: 'EU_OBB_010126',
                interactive: false,
                title: '<img src="styles/legend/EU_OBB_010126_4.png" /> EU_OBB_010126'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_potentiel_densification_1.setVisible(true);lyr_OBB_2.setVisible(true);lyr_parcelles_3.setVisible(true);lyr_EU_OBB_010126_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_potentiel_densification_1,lyr_OBB_2,lyr_parcelles_3,lyr_EU_OBB_010126_4];
lyr_potentiel_densification_1.set('fieldAliases', {'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'Densité l': 'Densité l', 'Superfcie ': 'Superfcie ', 'Commune': 'Commune', 'Nombre de ': 'Nombre de ', 'Etat': 'Etat', 'Note': 'Note', 'Parcelle': 'Parcelle', });
lyr_OBB_2.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'ARMATURE': 'ARMATURE', 'DENSITE': 'DENSITE', 'NOM_COM': 'NOM_COM', });
lyr_parcelles_3.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', });
lyr_EU_OBB_010126_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_potentiel_densification_1.set('fieldImages', {'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'Densité l': 'TextEdit', 'Superfcie ': 'TextEdit', 'Commune': 'TextEdit', 'Nombre de ': 'TextEdit', 'Etat': 'TextEdit', 'Note': 'TextEdit', 'Parcelle': 'TextEdit', });
lyr_OBB_2.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'ARMATURE': 'TextEdit', 'DENSITE': '', 'NOM_COM': '', });
lyr_parcelles_3.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_EU_OBB_010126_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_potentiel_densification_1.set('fieldLabels', {'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'Densité l': 'no label', 'Superfcie ': 'no label', 'Commune': 'header label - visible with data', 'Nombre de ': 'no label', 'Etat': 'no label', 'Note': 'no label', 'Parcelle': 'header label - visible with data', });
lyr_OBB_2.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'ARMATURE': 'no label', 'DENSITE': 'no label', 'NOM_COM': 'no label', });
lyr_parcelles_3.set('fieldLabels', {'id': 'no label', 'commune': 'no label', 'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_EU_OBB_010126_4.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_EU_OBB_010126_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});