---
layout: default
title: Developerportal by InternationalTradeAdministration
---

# API Documentation Lite


## Overview
The International Trade Administration (ITA) within the Department of Commerce (DOC) offers access to their public data via an Application Program Interface (API).  ITA provides information that is specifically targeted to businesses that are interested in exporting their products and services overseas.  For example, the API includes Trade Events that businesses may be interested in attending and Market Research Reports that provide insight into the current exporting environment.

Developers who work with trade and exporting information will find this information particularly useful as it originates from authoritative, federal government sources.  The API allows developers to create new and innovative applications for the web or mobile devices by enabling them to mash it with other trade-related data.

Use of the ITA APIs and other data is free of charge, but developers must [register with ITA](#registration_page) to receive a development key and agree to the guidelines outlined in the [Developer License Agreement]({{ site.baseurl }}/developer-license-agreement.html) and [Privacy Policy]({{ site.baseurl }}/privacy-policy.html). 


## Summary of Available APIs
ITA currently provides access to seven data sets:

* [Trade Events](#trade_events)
* [Trade Leads](#trade_leads)
* [ITA Office Locations](#office_locations)
* [ITA Programs for Exporters](#programs)
* [Market Research Library Meta Data](#mrl)
* [Trade Information Articles](#eg2_articles)
* [Environmental Toolkit](#environmental_toolkit)
<br />
<br />

## <span id="trade_events">Trade Events</span>
The Trade Events data provides information about the time, place, cost, and contact information for ITA Trade Events around the world.  These include conferences, webinars, lectures, and trade missions.  Developers can use this information to augment other event information relevant to exporting.


All ITA Trade Events can be accessed from [api.trade.gov/events/q](http://api.trade.gov/events/q).

The Trade Events data is updated every day at 3pm EST.	

The API output is available in JSON only.  

The [Trade Event data model](#trade_event_model) is available as a CSV file.


## <span id="trade_leads">Trade Leads</span>
The Trade Leads data provides information about potential business procurement opportunities around the world.  The data includes the country, the name and contact information for the foreign organization listing the opportunity, the ITA office coordinating the opportunity, and the bidding procedures.  Developers can use this information to augment other procurements relevant to businesses.

All ITA Trade Leads can be accessed from [api.trade.gov/leads/q](http://api.trade.gov/leads/q).

The Trade Leads data is updated every day at 3pm EST.	

The API output is available in JSON only.  

The [Trade Leads data model](#trade_lead_model) is available as a CSV file.


## <span id="office_locations">ITA Office Locations</span>
The ITA Office Locations data provides location and contact information for all of ITA’s foreign and domestic exporter assistance centers.  Developers can use this information to augment their listings of offices that provide business counseling.

All ITA Office Locations data can be accessed from [api.trade.gov/locations/q](http://api.trade.gov/locations/q).

The ITA Office Locations data is updated every day at 3pm EST.	

The API output is available in JSON only.  

The [ITA Office Locations data model](#office_location_model) is available as a CSV file.


## <span id="programs">ITA Programs for Exporters</span>
The ITA Programs for Exporters data provides information about various programs sponsored by ITA that provide support for exporters.  Assistance includes information on connecting to foreign buyers, regulations, marketing and sales, as well as training and mentoring.  Developers can use this data to augment their listings of government programs that provide assistance to businesses.

All ITA Programs for Exporters data can be accessed from [api.trade.gov/programs/q](http://api.trade.gov/programs/q).

The ITA Programs for Exporters data is updated every day at ???.

The API output is available in JSON only.  

The [ITA Programs for Exporters data model](#eg2_programs_model) is available as a CSV file.


## <span id="mrl">Market Research Library Meta Data</span>
The Market Research Library Meta Data API provides information about the reports contained with ITA’s Market Research Library.  The data does not include the content itself, only meta data about and links to the Market Research Reports, Best Market Reports, and Country Commercial Guides.  These reports are categorized by country and industry.  Developers can use this information to augment their catalog of market research that may be of interest to exporters.

All data for the Market Research Library Meta Data can be accessed from [api.trade.gov/MRL/q](http://api.trade.gov/MRL/q).

The data for the Market Research Library Meta Data is updated every day at 12am EST.

The API output is available in JSON only.  

The [data model for the Market Research Library Meta Data](#mrl_model) is available as a CSV file.


## <span id="eg2_articles">Trade Information Articles</span>
The Trade Information Articles provide insight and guidance on various trade and exporting topics.  Topics include learning the export process, obtaining financing, and complying with regulations.  Developers can use this information to augment their catalog of trade-related articles.

All Trade Information Articles data can be accessed from [api.trade.gov/articles/q](api.trade.gov/articles/q).

The Trade Information Articles data is updated every day at ???.

The API output is available in JSON only.  

The [Trade Information Articles data model](#trade_article_model) is available as a CSV file.


## <span id="environmental_toolkit">Environmental Toolkit</span>
The Environmental Toolkit data provides information about various U.S. businesses that furnish services for solving environmental challenges.  The data is organized by environmental issues, EPA regulations, solutions, and solution providers.  Developers can use this information to augment their listings of U.S business that provide solutions to foreign governments.

All Environmental Toolkit data can be accessed from [api.trade.gov/etoolkit/q](api.trade.gov/etoolkit/q).

The Environmental Toolkit data is updated every day at ???.	

The API output is available in JSON only.  

The [Environmental Toolkit data model](#environmental_toolkit_model) is available as a CSV file.

