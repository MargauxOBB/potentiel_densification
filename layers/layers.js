ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([487386.600000, 6744913.100000, 505374.400000, 6762155.239993]);
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
var format_Limitesparcellaires_2 = new ol.format.GeoJSON();
var features_Limitesparcellaires_2 = format_Limitesparcellaires_2.readFeatures(json_Limitesparcellaires_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Limitesparcellaires_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesparcellaires_2.addFeatures(features_Limitesparcellaires_2);
var lyr_Limitesparcellaires_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesparcellaires_2, 
                style: style_Limitesparcellaires_2,
                popuplayertitle: 'Limites parcellaires',
                interactive: false,
                title: '<img src="styles/legend/Limitesparcellaires_2.png" /> Limites parcellaires'
            });
var format_CommunesdelOBB_3 = new ol.format.GeoJSON();
var features_CommunesdelOBB_3 = format_CommunesdelOBB_3.readFeatures(json_CommunesdelOBB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
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
var format_enjeuxpatrimoniaux_4 = new ol.format.GeoJSON();
var features_enjeuxpatrimoniaux_4 = format_enjeuxpatrimoniaux_4.readFeatures(json_enjeuxpatrimoniaux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_enjeuxpatrimoniaux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enjeuxpatrimoniaux_4.addFeatures(features_enjeuxpatrimoniaux_4);
var lyr_enjeuxpatrimoniaux_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enjeuxpatrimoniaux_4, 
                style: style_enjeuxpatrimoniaux_4,
                popuplayertitle: 'enjeux patrimoniaux',
                interactive: false,
                title: '<img src="styles/legend/enjeuxpatrimoniaux_4.png" /> enjeux patrimoniaux'
            });
var format_emplacementsreservs_5 = new ol.format.GeoJSON();
var features_emplacementsreservs_5 = format_emplacementsreservs_5.readFeatures(json_emplacementsreservs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_emplacementsreservs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_emplacementsreservs_5.addFeatures(features_emplacementsreservs_5);
var lyr_emplacementsreservs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_emplacementsreservs_5, 
                style: style_emplacementsreservs_5,
                popuplayertitle: 'emplacements reservés',
                interactive: false,
                title: '<img src="styles/legend/emplacementsreservs_5.png" /> emplacements reservés'
            });
var format_enjeuxcologiques_6 = new ol.format.GeoJSON();
var features_enjeuxcologiques_6 = format_enjeuxcologiques_6.readFeatures(json_enjeuxcologiques_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_enjeuxcologiques_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enjeuxcologiques_6.addFeatures(features_enjeuxcologiques_6);
var lyr_enjeuxcologiques_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enjeuxcologiques_6, 
                style: style_enjeuxcologiques_6,
                popuplayertitle: 'enjeux écologiques',
                interactive: false,
                title: '<img src="styles/legend/enjeuxcologiques_6.png" /> enjeux écologiques'
            });
var format_zonageassainissementcollectif_7 = new ol.format.GeoJSON();
var features_zonageassainissementcollectif_7 = format_zonageassainissementcollectif_7.readFeatures(json_zonageassainissementcollectif_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_zonageassainissementcollectif_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonageassainissementcollectif_7.addFeatures(features_zonageassainissementcollectif_7);
var lyr_zonageassainissementcollectif_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonageassainissementcollectif_7, 
                style: style_zonageassainissementcollectif_7,
                popuplayertitle: 'zonage assainissement collectif',
                interactive: false,
                title: '<img src="styles/legend/zonageassainissementcollectif_7.png" /> zonage assainissement collectif'
            });
var format_tempsdemarchejusquauxcommercesetservices_8 = new ol.format.GeoJSON();
var features_tempsdemarchejusquauxcommercesetservices_8 = format_tempsdemarchejusquauxcommercesetservices_8.readFeatures(json_tempsdemarchejusquauxcommercesetservices_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_tempsdemarchejusquauxcommercesetservices_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempsdemarchejusquauxcommercesetservices_8.addFeatures(features_tempsdemarchejusquauxcommercesetservices_8);
var lyr_tempsdemarchejusquauxcommercesetservices_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempsdemarchejusquauxcommercesetservices_8, 
                style: style_tempsdemarchejusquauxcommercesetservices_8,
                popuplayertitle: 'temps de marche jusqu\'aux commerces et services',
                interactive: false,
    title: 'temps de marche jusqu\'aux commerces et services<br />\
    <img src="styles/legend/tempsdemarchejusquauxcommercesetservices_8_0.png" /> 5 min<br />\
    <img src="styles/legend/tempsdemarchejusquauxcommercesetservices_8_1.png" /> 10 min<br />' });
var format_commercesetservices_9 = new ol.format.GeoJSON();
var features_commercesetservices_9 = format_commercesetservices_9.readFeatures(json_commercesetservices_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_commercesetservices_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commercesetservices_9.addFeatures(features_commercesetservices_9);
var lyr_commercesetservices_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commercesetservices_9, 
                style: style_commercesetservices_9,
                popuplayertitle: 'commerces et services',
                interactive: false,
                title: '<img src="styles/legend/commercesetservices_9.png" /> commerces et services'
            });
var format_Aidesladcision_10 = new ol.format.GeoJSON();
var features_Aidesladcision_10 = format_Aidesladcision_10.readFeatures(json_Aidesladcision_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Aidesladcision_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aidesladcision_10.addFeatures(features_Aidesladcision_10);
var lyr_Aidesladcision_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aidesladcision_10, 
                style: style_Aidesladcision_10,
                popuplayertitle: 'Aides à la décision',
                interactive: false,
    title: 'Aides à la décision<br />\
    <img src="styles/legend/Aidesladcision_10_0.png" /> espace boisé<br />\
    <img src="styles/legend/Aidesladcision_10_1.png" /> loin des services (à pieds)<br />\
    <img src="styles/legend/Aidesladcision_10_2.png" /> pas d\'assainissement collectif<br />\
    <img src="styles/legend/Aidesladcision_10_3.png" /> pas d\'accès<br />\
    <img src="styles/legend/Aidesladcision_10_4.png" /> proche de la voie ferrée<br />\
    <img src="styles/legend/Aidesladcision_10_5.png" /> risque feu de forêt<br />\
    <img src="styles/legend/Aidesladcision_10_6.png" /> lisière agricole<br />\
    <img src="styles/legend/Aidesladcision_10_7.png" /> risque RGA<br />' });
var format_Potentieldedensification_11 = new ol.format.GeoJSON();
var features_Potentieldedensification_11 = format_Potentieldedensification_11.readFeatures(json_Potentieldedensification_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Potentieldedensification_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentieldedensification_11.addFeatures(features_Potentieldedensification_11);
var lyr_Potentieldedensification_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentieldedensification_11, 
                style: style_Potentieldedensification_11,
                popuplayertitle: 'Potentiel de densification',
                interactive: true,
    title: 'Potentiel de densification<br />\
    <img src="styles/legend/Potentieldedensification_11_0.png" /> Je peux densifier<br />\
    <img src="styles/legend/Potentieldedensification_11_1.png" /> J\'étudie les possibilités<br />\
    <img src="styles/legend/Potentieldedensification_11_2.png" /> Je ne peux pas densifier<br />' });
var format_Enveloppeurbaine_12 = new ol.format.GeoJSON();
var features_Enveloppeurbaine_12 = format_Enveloppeurbaine_12.readFeatures(json_Enveloppeurbaine_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Enveloppeurbaine_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enveloppeurbaine_12.addFeatures(features_Enveloppeurbaine_12);
var lyr_Enveloppeurbaine_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enveloppeurbaine_12, 
                style: style_Enveloppeurbaine_12,
                popuplayertitle: 'Enveloppe urbaine',
                interactive: false,
                title: '<img src="styles/legend/Enveloppeurbaine_12.png" /> Enveloppe urbaine'
            });
var group_Critresdeselection = new ol.layer.Group({
                                layers: [lyr_enjeuxpatrimoniaux_4,lyr_emplacementsreservs_5,lyr_enjeuxcologiques_6,lyr_zonageassainissementcollectif_7,lyr_tempsdemarchejusquauxcommercesetservices_8,lyr_commercesetservices_9,],
                                fold: 'open',
                                title: 'Critères de selection'});
var group_Fondsdecarte = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_Limitesparcellaires_2,lyr_CommunesdelOBB_3,],
                                fold: 'open',
                                title: 'Fonds de carte'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_Limitesparcellaires_2.setVisible(true);lyr_CommunesdelOBB_3.setVisible(true);lyr_enjeuxpatrimoniaux_4.setVisible(true);lyr_emplacementsreservs_5.setVisible(true);lyr_enjeuxcologiques_6.setVisible(true);lyr_zonageassainissementcollectif_7.setVisible(true);lyr_tempsdemarchejusquauxcommercesetservices_8.setVisible(true);lyr_commercesetservices_9.setVisible(true);lyr_Aidesladcision_10.setVisible(true);lyr_Potentieldedensification_11.setVisible(true);lyr_Enveloppeurbaine_12.setVisible(true);
var layersList = [group_Fondsdecarte,group_Critresdeselection,lyr_Aidesladcision_10,lyr_Potentieldedensification_11,lyr_Enveloppeurbaine_12];
lyr_Limitesparcellaires_2.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', });
lyr_CommunesdelOBB_3.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'ARMATURE': 'ARMATURE', 'DENSITE': 'DENSITE', 'NOM_COM': 'NOM_COM', });
lyr_enjeuxpatrimoniaux_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_emplacementsreservs_5.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_enjeuxcologiques_6.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_zonageassainissementcollectif_7.set('fieldAliases', {'insee': 'insee', 'z_lib2': 'z_lib2', 'z_stype': 'z_stype', 'datvalid': 'datvalid', 'z_dat_mj': 'z_dat_mj', 'z_srf_ha': 'z_srf_ha', 'gid': 'gid', });
lyr_tempsdemarchejusquauxcommercesetservices_8.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_commercesetservices_9.set('fieldAliases', {'osm_id': 'osm_id', 'type': 'type', 'name': 'name', 'brand': 'brand', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'level': 'level', 'siret': 'siret', 'profession': 'profession', 'wikidata': 'wikidata', 'website': 'website', 'phone': 'phone', 'email': 'email', 'facebook': 'facebook', 'address': 'address', 'com_insee': 'com_insee', 'com_nom': 'com_nom', 'last_updat': 'last_updat', 'region': 'region', 'code_regio': 'code_regio', 'departemen': 'departemen', 'code_depar': 'code_depar', 'commune': 'commune', 'code_commu': 'code_commu', 'opening__1': 'opening__1', 'professi_1': 'professi_1', 'last_upd_1': 'last_upd_1', 'code_reg_1': 'code_reg_1', 'departem_1': 'departem_1', 'code_dep_1': 'code_dep_1', 'code_com_1': 'code_com_1', 'layer': 'layer', 'path': 'path', });
lyr_Aidesladcision_10.set('fieldAliases', {'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'Superficie': 'Superficie', 'Densité': 'Densité', 'Superficie_1': 'Superficie_1', 'Commune': 'Commune', 'Logements': 'Logements', 'Etat': 'Etat', 'Note': 'Note', 'Parcelle': 'Parcelle', });
lyr_Potentieldedensification_11.set('fieldAliases', {'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'Superficie': 'Superficie', 'Densité': 'Densité', 'Superficie_ha': 'Superficie_ha', 'Commune': 'Commune', 'Logements': 'Logements', 'Etat': 'Etat', 'Note': 'Note', 'Parcelle': 'Parcelle', });
lyr_Enveloppeurbaine_12.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', 'Densité': 'Densité', });
lyr_Limitesparcellaires_2.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_CommunesdelOBB_3.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'ARMATURE': 'TextEdit', 'DENSITE': '', 'NOM_COM': '', });
lyr_enjeuxpatrimoniaux_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_emplacementsreservs_5.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_enjeuxcologiques_6.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_zonageassainissementcollectif_7.set('fieldImages', {'insee': 'TextEdit', 'z_lib2': 'TextEdit', 'z_stype': 'TextEdit', 'datvalid': 'TextEdit', 'z_dat_mj': 'TextEdit', 'z_srf_ha': 'TextEdit', 'gid': 'Range', });
lyr_tempsdemarchejusquauxcommercesetservices_8.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_commercesetservices_9.set('fieldImages', {'osm_id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'brand': 'TextEdit', 'operator': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'level': 'TextEdit', 'siret': 'TextEdit', 'profession': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'facebook': 'TextEdit', 'address': 'TextEdit', 'com_insee': 'TextEdit', 'com_nom': 'TextEdit', 'last_updat': 'TextEdit', 'region': 'TextEdit', 'code_regio': 'TextEdit', 'departemen': 'TextEdit', 'code_depar': 'TextEdit', 'commune': 'TextEdit', 'code_commu': 'TextEdit', 'opening__1': 'TextEdit', 'professi_1': 'TextEdit', 'last_upd_1': 'TextEdit', 'code_reg_1': 'TextEdit', 'departem_1': 'TextEdit', 'code_dep_1': 'TextEdit', 'code_com_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Aidesladcision_10.set('fieldImages', {'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'Superficie': 'TextEdit', 'Densité': 'TextEdit', 'Superficie_1': 'TextEdit', 'Commune': 'TextEdit', 'Logements': 'TextEdit', 'Etat': 'TextEdit', 'Note': 'TextEdit', 'Parcelle': 'TextEdit', });
lyr_Potentieldedensification_11.set('fieldImages', {'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'Superficie': 'TextEdit', 'Densité': 'TextEdit', 'Superficie_ha': 'TextEdit', 'Commune': 'TextEdit', 'Logements': 'TextEdit', 'Etat': 'TextEdit', 'Note': 'TextEdit', 'Parcelle': 'TextEdit', });
lyr_Enveloppeurbaine_12.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', 'Densité': '', });
lyr_Limitesparcellaires_2.set('fieldLabels', {'id': 'no label', 'commune': 'no label', 'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_CommunesdelOBB_3.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'ARMATURE': 'no label', 'DENSITE': 'no label', 'NOM_COM': 'no label', });
lyr_enjeuxpatrimoniaux_4.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_emplacementsreservs_5.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_enjeuxcologiques_6.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_zonageassainissementcollectif_7.set('fieldLabels', {'insee': 'no label', 'z_lib2': 'no label', 'z_stype': 'no label', 'datvalid': 'no label', 'z_dat_mj': 'no label', 'z_srf_ha': 'no label', 'gid': 'no label', });
lyr_tempsdemarchejusquauxcommercesetservices_8.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_commercesetservices_9.set('fieldLabels', {'osm_id': 'no label', 'type': 'no label', 'name': 'no label', 'brand': 'no label', 'operator': 'no label', 'wheelchair': 'no label', 'opening_ho': 'no label', 'level': 'no label', 'siret': 'no label', 'profession': 'no label', 'wikidata': 'no label', 'website': 'no label', 'phone': 'no label', 'email': 'no label', 'facebook': 'no label', 'address': 'no label', 'com_insee': 'no label', 'com_nom': 'no label', 'last_updat': 'no label', 'region': 'no label', 'code_regio': 'no label', 'departemen': 'no label', 'code_depar': 'no label', 'commune': 'no label', 'code_commu': 'no label', 'opening__1': 'no label', 'professi_1': 'no label', 'last_upd_1': 'no label', 'code_reg_1': 'no label', 'departem_1': 'no label', 'code_dep_1': 'no label', 'code_com_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Aidesladcision_10.set('fieldLabels', {'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'Superficie': 'inline label - visible with data', 'Densité': 'inline label - visible with data', 'Superficie_1': 'no label', 'Commune': 'header label - visible with data', 'Logements': 'inline label - visible with data', 'Etat': 'inline label - visible with data', 'Note': 'inline label - visible with data', 'Parcelle': 'header label - visible with data', });
lyr_Potentieldedensification_11.set('fieldLabels', {'prefixe': 'hidden field', 'section': 'hidden field', 'numero': 'hidden field', 'Superficie': 'hidden field', 'Densité': 'inline label - always visible', 'Superficie_ha': 'inline label - always visible', 'Commune': 'hidden field', 'Logements': 'inline label - always visible', 'Etat': 'inline label - always visible', 'Note': 'inline label - always visible', 'Parcelle': 'inline label - always visible', });
lyr_Enveloppeurbaine_12.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', 'Densité': 'no label', });
lyr_Enveloppeurbaine_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});