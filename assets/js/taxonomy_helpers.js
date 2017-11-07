function performSearch(){
  var query_string = $('#query').val();
  window.location.assign("#search/" + encodeURIComponent(query_string))
}

function downloadTerms(){
  var query = '&size=-1';
  app.termCollection.update_query(query);
  app.termCollection.fetch({
    success: function(collection, response, options){
      collection.sort();
      var blob = new Blob([JSON.stringify(collection, null, 4)], {type: "application/json"});
      saveAs(blob, "taxonomy.json");
    }
  });
}

function compare(a,b) {
  if (a.label < b.label)
    return -1;
  if (a.label > b.label)
    return 1;
  return 0;
}

function sortByLabel(object_properties) {
  _.each(object_properties, function(object){
    _.each(object, function(value, key){
      value.sort(compare);
    })
  });
}

function transformLabels(obj, mapping) {
  transformed = []; 
  _.each(mapping, function(v, k){
    if (k in obj){
      var entry = {};
      entry[v] = obj[k];
      transformed.push(entry);
    }
  });
  return transformed;
}

var annotation_mapping = {
  pref_label: "Preferred Term",
  alt_label: "Used For",
  definition: "Definition",
  scope_note: "Usage",
  note: "Note",
  source: "Term Source",
  iso_alpha_2: "ISO 3166 Alpha-2",
  iso_alpha_3: "ISO 3166 Alpha-3",
  iso_numeric: "ISO 3166 Numeric",
  iso_short_name: "ISO 3166 Short Name"
};

var object_property_mapping = {
  has_member: "Concept Groups",
  member_of:  "Member of Concept Group",
  sub_group:  "Sub Concept Group",
  has_broader:  "Broader Terms",
  has_narrower:  "Narrower Terms",
  has_related:  "Related Terms",
  is_top_concept_in_scheme:  "Top Term of",
  micro_thesaurus_of:  "Micro Thesaurus of",
  is_in_scheme:  "In Scheme",
  "iso_thes:super_groupsuper_group":  "Sub Group of"
};