---
---

renderData = (response) ->
  (data) ->
    response data

renderError = (response) ->
  () ->
    response []

remoteSource = (request, response) ->
  url = '{{ site.webservices_baseurl }}/ita_taxonomies/suggest'
  data = {
    api_key: '{{ site.apikey }}',
    size: 10,
    term: request.term
  }

  $.ajax
    contentType: 'text/plain',
    type: 'GET',
    url: url,
    data: data,
    xhrFields: {
      withCredentials: false
    },
    success: renderData(response),
    error: renderError(response)

selectEvent = (event, ui) ->
  window.location.assign('#search/' + encodeURIComponent(ui.item.value))

jQuery ->
  $('#query').autocomplete
    source: remoteSource
    minLength: 2

loadTaxonomyAutocomplete = ->
  jQuery ->
    $('#query').autocomplete
      source: remoteSource
      select: selectEvent
      minLength: 2

window.loadTaxonomyAutocomplete = loadTaxonomyAutocomplete
