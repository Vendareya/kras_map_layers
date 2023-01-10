var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Граница городского района'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Граница города'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: 'Коэффициент плотности застройки<br />\
    <img src="styles/legend/_3_0.png" /> 0 - 0,16<br />\
    <img src="styles/legend/_3_1.png" /> 0,16 - 0,37<br />\
    <img src="styles/legend/_3_2.png" /> 0,37 - 0,62<br />\
    <img src="styles/legend/_3_3.png" /> 0,62 - 1,11<br />\
    <img src="styles/legend/_3_4.png" /> 1,11 - 1,9<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
    title: 'Этажность застройки<br />\
    <img src="styles/legend/_4_0.png" /> 1-3 эт<br />\
    <img src="styles/legend/_4_1.png" /> 5-8 эт<br />\
    <img src="styles/legend/_4_2.png" /> 9 эт. и выше<br />'
        });
var lyr__5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Зона доступности автобусной остановки",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10325047.595000, 7552264.830900, 10358452.595000, 7574879.830900]
                            })
                        });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Автобусная остановка'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_level': 'admin_level', 'boundary': 'boundary', 'branch': 'branch', 'electrified': 'electrified', 'frequency': 'frequency', 'gauge': 'gauge', 'int_name': 'int_name', 'name': 'name', 'name:de': 'name:de', 'name:en': 'name:en', 'name:ru': 'name:ru', 'oneway': 'oneway', 'operator': 'operator', 'passenger_lines': 'passenger_lines', 'railway': 'railway', 'usage': 'usage', 'voltage': 'voltage', 'highway': 'highway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lit': 'lit', 'surface': 'surface', 'postal_code': 'postal_code', 'smoothness': 'smoothness', 'waterway': 'waterway', 'turn:lanes': 'turn:lanes', 'alt_name': 'alt_name', 'source:url': 'source:url', 'maritime': 'maritime', 'gis-lab:status': 'gis-lab:status', 'lanes:psv': 'lanes:psv', 'boat': 'boat', 'name:ja': 'name:ja', 'name:pl': 'name:pl', 'natural': 'natural', 'addr:country': 'addr:country', 'addr:region': 'addr:region', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'border_type': 'border_type', 'lanes:backward': 'lanes:backward', 'sidewalk': 'sidewalk', 'motor_vehicle': 'motor_vehicle', 'maxheight': 'maxheight', 'old_ref': 'old_ref', 'ref': 'ref', 'lanes:forward': 'lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', 'turn:lanes:forward': 'turn:lanes:forward', 'shoulder': 'shoulder', 'foot': 'foot', 'bridge': 'bridge', 'layer': 'layer', 'name:cs': 'name:cs', 'name:es': 'name:es', 'name:fr': 'name:fr', 'name:it': 'name:it', 'name:la': 'name:la', 'name:pt': 'name:pt', 'name:ro': 'name:ro', 'description': 'description', 'gvr:code': 'gvr:code', 'status': 'status', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'area_residential_sum': 'area_residential_sum', 'K_P': 'K_P', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'Unnamed: 0.6': 'Unnamed: 0.6', 'Unnamed: 0.5': 'Unnamed: 0.5', 'Unnamed: 0.4': 'Unnamed: 0.4', 'Unnamed: 0.3': 'Unnamed: 0.3', 'Unnamed: 0.2': 'Unnamed: 0.2', 'Unnamed: 0.1': 'Unnamed: 0.1', 'Unnamed: 0': 'Unnamed: 0', 'index': 'index', 'id': 'id', 'region_id': 'region_id', 'area_id': 'area_id', 'city_id': 'city_id', 'street_id': 'street_id', 'shortname_region': 'shortname_region', 'formalname_region': 'formalname_region', 'shortname_area': 'shortname_area', 'formalname_area': 'formalname_area', 'shortname_city': 'shortname_city', 'formalname_city': 'formalname_city', 'shortname_street': 'shortname_street', 'formalname_street': 'formalname_street', 'house_number': 'house_number', 'building': 'building', 'block': 'block', 'letter': 'letter', 'address': 'address', 'houseguid': 'houseguid', 'management_organization_id': 'management_organization_id', 'built_year': 'built_year', 'exploitation_start_year': 'exploitation_start_year', 'project_type': 'project_type', 'house_type': 'house_type', 'is_alarm': 'is_alarm', 'method_of_forming_overhaul_fund': 'method_of_forming_overhaul_fund', 'floor_count_max': 'floor_count_max', 'floor_count_min': 'floor_count_min', 'entrance_count': 'entrance_count', 'elevators_count': 'elevators_count', 'energy_efficiency': 'energy_efficiency', 'quarters_count': 'quarters_count', 'living_quarters_count': 'living_quarters_count', 'unliving_quarters_count': 'unliving_quarters_count', 'area_total': 'area_total', 'area_residential': 'area_residential', 'area_non_residential': 'area_non_residential', 'area_common_property': 'area_common_property', 'area_land': 'area_land', 'parking_square': 'parking_square', 'playground': 'playground', 'sportsground': 'sportsground', 'other_beautification': 'other_beautification', 'foundation_type': 'foundation_type', 'floor_type': 'floor_type', 'wall_material': 'wall_material', 'basement_area': 'basement_area', 'chute_type': 'chute_type', 'chute_count': 'chute_count', 'electrical_type': 'electrical_type', 'electrical_entries_count': 'electrical_entries_count', 'heating_type': 'heating_type', 'hot_water_type': 'hot_water_type', 'cold_water_type': 'cold_water_type', 'sewerage_type': 'sewerage_type', 'sewerage_cesspools_volume': 'sewerage_cesspools_volume', 'gas_type': 'gas_type', 'ventilation_type': 'ventilation_type', 'firefighting_type': 'firefighting_type', 'drainage_type': 'drainage_type', 'addr_osm': 'addr_osm', 'lon_osm': 'lon_osm', 'lat_osm': 'lat_osm', 'addr_ya': 'addr_ya', 'lon_ya': 'lon_ya', 'lat_ya': 'lat_ya', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'bus': 'bus', 'highway': 'highway', 'name': 'name', 'public_transport': 'public_transport', 'shelter': 'shelter', 'bench': 'bench', 'bin': 'bin', 'trolleybus': 'trolleybus', 'tactile_paving': 'tactile_paving', 'check_date:shelter': 'check_date:shelter', 'covered': 'covered', 'name:ja': 'name:ja', 'lit': 'lit', 'name:en': 'name:en', 'name:ru': 'name:ru', 'description': 'description', 'tram': 'tram', 'old_name': 'old_name', 'ref': 'ref', 'width': 'width', 'departures_board': 'departures_board', 'check_date:bench': 'check_date:bench', 'share_taxi': 'share_taxi', 'amenity': 'amenity', 'network': 'network', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'branch': 'TextEdit', 'electrified': 'TextEdit', 'frequency': 'TextEdit', 'gauge': 'TextEdit', 'int_name': 'TextEdit', 'name': 'TextEdit', 'name:de': 'TextEdit', 'name:en': 'TextEdit', 'name:ru': 'TextEdit', 'oneway': 'TextEdit', 'operator': 'TextEdit', 'passenger_lines': 'TextEdit', 'railway': 'TextEdit', 'usage': 'TextEdit', 'voltage': 'TextEdit', 'highway': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'lit': 'TextEdit', 'surface': 'TextEdit', 'postal_code': 'TextEdit', 'smoothness': 'TextEdit', 'waterway': 'TextEdit', 'turn:lanes': 'TextEdit', 'alt_name': 'TextEdit', 'source:url': 'TextEdit', 'maritime': 'TextEdit', 'gis-lab:status': 'TextEdit', 'lanes:psv': 'TextEdit', 'boat': 'TextEdit', 'name:ja': 'TextEdit', 'name:pl': 'TextEdit', 'natural': 'TextEdit', 'addr:country': 'TextEdit', 'addr:region': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'border_type': 'TextEdit', 'lanes:backward': 'TextEdit', 'sidewalk': 'TextEdit', 'motor_vehicle': 'TextEdit', 'maxheight': 'TextEdit', 'old_ref': 'TextEdit', 'ref': 'TextEdit', 'lanes:forward': 'TextEdit', 'turn:lanes:backward': 'TextEdit', 'turn:lanes:forward': 'TextEdit', 'shoulder': 'TextEdit', 'foot': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'name:cs': 'TextEdit', 'name:es': 'TextEdit', 'name:fr': 'TextEdit', 'name:it': 'TextEdit', 'name:la': 'TextEdit', 'name:pt': 'TextEdit', 'name:ro': 'TextEdit', 'description': 'TextEdit', 'gvr:code': 'TextEdit', 'status': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'area_residential_sum': 'TextEdit', 'K_P': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'Range', 'Unnamed: 0.6': 'Range', 'Unnamed: 0.5': 'Range', 'Unnamed: 0.4': 'Range', 'Unnamed: 0.3': 'Range', 'Unnamed: 0.2': 'Range', 'Unnamed: 0.1': 'Range', 'Unnamed: 0': 'Range', 'index': 'Range', 'id': 'Range', 'region_id': 'TextEdit', 'area_id': 'TextEdit', 'city_id': 'TextEdit', 'street_id': 'TextEdit', 'shortname_region': 'TextEdit', 'formalname_region': 'TextEdit', 'shortname_area': 'TextEdit', 'formalname_area': 'TextEdit', 'shortname_city': 'TextEdit', 'formalname_city': 'TextEdit', 'shortname_street': 'TextEdit', 'formalname_street': 'TextEdit', 'house_number': 'TextEdit', 'building': 'TextEdit', 'block': 'TextEdit', 'letter': 'TextEdit', 'address': 'TextEdit', 'houseguid': 'TextEdit', 'management_organization_id': 'TextEdit', 'built_year': 'TextEdit', 'exploitation_start_year': 'TextEdit', 'project_type': 'TextEdit', 'house_type': 'TextEdit', 'is_alarm': 'TextEdit', 'method_of_forming_overhaul_fund': 'TextEdit', 'floor_count_max': 'TextEdit', 'floor_count_min': 'TextEdit', 'entrance_count': 'TextEdit', 'elevators_count': 'TextEdit', 'energy_efficiency': 'TextEdit', 'quarters_count': 'Range', 'living_quarters_count': 'TextEdit', 'unliving_quarters_count': 'TextEdit', 'area_total': 'TextEdit', 'area_residential': 'TextEdit', 'area_non_residential': 'TextEdit', 'area_common_property': 'TextEdit', 'area_land': 'TextEdit', 'parking_square': 'TextEdit', 'playground': 'Range', 'sportsground': 'Range', 'other_beautification': 'TextEdit', 'foundation_type': 'TextEdit', 'floor_type': 'TextEdit', 'wall_material': 'TextEdit', 'basement_area': 'TextEdit', 'chute_type': 'TextEdit', 'chute_count': 'TextEdit', 'electrical_type': 'TextEdit', 'electrical_entries_count': 'TextEdit', 'heating_type': 'TextEdit', 'hot_water_type': 'TextEdit', 'cold_water_type': 'TextEdit', 'sewerage_type': 'TextEdit', 'sewerage_cesspools_volume': 'TextEdit', 'gas_type': 'TextEdit', 'ventilation_type': 'TextEdit', 'firefighting_type': 'TextEdit', 'drainage_type': 'TextEdit', 'addr_osm': 'TextEdit', 'lon_osm': 'TextEdit', 'lat_osm': 'TextEdit', 'addr_ya': 'TextEdit', 'lon_ya': 'TextEdit', 'lat_ya': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'bus': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'public_transport': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'bin': 'TextEdit', 'trolleybus': 'TextEdit', 'tactile_paving': 'TextEdit', 'check_date:shelter': 'TextEdit', 'covered': 'TextEdit', 'name:ja': 'TextEdit', 'lit': 'TextEdit', 'name:en': 'TextEdit', 'name:ru': 'TextEdit', 'description': 'TextEdit', 'tram': 'TextEdit', 'old_name': 'TextEdit', 'ref': 'TextEdit', 'width': 'TextEdit', 'departures_board': 'TextEdit', 'check_date:bench': 'TextEdit', 'share_taxi': 'TextEdit', 'amenity': 'TextEdit', 'network': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'branch': 'no label', 'electrified': 'no label', 'frequency': 'no label', 'gauge': 'no label', 'int_name': 'no label', 'name': 'no label', 'name:de': 'no label', 'name:en': 'no label', 'name:ru': 'no label', 'oneway': 'no label', 'operator': 'no label', 'passenger_lines': 'no label', 'railway': 'no label', 'usage': 'no label', 'voltage': 'no label', 'highway': 'no label', 'lanes': 'no label', 'maxspeed': 'no label', 'name:etymology:wikidata': 'no label', 'lit': 'no label', 'surface': 'no label', 'postal_code': 'no label', 'smoothness': 'no label', 'waterway': 'no label', 'turn:lanes': 'no label', 'alt_name': 'no label', 'source:url': 'no label', 'maritime': 'no label', 'gis-lab:status': 'no label', 'lanes:psv': 'no label', 'boat': 'no label', 'name:ja': 'no label', 'name:pl': 'no label', 'natural': 'no label', 'addr:country': 'no label', 'addr:region': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'border_type': 'no label', 'lanes:backward': 'no label', 'sidewalk': 'no label', 'motor_vehicle': 'no label', 'maxheight': 'no label', 'old_ref': 'no label', 'ref': 'no label', 'lanes:forward': 'no label', 'turn:lanes:backward': 'no label', 'turn:lanes:forward': 'no label', 'shoulder': 'no label', 'foot': 'no label', 'bridge': 'no label', 'layer': 'no label', 'name:cs': 'no label', 'name:es': 'no label', 'name:fr': 'no label', 'name:it': 'no label', 'name:la': 'no label', 'name:pt': 'no label', 'name:ro': 'no label', 'description': 'no label', 'gvr:code': 'no label', 'status': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'left': 'no label', 'bottom': 'no label', 'right': 'no label', 'top': 'no label', 'area_residential_sum': 'no label', 'K_P': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'Unnamed: 0.6': 'no label', 'Unnamed: 0.5': 'no label', 'Unnamed: 0.4': 'no label', 'Unnamed: 0.3': 'no label', 'Unnamed: 0.2': 'no label', 'Unnamed: 0.1': 'no label', 'Unnamed: 0': 'no label', 'index': 'no label', 'id': 'no label', 'region_id': 'no label', 'area_id': 'no label', 'city_id': 'no label', 'street_id': 'no label', 'shortname_region': 'no label', 'formalname_region': 'no label', 'shortname_area': 'no label', 'formalname_area': 'no label', 'shortname_city': 'no label', 'formalname_city': 'no label', 'shortname_street': 'no label', 'formalname_street': 'no label', 'house_number': 'no label', 'building': 'no label', 'block': 'no label', 'letter': 'no label', 'address': 'no label', 'houseguid': 'no label', 'management_organization_id': 'no label', 'built_year': 'no label', 'exploitation_start_year': 'no label', 'project_type': 'no label', 'house_type': 'no label', 'is_alarm': 'no label', 'method_of_forming_overhaul_fund': 'no label', 'floor_count_max': 'no label', 'floor_count_min': 'no label', 'entrance_count': 'no label', 'elevators_count': 'no label', 'energy_efficiency': 'no label', 'quarters_count': 'no label', 'living_quarters_count': 'no label', 'unliving_quarters_count': 'no label', 'area_total': 'no label', 'area_residential': 'no label', 'area_non_residential': 'no label', 'area_common_property': 'no label', 'area_land': 'no label', 'parking_square': 'no label', 'playground': 'no label', 'sportsground': 'no label', 'other_beautification': 'no label', 'foundation_type': 'no label', 'floor_type': 'no label', 'wall_material': 'no label', 'basement_area': 'no label', 'chute_type': 'no label', 'chute_count': 'no label', 'electrical_type': 'no label', 'electrical_entries_count': 'no label', 'heating_type': 'no label', 'hot_water_type': 'no label', 'cold_water_type': 'no label', 'sewerage_type': 'no label', 'sewerage_cesspools_volume': 'no label', 'gas_type': 'no label', 'ventilation_type': 'no label', 'firefighting_type': 'no label', 'drainage_type': 'no label', 'addr_osm': 'no label', 'lon_osm': 'no label', 'lat_osm': 'no label', 'addr_ya': 'no label', 'lon_ya': 'no label', 'lat_ya': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'bus': 'no label', 'highway': 'no label', 'name': 'no label', 'public_transport': 'no label', 'shelter': 'no label', 'bench': 'no label', 'bin': 'no label', 'trolleybus': 'no label', 'tactile_paving': 'no label', 'check_date:shelter': 'no label', 'covered': 'no label', 'name:ja': 'no label', 'lit': 'no label', 'name:en': 'no label', 'name:ru': 'no label', 'description': 'no label', 'tram': 'no label', 'old_name': 'no label', 'ref': 'no label', 'width': 'no label', 'departures_board': 'no label', 'check_date:bench': 'no label', 'share_taxi': 'no label', 'amenity': 'no label', 'network': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});