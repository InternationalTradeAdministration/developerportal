--- 
permalink: "search-widgets.html" 
layout: body 
title: ITA Search Widgets 
published: true 
---

# ITA Search Widgets

ITA has created these widgets to make it easy to browse the content from several of our APIs.

Please [contact us](contact.html) if you have any questions about the APIs.

<link rel="stylesheet" type="text/css" href="./stylesheets/widget_v2_react.css">
<script type="text/javascript" src="./javascripts/widget_v2_react.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var endpoints = {
      "consolidated_screening_list": "example-CSL-widget-container",
      "trade_leads": "example-trade-leads-widget-container",
      "trade_events": "example-trade-events-widget-container",
      "export_assistance_centers": "example-useac-locations-widget-container",
      "international_office_locations": "example-ita-office-locations-widget-container",
    };
    var API_KEY = "1K7HGE9nCfjnmrtfjq69Ehij";
    window.Explorer.renderWidget(endpoints, API_KEY);
  });    
</script>
---

## Consolidated Screening List Widget

The [Consolidated Screening List](consolidated-screening-list.html) widget searches eleven export screening lists from the Departments of Commerce, State and the Treasury.  The widget enables your customers to do a quick screening search for people or companies with whom they are doing business or are party to their overseas transactions.

The widget returns results that are either exact matches and near matches in case your customers don’t have the exact spelling of the name.  The closer the match, the higher the name in the results.

<div class="jumbotron transparent">
  <div class="container">
    <div id="example-CSL-widget-container"></div>
  </div>
</div>

## Trade Leads Widget

The [Trade Leads](trade-leads.html) widget searches contract opportunities for U.S. businesses selling their products and services overseas. These leads come from a variety of sources including FedBizOps, The United Kingdom, Canada, The Millennium Challenge Corporation, and Australia.

The widget enables your customers to do a quick search for trade leads, procurement opportunities, and contract notifications in a particular country or within all countries.  They can also search for all of the leads in a country by leaving the search box blank. 

<div class="jumbotron transparent">
  <div class="container">
    <div id="example-trade-leads-widget-container"></div>
  </div>
</div>

## Trade Events Widget

The [Trade Events](trade-events.html) widget searches for events organized by ITA, the U.S. Trade and Development Agency, the State Department, and the Small Business Administration.

The widget enables your customers to do a quick search for trade events such as industry conferences, webinars, lectures, and trade missions in a particular country or within all countries.  They can also search for all of the events in a country by leaving the search box blank. 

<div class="jumbotron transparent">
  <div class="container">
    <div id="example-trade-events-widget-container"></div>
  </div>
</div>


## Export Assistance Centers Widget

The [Export Assistance Centers](ita-zip-codes.html) widget provides direct access to the U.S. Export Assistance Centers (USEACs) that have been assigned to all of the 40,000+ zip codes in the United States.

The widget enables your customers to do a quick search for both a zip code and a USEAC. Each center has specialists on hand for each particular region.

<div class="jumbotron transparent">
  <div class="container">
    <div id="example-useac-locations-widget-container"></div>
  </div>
</div>

## International Office Locations Widget

The [International Office Locations](ita-office-locations.html) provides direct access to ITA offices and centers around the world. The widget enables your customers to do a quick search for an office in a particular city or country. Each office has specialists on hand for each particular region.

<div class="jumbotron transparent">
  <div class="container">
    <div id="example-ita-office-locations-widget-container"></div>
  </div>
</div>