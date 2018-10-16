---
---

extractData = (data) ->
  data.results

onSubmit = (e) ->
  e.preventDefault()
  query = $('#query').val()
  href = "taxonomy.html?#search/" + encodeURIComponent(query)
  window.location.href = href

remoteSource = (request, response) ->
  url = '{{ site.webservices_baseurl }}/ita_taxonomies/search'
  data = {
    api_key: '{{ site.apikey }}',
    size: 100,
    q: request.term
  }

  $.ajax
    contentType: 'text/plain',
    type: 'GET',
    url: url,
    data: data,
    xhrFields: {
      withCredentials: false
    },
    success: (data) ->
      response extractData(data)
    error: ->
      response []

selectEvent = (event, ui) ->
  window.location.assign("?##{ui.item.id}")

loadTaxonomyAutocomplete = ->
  jQuery ->
    $('#query').autocomplete
      source: remoteSource
      select: selectEvent
      minLength: 2
    $('.taxonomy-search-form').on 'submit', onSubmit

window.loadTaxonomyAutocomplete = loadTaxonomyAutocomplete
