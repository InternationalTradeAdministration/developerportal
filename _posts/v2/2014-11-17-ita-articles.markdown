---
published: true
permalink: "ita-trade-articles.html"
title: ITA Trade Articles API
layout: body
---

#Trade Articles API

{% include articles-tabs %}

##Resource URL

    http://api.trade.gov/v2/trade_articles/search
    
Sample JSON:

	{
	id: "23",
	content: " A factor, i.e. a commercial bank or a specialized financial firm, can assist an exporter with financing through the purchase of invoices or accounts receivable. Export factoring is offered under an agreement between the factor and the exporter, in which the factor purchases the exporter's short-term foreign accounts receivable for cash at a discount from the face value, normally without recourse, and assumes the risk on the ability of the foreign buyer to pay, and handles collections on the receivables. Thus, by virtually eliminating the risk of nonpayment by foreign buyers, factoring allows the exporter to offer open accounts, improves liquidity position, and boosts competitiveness in the global marketplace. Factoring foreign accounts receivables can be a viable alternative to export credit insurance, long-term bank financing, expensive short-term bridge loans or other types of borrowing that will create debt on the balance sheet. This method may be useful for more experienced exporters that are involved in multiple transactions and have a certain volume of yearly international sales. For more details on how factoring works and its pros and cons see Chapter 9 of the Trade Finance Guide. To find a factor, contact the Factors Chain International or the International Factoring Association. A forfaiter is a specialized finance firm or a department in banks offers non-recourse export financing through the purchase of medium-term trade receivables. Similar to factoring, forfaiting virtually eliminates the risk of nonpayment, once the goods have been delivered to the foreign buyer in accordance with the terms of sale. However, unlike factors, forfaiters typically work with the exporter who sells capital goods, commodities, or large projects and needs to offer periods of credit from 180 days to up to seven years. In forfaiting, receivables are normally guaranteed by the importer's bank, allowing the exporter to take the transaction off the balance sheet to enhance its key financial ratios. Forfeiting typically requires a bank guarantee for the foreign buyer. It allows opening an account in markets with relatively high credit risk. It is can be more expensive than commercial bank financing. For more information on forfaiting see Chapter 10 the Trade Finance Guide. To find a forfaiter, you may contact the Association of Trade and Forfaiting in the Americas, Inc. or the International Forfaiting Association. ",
	pub_date: "2012-12-20",
	title: "Factoring and Forfaiting",
	update_date: "2013-04-30",
	evergreen: null,
	content_type: [ ],
	export_phase: [ ],
	industry: [ ],
	topic: [ ],
	subtopic: [ ],
	trade_region: [ ],
	geo_region: [ ],
	geo_subregion: [ ],
	country: [ ],
	keyword: [
	"Factoring & Forfaiting"
	]
	},

##Search Parameters

###keyword

Searches for a match within the **title**, **short_title**, **summary**, **content**, and **keyword** fields.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&q={term}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?q=logistics](http://api.trade.gov/v2/trade_articles/search?q=logistics)
-->

###export_phases

Returns articles based on the [export phase](export-phases-ita-articles.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&export_phases={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?export_phases=Expand,Exporting](http://api.trade.gov/v2/trade_articles/search?export_phases=Expand,Exporting)
-->

###industries

Returns articles based on [industry name](industry-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&industries={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?industries=Education,Finance](http://api.trade.gov/v2/trade_articles/search?industries=Education,Finance)
-->

###countries

Returns articles based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&countries={country codes}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?countries=MX,TR](http://api.trade.gov/v2/trade_articles/search?countries=MX,TR)
-->

###topics

Returns articles based on [topic](topic-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&topics={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?topics=Exporting,Trade Finance](http://api.trade.gov/v2/trade_articles/search?topics=Exporting,Trade Finance)
-->

###sub_topics

Returns articles based on [sub-topic](subtopic-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&sub_topics={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?sub_topics=Export Training,Shipping](http://api.trade.gov/v2/trade_articles/search?sub_topics=Export Training,Shipping)
-->

###geo_regions

Returns articles based on [geo region](geo-region-list.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&geo_regions={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?geo_regions=Africa,Asia](http://api.trade.gov/v2/trade_articles/search?geo_regions=Africa,Asia)
-->

###geo_subregions

Returns articles based on [geo sub-region](geo-region-list.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&geo_subregions={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?geo_subregions=North Africa,East Asia](http://api.trade.gov/v2/trade_articles/search?geo_subregions=North Africa,East Asia)
-->

###trade_regions

Returns articles based on [trade region](trade-region-list.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&trade_regions={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?trade_regions=Andean Community,African Growth and Opportunity Act](http://api.trade.gov/v2/trade_articles/search?trade_regions=Andean Community,African Growth and Opportunity Act)
-->

###trade_programs

Returns articles based on [trade program](trade-program-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&trade_programs={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?trade_programs=Advisory Committees,Advocacy](http://api.trade.gov/v2/trade_articles/search?trade_programs=Advisory Committees,Advocacy)
-->

###trade_initiatives

Returns articles based on [trade initiative](trade-initiative-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&trade_initiatives={terms}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?trade_initiatives=Discover Global Markets,NEI Next](http://api.trade.gov/v2/trade_articles/search?trade_initiatives=Discover Global Markets,NEI Next)
-->

###creation_date

Returns articles based on the date they were created.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&creation_date={YYYY-mm-dd TO YYYY-mm-dd}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?creation_date=2014-01-01 TO 2014-11-01](http://api.trade.gov/v2/trade_articles/search?creation_date=2014-01-01 TO 2014-11-1)
-->

###release_date

Returns articles based on their release date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&release_date={YYYY-mm-dd TO YYYY-mm-dd}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?release_date=2014-01-01 TO 2014-11-01](http://api.trade.gov/v2/trade_articles/search?release_date=2014-01-01 TO 2014-11-01)
-->

###expiration_date

Returns articles based on their expiration date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/v2/trade_articles/search?api_key={your key}&expiration_date={YYYY-mm-dd TO YYYY-mm-dd}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?expiration_date=2014-01-01 TO 2014-11-01](http://api.trade.gov/v2/trade_articles/search?expiration_date=2014-01-01 TO 2014-11-1)
-->

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_articles/search?countries=BR&size=1&offset=1](http://api.trade.gov/v2/trade_articles/search?countries=BR&size=1&offset=1)
-->

##Return Values

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for the article.             |
| title         	 | The title of the article.|
| short_title             | A shortened title for the article.  |
| summary        | A summary of the article's content.  |
| creation_date           | The date of the article's creation. |
| release_date            | The date of the article's release.          |
| expiration_date             | The date of the article's expiration.     |
| source_agencies            | The article's source agencies.    |
| source_business_units            | The business units for each source agency.    |
| source_offices            | The offices for each source business unit.     |
| evergreen            | Flag to designate “timeless” articles, always topically relevant.     |
| content           | The body of the article.    |
| keyword            | A list of keywords for the article assigned by the author.    |
| export_phases            | The export phases assigned to the article.     |
| industries           | The industries assigned to the article.    |
| countries            | The countries associated with the article    |
| topics             | The topics assigned to the article.     |
| sub_topics             | The sub-topics assigned to the article for each topic.     |
| geo_regions           | The world regions covered by the article's content.   |
| geo_subregions           | The world sub-regions associated with the article for each geo region.    |
| trade_regions             | The trade regions covered by the article's content.    |
| trade_programs            | The trade programs covered by the article's content.   |
| trade_initiatives            | The trade initiatives covered by the article's content.     |
| seo_metadata_title             | Title metadata for the article.    |
| seo_metadata_description            | Description metadata for the article.    |
| seo_metadata_keyword             | Keyword metadata for the article.   |
| trade_url             | The article's export.gov URL.     |
| file_url             | The URLs for files included in the article.     |
| image_url             | The URLs for images included in the article.    |
| url_html_source             | The URL for the HTML of the article's source.     |
| url_xml_source            | The URL for the XML of the article's source.    |

This endpoint and its documentation has been updated to Version 2. Please visit the [API v1 Documentation]({{ site.baseurl }}/v1/trade-news-articles.html) page for the Version 1 documentation.
