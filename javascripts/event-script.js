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
	var countries = "";

	function stopSpinner(spinner){
		$('#countries-event-button').removeClass('search-button-clear');
		$('#industry-event-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getEvent(spinner){
		var countriesIndex = $('#event-countries').val();
		var industryIndex = $('#event-industry').val();
		if (countriesIndex == 0 && industryIndex == 0){
			alert("No selection has been chosen");
			document.getElementById("event-results").innerHTML = "";
			stopSpinner(spinner);
			return;
		}
		else{
			if (industryIndex > 0){
				industry = industryList[industryIndex];
			}
			if (countriesIndex > 0){
				countries = countriesList[countriesIndex][1]
			}
			var searchParams = "countries=" + countries + "&industry=" + industry;
		}

		var url = "http://api.trade.gov/trade_events/search?" + searchParams + "&callback=?";
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(feed){
				var results = feed.results;
				if (results.length == 0){
					list = "<p>No reports were found, please try another selection.<p>"
				}
				else {
					$('#event-results').addClass('results-container');
					var list = "<p></p>";
					for (var i=0; i<=results.length-1; i++){
						var event = results[i];
						var name = event.event_name;
						var startDate = event.start_date;
						var endDate = event.end_date;
						if (event.url){
							var url = "<a class='results-link' href=" + event.url + " target='_blank'>" + event.url + "</a></p>"
						}
						else{
							var url = "No event url provided"
						}
						list += "<p class='results-legend'>" + name + "<br>";
						list += startDate + " to " + endDate + "<br>";
						list += url + "</p>";
					}
				}
				document.getElementById("event-results").innerHTML = list;
				stopSpinner(spinner);
			},
			error: function(error) {
				stopSpinner(spinner);
				alert("Error retriving events, please try again");
			},
			timeout:3000
		});
	}

	function main() { 
	    $(document).ready(function($) {
				if (!$("link[href='http://developer.trade.gov/stylesheets/trade-widgets.css']").length){
					$('<script src="http://developer.trade.gov/javascripts/spin.js" type="text/javascript"></script>').appendTo("head");
					$('<script src="http://developer.trade.gov/javascripts/trade-widget-vars.js" type="text/javascript"></script>').appendTo("head");
					$('<link href="http://developer.trade.gov/stylesheets/trade-widgets.css" rel="stylesheet">').appendTo("head");
				}
				var container = "";
				container += ('<div id="event-form" class="form-container"></div>');
				container += ('<div id="event-results" class="results-container"></div>');			
				document.getElementById('event-container').innerHTML = container;
				$('#event-container').addClass('widget-container');
				var form = "";				
	      form += ('<p class="widget-title">Trade Events</p>');
				form += ('<p><div class="select-input"><select class="search-input" id="event-industry"></select>');
				form += ('<button class="search-button2" id="industry-event-button"></button></div></p>');
				form += ('<p></p><div class="select-input"><select class="search-input" id="event-countries"></select>');
				form += ('</br></br><button class="search-button3" id="countries-event-button">Filter</button></div>');
				
				
				document.getElementById('event-form').innerHTML = form;
				$('#industry-event-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getEvent(spinner)
					});
				$('#countries-event-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getEvent(spinner);
					});
				

				//populate dropdown lists
				$.each(industryList, function(val, text) {
		      $('#event-industry').append( $('<option></option>').val(val).html(text));
		     });
				$.each(countriesList, function(val, array) {
		      $('#event-countries').append( $('<option></option>').val(val).html(array[0]));
		     });
	    });
	}

})();
