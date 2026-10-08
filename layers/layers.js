ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([16984.315574, 6068710.257999, 44626.677406, 6095356.582759]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Potentieldedensification_2 = new ol.format.GeoJSON();
var features_Potentieldedensification_2 = format_Potentieldedensification_2.readFeatures(json_Potentieldedensification_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potentieldedensification_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentieldedensification_2.addFeatures(features_Potentieldedensification_2);
var lyr_Potentieldedensification_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentieldedensification_2, 
                style: style_Potentieldedensification_2,
                popuplayertitle: 'Potentiel de densification',
                interactive: true,
    title: 'Potentiel de densification<br />\
    <img src="styles/legend/Potentieldedensification_2_0.png" /> a maintenir<br />\
    <img src="styles/legend/Potentieldedensification_2_1.png" /> a supprimer<br />' });
var format_CommunesdelOBB_3 = new ol.format.GeoJSON();
var features_CommunesdelOBB_3 = format_CommunesdelOBB_3.readFeatures(json_CommunesdelOBB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesdelOBB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesdelOBB_3.addFeatures(features_CommunesdelOBB_3);
var lyr_CommunesdelOBB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesdelOBB_3, 
                style: style_CommunesdelOBB_3,
                popuplayertitle: 'Communes de l\'OBB',
                interactive: false,
                title: '<img src="styles/legend/CommunesdelOBB_3.png" /> Communes de l\'OBB'
            });
var format_Enveloppeurbaine_4 = new ol.format.GeoJSON();
var features_Enveloppeurbaine_4 = format_Enveloppeurbaine_4.readFeatures(json_Enveloppeurbaine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enveloppeurbaine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enveloppeurbaine_4.addFeatures(features_Enveloppeurbaine_4);
var lyr_Enveloppeurbaine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enveloppeurbaine_4, 
                style: style_Enveloppeurbaine_4,
                popuplayertitle: 'Enveloppe urbaine',
                interactive: false,
                title: '<img src="styles/legend/Enveloppeurbaine_4.png" /> Enveloppe urbaine'
            });
var group_Critresdeselection = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Critères de selection'});
var group_Fondsdecarte = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,],
                                fold: 'open',
                                title: 'Fonds de carte'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_Potentieldedensification_2.setVisible(true);lyr_CommunesdelOBB_3.setVisible(true);lyr_Enveloppeurbaine_4.setVisible(true);
var layersList = [group_Fondsdecarte,lyr_Potentieldedensification_2,lyr_CommunesdelOBB_3,lyr_Enveloppeurbaine_4];
lyr_Potentieldedensification_2.set('fieldAliases', {'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'Densité': 'Densité', 'Superficie': 'Superficie', 'Commune': 'Commune', 'Logements': 'Logements', 'Etat': 'Etat', 'Note': 'Note', 'Parcelle': 'Parcelle', });
lyr_CommunesdelOBB_3.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'ARMATURE': 'ARMATURE', 'DENSITE': 'DENSITE', 'NOM_COM': 'NOM_COM', });
lyr_Enveloppeurbaine_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Potentieldedensification_2.set('fieldImages', {'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'Densité': 'TextEdit', 'Superficie': 'TextEdit', 'Commune': 'TextEdit', 'Logements': 'TextEdit', 'Etat': 'TextEdit', 'Note': 'TextEdit', 'Parcelle': 'TextEdit', });
lyr_CommunesdelOBB_3.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'ARMATURE': 'TextEdit', 'DENSITE': '', 'NOM_COM': '', });
lyr_Enveloppeurbaine_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Potentieldedensification_2.set('fieldLabels', {'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'Densité': 'no label', 'Superficie': 'no label', 'Commune': 'header label - visible with data', 'Logements': 'no label', 'Etat': 'inline label - visible with data', 'Note': 'inline label - visible with data', 'Parcelle': 'header label - visible with data', });
lyr_CommunesdelOBB_3.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'ARMATURE': 'no label', 'DENSITE': 'no label', 'NOM_COM': 'no label', });
lyr_Enveloppeurbaine_4.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_Enveloppeurbaine_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});