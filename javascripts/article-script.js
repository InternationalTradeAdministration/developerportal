(function() {

	if(typeof jQuery=='undefined') {
	    var headTag = document.getElementsByTagName("head")[0];
	    var jqTag = document.createElement('script');
	    jqTag.type = 'text/javascript';
	    jqTag.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
	    jqTag.onload = main;
	    headTag.appendChild(jqTag);
	} else {
	     main();
	}
	var industry = "";
	var country = "";

	function stopSpinner(spinner){
		$('#country-article-button').removeClass('search-button-clear');
		$('#industry-article-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getArticle(spinner){
		var countryIndex = $('#article-country').val();
		var industryIndex = $('#article-industry').val();
		if (countryIndex == 0 && industryIndex == 0){
			alert("No selection has been chosen");
			document.getElementById("article-results").innerHTML = "";
			stopSpinner(spinner);
			return;
		}
		else{
			if (industryIndex > 0){
				industry = industryList[industryIndex];
			}
			if (countryIndex > 0){
				country = countryList[countryIndex][1]
			}
			var searchParams = "country=" + country + "&industry=" + industry;
		}

		var url = "http://api.trade.gov/trade_articles/search?" + searchParams + "&callback=?";
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(feed){
				var results = feed.results;
				if (results.length == 0){
					list = "<p>No articles were found, please try another search term.<p>"
				}
				else {
					var list = "<p class='results-title'></p>";
					articleArray = [];
					$('#article-results').addClass('results-container');
					for (var i=0; i<=results.length-1; i++){
						var article = results[i];
						var title = article.title;
						var content = article.content;
						var id = article.id;
						var articleObject={title:title, content:content, id:id};
						articleArray.push(articleObject);
						list += "<p><a class='results-link' href='#' id='article-title' data-id= " + id + ">" + title + "</a></p>"
					}
				}
				document.getElementById("article-results").innerHTML = list;
				stopSpinner(spinner);
			},
			error: function(error) {
				stopSpinner(spinner);
				alert("Error retriving articles, please try again");
			},
			timeout:3000
		});
	}

	function main() { 
	    $(document).ready(function($) {
				if (!$("link[href='/stylesheets/trade-widgets.css']").length){
					$('<script src="/javascripts/spin.js" type="text/javascript"></script>').appendTo("head");
					$('<script src="/javascripts/trade-widget-vars2.js" type="text/javascript"></script>').appendTo("head");
					$('<link href="/stylesheets/trade-widgets.css" rel="stylesheet">').appendTo("head");
				}
				var container = "";
				container += ('<div id="article-form" class="form-container"></div>');
				container += ('<div id="article-results" class="results-container"></div>');			
				document.getElementById('article-container').innerHTML = container;
				$('#article-container').addClass('widget-container');
				var form = "";				
	      
				form += ('<p><div class="select-input"><select class="search-input" id="article-industry"></select>');
				form += ('<button class="search-button" id="industry-article-button"></button></div></p>');
				form += ('<div class="select-input"><select class="search-input" id="article-country"></select>');
				form += ('<button class="search-button" id="country-article-button"></button></div>');
				document.getElementById('article-form').innerHTML = form;
				$('#industry-article-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getArticle(spinner)
					});
				$('#country-article-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getArticle(spinner);
					});

				//populate dropdown lists
				$.each(industryList, function(val, text) {
		      $('#article-industry').append( $('<option></option>').val(val).html(text));
		     });
				$.each(countryList, function(val, array) {
		      $('#article-country').append( $('<option></option>').val(val).html(array[0]));
		     });
	    });
	}

})();