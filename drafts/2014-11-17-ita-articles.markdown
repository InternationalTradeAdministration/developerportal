---
published: true
permalink: "ita-trade-articles.html"
title: ITA Trade Articles API
layout: body
---

#ITA Articles API

## Background
Trade articles published by the International Trade Administration.   

The output format for this API is JSON.

##Resource URL

<div><a href="http://api.trade.gov/ita_articles/search"><pre>http://api.trade.gov/ita_articles/search</pre></a></div>

##Search Parameters

###keyword

Searches for a match within the title, short_title, summary, content, and keyword fields.

    http://api.trade.gov/ita_articles/search?q={term}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?q=logistics"><pre>http://api.trade.gov/ita_articles/search?q=logistics</pre></a></div>

###export_phases

Returns articles based on the export phase.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?export_phases={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?export_phases=Expand,Exporting"><pre>http://api.trade.gov/ita_articles/search?export_phases=Expand,Exporting</pre></a></div>

###industries

Returns articles based on [industry name](industry-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?industries={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?industries=Education,Finance"><pre>http://api.trade.gov/ita_articles/search?industries=Education,Finance</pre></a></div>

###countries

Returns articles based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/ita_articles/search?countries={country codes}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?countries=MX,TR"><pre>http://api.trade.gov/ita_articles/search?countries=MX,TR</pre></a></div>

###topics

Returns articles based on topic.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?topics={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?topics=Exporting,Trade Finance"><pre>http://api.trade.gov/ita_articles/search?topics=Exporting,Trade Finance</pre></a></div>

###sub_topics

Returns articles based on sub-topic.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?sub_topics={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?sub_topics=Export Training,Shipping"><pre>http://api.trade.gov/ita_articles/search?sub_topics=Export Training,Shipping</pre></a></div>

###geo_regions

Returns articles based on geo region.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?geo_regions={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?geo_regions=Africa,Asia"><pre>http://api.trade.gov/ita_articles/search?geo_regions=Africa,Asia</pre></a></div>

###geo_subregions

Returns articles based on geo sub-region.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?geo_subregions={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?geo_subregions=North Africa,East Asia"><pre>http://api.trade.gov/ita_articles/search?geo_subregions=North Africa,East Asia</pre></a></div>

###trade_regions

Returns articles based on trade region.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?trade_regions={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?trade_regions=Andean Community,African Growth and Opportunity Act"><pre>http://api.trade.gov/ita_articles/search?trade_regions=Andean Community,African Growth and Opportunity Act</pre></a></div>

###trade_programs

Returns articles based on trade program.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?trade_programs={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?trade_programs=Advisory Committees,Advocacy"><pre>http://api.trade.gov/ita_articles/search?trade_programs=Advisory Committees,Advocacy</pre></a></div>

###trade_initiatives

Returns articles based on trade initiative.  Enter multiple terms by separating with a comma.

    http://api.trade.gov/ita_articles/search?trade_initiatives={terms}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?trade_initiatives=Discover Global Markets,NEI Next"><pre>http://api.trade.gov/ita_articles/search?trade_initiatives=Discover Global Markets,NEI Next</pre></a></div>

###creation_date

Returns articles based on the date they were created.  Dates are filtered by entering a starting date and/or ending date (creation_date_start and creation_date_end).

    http://api.trade.gov/ita_articles/search?creation_date_start={term}&creation_date_end={term}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?creation_date_start=2014-01-01&creation_date_end=2014-11-01"><pre>http://api.trade.gov/ita_articles/search?creation_date_start=2014-01-01&creation_date_end=2014-11-1</pre></a></div>

###release_date

Returns articles based on their release date.  Dates are filtered by entering a starting date and/or ending date (release_date_start and release_date_end).

    http://api.trade.gov/ita_articles/search?release_date_start={term}&release_date_end={term}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?release_date_start=2014-01-01&release_date_end=2014-11-01"><pre>http://api.trade.gov/ita_articles/search?release_date_start=2014-01-01&release_date_end=2014-11-1</pre></a></div>

###expiration_date

Returns articles based on their expiration date.  Dates are filtered by entering a starting date and/or ending date (expiration_date_start and expiration_date_end).

    http://api.trade.gov/ita_articles/search?expiration_date_start={term}&expiration_date_end={term}

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?expiration_date_start=2014-01-01&expiration_date_end=2014-11-01"><pre>http://api.trade.gov/ita_articles/search?expiration_date_start=2014-01-01&expiration_date_end=2014-11-1</pre></a></div>

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

**_Example_**

<div><a href="http://api.trade.gov/ita_articles/search?countries=BR&size=1&offset=1"><pre>http://api.trade.gov/ita_articles/search?countries=BR&size=1&offset=1</pre></a></div>


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
