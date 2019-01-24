--- 
permalink: "search-widgets.html" 
layout: body 
title: ITA Search Widgets 
published: true 
---

# ITA Search Widgets

ITA has created these widgets to make it as easy as possible to put a search engine for several of our APIs on your web page.  Simply follow the instructions below to embed the code, and to change the look and feel to match your site.

These search widgets deliver results straight from our APIs so your customers get the same results as anyone using the APIs directly.  Please [contact us](contact.html) if you have any questions on how to install and use the widgets.

<link rel="stylesheet" type="text/css" href="widget.css">
<script type="text/javascript" src="widget.js"></script>

  <script>
      $(document).ready(function ($) {
        $("#example-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'consolidated_screening_list'
        });

        $("#example-trade-leads-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'trade_leads'
        });

        $("#example-trade-events-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'trade_events'
        });

        $("#example-useac-locations-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'useac_locations'
        });
      
       $("#example-ita-office-locations-widget-container").searchWidget({
          apiKey:   'BieztMWzm1EGY71oPH1KFpwm',
          host:     'https://api.trade.gov',
          endpoint: 'ita_office_locations'
        });
      });
    </script>

---

## Consolidated Screening List Widget

The [Consolidated Screening List](consolidated-screening-list.html) widget searches eleven export screening lists from the Departments of Commerce, State and the Treasury.  The widget enables your customers to do a quick screening search for people or companies with whom they are doing business or are party to their overseas transactions.

The widget returns results that are either exact matches and near matches in case your customers don’t have the exact spelling of the name.  The closer the match, the higher the name in the results.

<div class="jumbotron transparent">
  <div class="container">

<div id="example-widget-container"></div>

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
