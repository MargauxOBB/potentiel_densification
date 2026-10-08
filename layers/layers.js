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
var format_enjeux_patrimoniaux_2 = new ol.format.GeoJSON();
var features_enjeux_patrimoniaux_2 = format_enjeux_patrimoniaux_2.readFeatures(json_enjeux_patrimoniaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_enjeux_patrimoniaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enjeux_patrimoniaux_2.addFeatures(features_enjeux_patrimoniaux_2);
var lyr_enjeux_patrimoniaux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enjeux_patrimoniaux_2, 
                style: style_enjeux_patrimoniaux_2,
                popuplayertitle: 'enjeux_patrimoniaux',
                interactive: false,
                title: '<img src="styles/legend/enjeux_patrimoniaux_2.png" /> enjeux_patrimoniaux'
            });
var format_emplacements_reserves_3 = new ol.format.GeoJSON();
var features_emplacements_reserves_3 = format_emplacements_reserves_3.readFeatures(json_emplacements_reserves_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_emplacements_reserves_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_emplacements_reserves_3.addFeatures(features_emplacements_reserves_3);
var lyr_emplacements_reserves_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_emplacements_reserves_3, 
                style: style_emplacements_reserves_3,
                popuplayertitle: 'emplacements_reserves',
                interactive: false,
                title: '<img src="styles/legend/emplacements_reserves_3.png" /> emplacements_reserves'
            });
var format_enjeux_ecologiques_4 = new ol.format.GeoJSON();
var features_enjeux_ecologiques_4 = format_enjeux_ecologiques_4.readFeatures(json_enjeux_ecologiques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_enjeux_ecologiques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enjeux_ecologiques_4.addFeatures(features_enjeux_ecologiques_4);
var lyr_enjeux_ecologiques_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enjeux_ecologiques_4, 
                style: style_enjeux_ecologiques_4,
                popuplayertitle: 'enjeux_ecologiques',
                interactive: false,
                title: '<img src="styles/legend/enjeux_ecologiques_4.png" /> enjeux_ecologiques'
            });
var format_risque_feu_de_foret_5 = new ol.format.GeoJSON();
var features_risque_feu_de_foret_5 = format_risque_feu_de_foret_5.readFeatures(json_risque_feu_de_foret_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_risque_feu_de_foret_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_risque_feu_de_foret_5.addFeatures(features_risque_feu_de_foret_5);
var lyr_risque_feu_de_foret_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_risque_feu_de_foret_5, 
                style: style_risque_feu_de_foret_5,
                popuplayertitle: 'risque_feu_de_foret',
                interactive: false,
                title: '<img src="styles/legend/risque_feu_de_foret_5.png" /> risque_feu_de_foret'
            });
var format_zonageassainissementcollectif_6 = new ol.format.GeoJSON();
var features_zonageassainissementcollectif_6 = format_zonageassainissementcollectif_6.readFeatures(json_zonageassainissementcollectif_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonageassainissementcollectif_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonageassainissementcollectif_6.addFeatures(features_zonageassainissementcollectif_6);
var lyr_zonageassainissementcollectif_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonageassainissementcollectif_6, 
                style: style_zonageassainissementcollectif_6,
                popuplayertitle: 'zonage assainissement collectif',
                interactive: false,
                title: '<img src="styles/legend/zonageassainissementcollectif_6.png" /> zonage assainissement collectif'
            });
var format_temps_de_marche_7 = new ol.format.GeoJSON();
var features_temps_de_marche_7 = format_temps_de_marche_7.readFeatures(json_temps_de_marche_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temps_de_marche_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temps_de_marche_7.addFeatures(features_temps_de_marche_7);
var lyr_temps_de_marche_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temps_de_marche_7, 
                style: style_temps_de_marche_7,
                popuplayertitle: 'temps_de_marche',
                interactive: false,
    title: 'temps_de_marche<br />\
    <img src="styles/legend/temps_de_marche_7_0.png" /> 5 min<br />\
    <img src="styles/legend/temps_de_marche_7_1.png" /> 10 min<br />' });
var format_commerces_services_OBB_8 = new ol.format.GeoJSON();
var features_commerces_services_OBB_8 = format_commerces_services_OBB_8.readFeatures(json_commerces_services_OBB_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commerces_services_OBB_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commerces_services_OBB_8.addFeatures(features_commerces_services_OBB_8);
var lyr_commerces_services_OBB_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commerces_services_OBB_8, 
                style: style_commerces_services_OBB_8,
                popuplayertitle: 'commerces_services_OBB',
                interactive: false,
                title: '<img src="styles/legend/commerces_services_OBB_8.png" /> commerces_services_OBB'
            });
var format_Potentieldedensification_9 = new ol.format.GeoJSON();
var features_Potentieldedensification_9 = format_Potentieldedensification_9.readFeatures(json_Potentieldedensification_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potentieldedensification_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentieldedensification_9.addFeatures(features_Potentieldedensification_9);
var lyr_Potentieldedensification_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentieldedensification_9, 
                style: style_Potentieldedensification_9,
                popuplayertitle: 'Potentiel de densification',
                interactive: true,
    title: 'Potentiel de densification<br />\
    <img src="styles/legend/Potentieldedensification_9_0.png" /> a maintenir<br />\
    <img src="styles/legend/Potentieldedensification_9_1.png" /> a supprimer<br />' });
var format_CommunesdelOBB_10 = new ol.format.GeoJSON();
var features_CommunesdelOBB_10 = format_CommunesdelOBB_10.readFeatures(json_CommunesdelOBB_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesdelOBB_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesdelOBB_10.addFeatures(features_CommunesdelOBB_10);
var lyr_CommunesdelOBB_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesdelOBB_10, 
                style: style_CommunesdelOBB_10,
                popuplayertitle: 'Communes de l\'OBB',
                interactive: false,
                title: '<img src="styles/legend/CommunesdelOBB_10.png" /> Communes de l\'OBB'
            });
var format_Enveloppeurbaine_11 = new ol.format.GeoJSON();
var features_Enveloppeurbaine_11 = format_Enveloppeurbaine_11.readFeatures(json_Enveloppeurbaine_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enveloppeurbaine_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enveloppeurbaine_11.addFeatures(features_Enveloppeurbaine_11);
var lyr_Enveloppeurbaine_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enveloppeurbaine_11, 
                style: style_Enveloppeurbaine_11,
                popuplayertitle: 'Enveloppe urbaine',
                interactive: false,
                title: '<img src="styles/legend/Enveloppeurbaine_11.png" /> Enveloppe urbaine'
            });
var group_Critresdeselection = new ol.layer.Group({
                                layers: [lyr_enjeux_patrimoniaux_2,lyr_emplacements_reserves_3,lyr_enjeux_ecologiques_4,lyr_risque_feu_de_foret_5,lyr_zonageassainissementcollectif_6,lyr_temps_de_marche_7,lyr_commerces_services_OBB_8,],
                                fold: 'open',
                                title: 'Critères de selection'});
var group_Fondsdecarte = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,],
                                fold: 'open',
                                title: 'Fonds de carte'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_enjeux_patrimoniaux_2.setVisible(true);lyr_emplacements_reserves_3.setVisible(true);lyr_enjeux_ecologiques_4.setVisible(true);lyr_risque_feu_de_foret_5.setVisible(true);lyr_zonageassainissementcollectif_6.setVisible(true);lyr_temps_de_marche_7.setVisible(true);lyr_commerces_services_OBB_8.setVisible(true);lyr_Potentieldedensification_9.setVisible(true);lyr_CommunesdelOBB_10.setVisible(true);lyr_Enveloppeurbaine_11.setVisible(true);
var layersList = [group_Fondsdecarte,group_Critresdeselection,lyr_Potentieldedensification_9,lyr_CommunesdelOBB_10,lyr_Enveloppeurbaine_11];
lyr_enjeux_patrimoniaux_2.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_emplacements_reserves_3.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_enjeux_ecologiques_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_risque_feu_de_foret_5.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'surf_ha': 'surf_ha', 'alea': 'alea', 'a_t_faib': 'a_t_faib', 'a_t_moy': 'a_t_moy', 'a_t_fort': 'a_t_fort', 'a_t_tfort': 'a_t_tfort', 'enjeu': 'enjeu', 'e_tf': 'e_tf', 'e_tfm': 'e_tfm', 'def': 'def', 'd_tf': 'd_tf', 'd_tfm': 'd_tfm', 'def_ccr': 'def_ccr', 'd_tf_ccr': 'd_tf_ccr', 'd_tfm_ccr': 'd_tfm_ccr', 'risque': 'risque', 'r_t_faib': 'r_t_faib', 'r_t_moy': 'r_t_moy', 'r_t_fort': 'r_t_fort', 'r_t_tfort': 'r_t_tfort', 'risque_ccr': 'risque_ccr', 'r_t_faib_c': 'r_t_faib_c', 'r_t_mo_ccr': 'r_t_mo_ccr', 'r_t_fort_c': 'r_t_fort_c', 'r_t_tfort_': 'r_t_tfort_', });
lyr_zonageassainissementcollectif_6.set('fieldAliases', {'insee': 'insee', 'z_lib2': 'z_lib2', 'z_stype': 'z_stype', 'datvalid': 'datvalid', 'z_dat_mj': 'z_dat_mj', 'z_srf_ha': 'z_srf_ha', 'gid': 'gid', });
lyr_temps_de_marche_7.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_commerces_services_OBB_8.set('fieldAliases', {'osm_id': 'osm_id', 'type': 'type', 'name': 'name', 'brand': 'brand', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'level': 'level', 'siret': 'siret', 'profession': 'profession', 'wikidata': 'wikidata', 'website': 'website', 'phone': 'phone', 'email': 'email', 'facebook': 'facebook', 'address': 'address', 'com_insee': 'com_insee', 'com_nom': 'com_nom', 'last_updat': 'last_updat', 'region': 'region', 'code_regio': 'code_regio', 'departemen': 'departemen', 'code_depar': 'code_depar', 'commune': 'commune', 'code_commu': 'code_commu', 'opening__1': 'opening__1', 'professi_1': 'professi_1', 'last_upd_1': 'last_upd_1', 'code_reg_1': 'code_reg_1', 'departem_1': 'departem_1', 'code_dep_1': 'code_dep_1', 'code_com_1': 'code_com_1', 'layer': 'layer', 'path': 'path', });
lyr_Potentieldedensification_9.set('fieldAliases', {'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'Densité': 'Densité', 'Superficie': 'Superficie', 'Commune': 'Commune', 'Logements': 'Logements', 'Etat': 'Etat', 'Note': 'Note', 'Parcelle': 'Parcelle', });
lyr_CommunesdelOBB_10.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'ARMATURE': 'ARMATURE', 'DENSITE': 'DENSITE', 'NOM_COM': 'NOM_COM', });
lyr_Enveloppeurbaine_11.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_enjeux_patrimoniaux_2.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_emplacements_reserves_3.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_enjeux_ecologiques_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_risque_feu_de_foret_5.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'surf_ha': 'TextEdit', 'alea': 'Range', 'a_t_faib': 'TextEdit', 'a_t_moy': 'TextEdit', 'a_t_fort': 'TextEdit', 'a_t_tfort': 'TextEdit', 'enjeu': 'Range', 'e_tf': 'TextEdit', 'e_tfm': 'TextEdit', 'def': 'Range', 'd_tf': 'TextEdit', 'd_tfm': 'TextEdit', 'def_ccr': 'Range', 'd_tf_ccr': 'TextEdit', 'd_tfm_ccr': 'TextEdit', 'risque': 'Range', 'r_t_faib': 'TextEdit', 'r_t_moy': 'TextEdit', 'r_t_fort': 'TextEdit', 'r_t_tfort': 'TextEdit', 'risque_ccr': 'Range', 'r_t_faib_c': 'TextEdit', 'r_t_mo_ccr': 'TextEdit', 'r_t_fort_c': 'TextEdit', 'r_t_tfort_': 'TextEdit', });
lyr_zonageassainissementcollectif_6.set('fieldImages', {'insee': 'TextEdit', 'z_lib2': 'TextEdit', 'z_stype': 'TextEdit', 'datvalid': 'TextEdit', 'z_dat_mj': 'TextEdit', 'z_srf_ha': 'TextEdit', 'gid': 'Range', });
lyr_temps_de_marche_7.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_commerces_services_OBB_8.set('fieldImages', {'osm_id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'brand': 'TextEdit', 'operator': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'level': 'TextEdit', 'siret': 'TextEdit', 'profession': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'facebook': 'TextEdit', 'address': 'TextEdit', 'com_insee': 'TextEdit', 'com_nom': 'TextEdit', 'last_updat': 'TextEdit', 'region': 'TextEdit', 'code_regio': 'TextEdit', 'departemen': 'TextEdit', 'code_depar': 'TextEdit', 'commune': 'TextEdit', 'code_commu': 'TextEdit', 'opening__1': 'TextEdit', 'professi_1': 'TextEdit', 'last_upd_1': 'TextEdit', 'code_reg_1': 'TextEdit', 'departem_1': 'TextEdit', 'code_dep_1': 'TextEdit', 'code_com_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Potentieldedensification_9.set('fieldImages', {'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'Densité': 'TextEdit', 'Superficie': 'TextEdit', 'Commune': 'TextEdit', 'Logements': 'TextEdit', 'Etat': 'TextEdit', 'Note': 'TextEdit', 'Parcelle': 'TextEdit', });
lyr_CommunesdelOBB_10.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'ARMATURE': 'TextEdit', 'DENSITE': '', 'NOM_COM': '', });
lyr_Enveloppeurbaine_11.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_enjeux_patrimoniaux_2.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_emplacements_reserves_3.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_enjeux_ecologiques_4.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_risque_feu_de_foret_5.set('fieldLabels', {'fid': 'no label', 'nom': 'no label', 'surf_ha': 'no label', 'alea': 'no label', 'a_t_faib': 'no label', 'a_t_moy': 'no label', 'a_t_fort': 'no label', 'a_t_tfort': 'no label', 'enjeu': 'no label', 'e_tf': 'no label', 'e_tfm': 'no label', 'def': 'no label', 'd_tf': 'no label', 'd_tfm': 'no label', 'def_ccr': 'no label', 'd_tf_ccr': 'no label', 'd_tfm_ccr': 'no label', 'risque': 'no label', 'r_t_faib': 'no label', 'r_t_moy': 'no label', 'r_t_fort': 'no label', 'r_t_tfort': 'no label', 'risque_ccr': 'no label', 'r_t_faib_c': 'no label', 'r_t_mo_ccr': 'no label', 'r_t_fort_c': 'no label', 'r_t_tfort_': 'no label', });
lyr_zonageassainissementcollectif_6.set('fieldLabels', {'insee': 'no label', 'z_lib2': 'no label', 'z_stype': 'no label', 'datvalid': 'no label', 'z_dat_mj': 'no label', 'z_srf_ha': 'no label', 'gid': 'no label', });
lyr_temps_de_marche_7.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_commerces_services_OBB_8.set('fieldLabels', {'osm_id': 'no label', 'type': 'no label', 'name': 'no label', 'brand': 'no label', 'operator': 'no label', 'wheelchair': 'no label', 'opening_ho': 'no label', 'level': 'no label', 'siret': 'no label', 'profession': 'no label', 'wikidata': 'no label', 'website': 'no label', 'phone': 'no label', 'email': 'no label', 'facebook': 'no label', 'address': 'no label', 'com_insee': 'no label', 'com_nom': 'no label', 'last_updat': 'no label', 'region': 'no label', 'code_regio': 'no label', 'departemen': 'no label', 'code_depar': 'no label', 'commune': 'no label', 'code_commu': 'no label', 'opening__1': 'no label', 'professi_1': 'no label', 'last_upd_1': 'no label', 'code_reg_1': 'no label', 'departem_1': 'no label', 'code_dep_1': 'no label', 'code_com_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Potentieldedensification_9.set('fieldLabels', {'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'Densité': 'no label', 'Superficie': 'no label', 'Commune': 'header label - visible with data', 'Logements': 'no label', 'Etat': 'inline label - visible with data', 'Note': 'no label', 'Parcelle': 'header label - visible with data', });
lyr_CommunesdelOBB_10.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'ARMATURE': 'no label', 'DENSITE': 'no label', 'NOM_COM': 'no label', });
lyr_Enveloppeurbaine_11.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_Enveloppeurbaine_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});