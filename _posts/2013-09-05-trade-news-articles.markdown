---
permalink: "trade-news-articles.html"
layout: template
title: "Trade News & Articles"
published: true
---

##Trade News & Articles

The Trade News & Articles API provides in-depth news and articles written by ITA's trade specialists.  The news and articles are categorized by industry, country, and topic area.  Developers can use this API to provide exporters with the latest insights into their industry and into the countries with which they would like to do business.

The output format for this API is JSON.

##Request Methods

You may query the Trade News & Articles API using the following URL templates:

####Keyword

Searches for term or keyword within any field in the data set

    http://api.trade.gov/trade_articles/search.json?q={term}

#####Example:

    http://api.trade.gov/trade_articles/search.json?q=solar

####evergreen

Searches whether the **evergreen** field is _true_ or _false_

    http://api.trade.gov/trade_articles/search.json?evergreen={term}
    
#####Example

    http://api.trade.gov/trade_articles/search.json?evergreen=true

####content_type

Searches for one of nine unique values in the **content_type** field

1. _article_
2. _contact_
3. _document_
4. _FAQ_
5. _form_
6. _link_
7. _publication_
8. _webinar_
9. _workflow_

#####Template

    http://api.trade.gov/trade_articles/search.json?content_type={term}
    
#####Example

    http://api.trade.gov/trade_articles/search.json?content_type=document
    
####export_phase

Searches for one of four unique values in the **export_phase** field

1. _learn_ - Information focused on helping non-exporters understand considerations when deciding to export; the export process; and the criteria for making exports
2. _ready_ - Information focused on an established business that has met the criteria for becoming an exporter, and is ready to find business opportunities, complete paperwork, and make its first export
3. _exporting_ - Information for a business that his currently exporting
4. _expand_ - Information for a business that is interested in expanding export operations, usually in new markets or industries

#####Template

    http://api.trade.gov/trade_articles/search.json?export_phase={term}
    
#####Example

    http://api.trade.gov/trade_articles/search.json?export_phase=ready

####industry

Searches for specific controlled [industry names](/industry-list.html)

    http://api.trade.gov/trade_articles/search.json?industry={term}

#####Example:

    http://api.trade.gov/trade_articles/search.json?industry=Agribusiness

####industry_sector

Searches for specific controlled [industry sector names](/industry-list.html)

    http://api.trade.gov/trade_articles/search.json?industry_sector={term}

#####Example:

    http://api.trade.gov/trade_articles/search.json?industry_sector=Agricultural%20Chemicals

####topic

Searches for specific controlled [topic areas](/topic-list.html)

    http://api.trade.gov/trade_articles/search.json?topic={term}

#####Example:

    http://api.trade.gov/trade_articles/search.json?topic=Exporting


####subtopic

Searches for specific controlled [sub-topic areas](/topic-list.html)

    http://api.trade.gov/trade_articles/search.json?subtopic={term}

#####Example:

    http://api.trade.gov/trade_articles/search.json?subtopic=Marketing

####trade_region

Searches for specific controlled [trade region names](/trade-region-list.html)

    http://api.trade.gov/trade_articles/search.json?trade_region={term}

#####Example:

    http://api.trade.gov/trade_articles/search.json?trade_region=African%20Growth%20and%20Opportunity%20Act

####geo_region

Searches for specific controlled [geo region names](/geo-region-list.html)

    http://api.trade.gov/trade_articles/search.json?geo_region={term}
    
#####Example

    http://api.trade.gov/trade_articles/search.json?geo_region=Asia
    

