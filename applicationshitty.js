$(document).ready(function() {

	var countries = [
		"Afghanistan",
		"Albania",
		"Algeria",
		"Angola",
		"Antigua and Barbuda",
		"Argentina",
		"Armenia",
		"Australia",
		"Austria",
		"Azerbaijan",
		"Bahamas",
		"Bahrain",
		"Bangladesh",
		"Barbados",
		"Belarus",
		"Belgium",
		"Belize",
		"Benin",
		"Bhutan",
		"Bolivia",
		"Bosnia and Herzegovina",
		"Botswana",
		"Brazil",
		"Brunei",
		"Bulgaria",
		"Burkina Faso",
		"Burundi",
		"Cambodia",
		"Cameroon",
		"Canada",
		"Cape Verde",
		"Central African Republic",
		"Chad",
		"Chile",
		"China",
		"Colombia",
		"Comoros",
		"Congo, DR",
		"Congo, Republic",
		"Costa Rica",
		"Ivory Coast",
		"Croatia",
		"Cuba",
		"Cyprus",
		"Czech Republic",
		"Denmark",
		"Djibouti",
		"Dominica",
		"Dominican Republic",
		"East Timor",
		"Ecuador",
		"Egypt",
		"El Salvador",
		"Equatorial Guinea",
		"Eritrea",
		"Estonia",
		"Ethiopia",
		"Fiji",
		"Finland",
		"France",
		"Gabon",
		"Gambia",
		"Georgia",
		"Germany",
		"Ghana",
		"Greece",
		"Grenada",
		"Guatemala",
		"Guinea",
		"Guinea-Bissau",
		"Guyana",
		"Haiti",
		"Honduras",
		"Hong Kong",
		"Hungary",
		"Iceland",
		"India",
		"Indonesia",
		"Iran",
		"Iraq",
		"Ireland",
		"Israel",
		"Italy",
		"Jamaica",
		"Japan",
		"Jordan",
		"Kazakhstan",
		"Kenya",
		"Kiribati",
		"Kosovo",
		"Kuwait",
		"Kyrgyzstan",
		"Laos",
		"Latvia",
		"Lebanon",
		"Lesotho",
		"Liberia",
		"Libya",
		"Lithuania",
		"Luxembourg",
		"Macedonia",
		"Madagascar",
		"Malawi",
		"Malaysia",
		"Maldives",
		"Mali",
		"Malta",
		"Mauritania",
		"Mauritius",
		"Mexico",
		"Moldova",
		"Mongolia",
		"Montenegro",
		"Morocco",
		"Mozambique",
		"Myanmar",
		"Namibia",
		"Nepal",
		"Netherlands",
		"New Zealand",
		"Nicaragua",
		"Niger",
		"Nigeria",
		"North Korea",
		"Norway",
		"Oman",
		"Pakistan",
		"Palau",
		"Palestina",
		"Panama",
		"Papua New Guinea",
		"Paraguay",
		"Peru",
		"Philippines",
		"Poland",
		"Portugal",
		"Puerto Rico",
		"Qatar",
		"Romania",
		"Russia",
		"Rwanda",
		"Saint Kitts and Nevis",
		"Saint Lucia",
		"Saint Vincent and Grenadines",
		"Samoa",
		"Saudi Arabia",
		"Senegal",
		"Serbia",
		"Seychelles",
		"Sierra Leone",
		"Singapore",
		"Slovakia",
		"Slovenia",
		"Solomon Islands",
		"South Africa",
		"South Korea",
		"South Sudan",
		"Spain",
		"Sri Lanka",
		"Sudan",
		"Suriname",
		"Swaziland",
		"Sweden",
		"Switzerland",
		"Syria",
		"Taiwan",
		"Tajikistan",
		"Tanzania",
		"Thailand",
		"Togo",
		"Tonga",
		"Trinidad and Tobago",
		"Tunisia",
		"Turkey",
		"Turkmenistan",
		"Tuvalu",
		"Uganda",
		"Ukraine",
		"United Arab Emirates",
		"United Kingdom",
		"United States",
		"Uruguay",
		"Uzbekistan",
		"Vanuatu",
		"Venezuela",
		"Vietnam",
		"Yemen",
		"Zambia",
		"Zimbabwe"
	];

	var budget = [
		"14",
		"21",
		"18",
		"23",
		"26",
		"32",
		"20",
		"56",
		"39",
		"28",
		"45",
		"27",
		"18",
		"28",
		"23",
		"44",
		"31",
		"24",
		"200",
		"19",
		"21",
		"25",
		"32",
		"46",
		"22",
		"24",
		"24",
		"25",
		"24",
		"47",
		"20",
		"25",
		"14",
		"26",
		"28",
		"22",
		"24",
		"25",
		"17",
		"29",
		"24",
		"30",
		"26",
		"37",
		"25",
		"50",
		"22",
		"24",
		"26",
		"17",
		"21",
		"17",
		"24",
		"26",
		"28",
		"30",
		"25",
		"31",
		"45",
		"45",
		"28",
		"24",
		"20",
		"38",
		"32",
		"35",
		"28",
		"23",
		"28",
		"28",
		"24",
		"24",
		"24",
		"34",
		"25",
		"50",
		"13",
		"19",
		"22",
		"23",
		"46",
		"40",
		"42",
		"31",
		"41",
		"28",
		"28",
		"24",
		"12",
		"18",
		"40",
		"14",
		"22",
		"28",
		"31",
		"14",
		"24",
		"25",
		"26",
		"47",
		"19",
		"25",
		"24",
		"22",
		"22",
		"14",
		"35",
		"24",
		"27",
		"21",
		"17",
		"21",
		"24",
		"20",
		"29",
		"24",
		"27",
		"14",
		"43",
		"46",
		"22",
		"25",
		"31",
		"300",
		"62",
		"25",
		"14",
		"28",
		"26",
		"24",
		"18",
		"17",
		"24",
		"19",
		"23",
		"30",
		"34",
		"34",
		"21",
		"38",
		"24",
		"25",
		"28",
		"23",
		"17",
		"28",
		"24",
		"22",
		"28",
		"24",
		"45",
		"26",
		"33",
		"20",
		"22",
		"40",
		"24",
		"33",
		"19",
		"18",
		"27",
		"23",
		"44",
		"63",
		"19",
		"27",
		"24",
		"25",
		"21",
		"25",
		"32",
		"26",
		"17",
		"24",
		"22",
		"20",
		"25",
		"20",
		"31",
		"45",
		"42",
		"33",
		"26",
		"31",
		"23",
		"20",
		"12",
		"22",
		"31"
	];

	$("#insideLetsGo").click(function(){
    $('#calculator').removeClass("hidden").siblings().addClass("hidden");
		total();
		$( "#country" ).autocomplete({
    	lookup: countries
  	});
	});
	$("#getTotal").click(function(){
    $('#results').removeClass("hidden").siblings().addClass("hidden");
		total();
	});
	$("#toTravelTips").click(function(){
    $('#travelTips').removeClass("hidden").siblings().addClass("hidden");
		total();
	});
	$("#backToTop").click(function(){
    $('#head').removeClass("hidden").siblings().addClass("hidden");
		total();
	});

	$(document).on("keyup", '.getInput', function() {
		total();
	});

	function total() {

		var days = $('.days');
		var dailyCost = $('.dailyCost');
		var activities = $('#activities');
		var flights = $('#flights');
    var sum = 0;

    for (var i = 0; i < dailyCost.length; i++) {
		  var cost = dailyCost[i];
		  var day = days[i];

		  if ($('.activate').hasClass('active')) {
	  	  var dailyCostFinal = Number($(cost).text().replace('$', '').replace('\/day', ''));
				console.log(dailyCostFinal);	
				var hostel;
				var cheapHotel;
				var starHotel;
				var streetFood;
				var eatOut;
				var noParty;
				var moderate;
				var hellYes;

	      if ($('#hostel').hasClass('active')) {
					hostel = 0;
				} else {
					hostel = 0;
				}
				if ($('#cheapHotel').hasClass('active')) {
					console.log(dailyCostFinal);
					cheapHotel = dailyCostFinal * 0.75;
				} else {
					console.log(dailyCostFinal);
					cheapHotel = 0;
				}
				if ($('#starHotel').hasClass('active')) {
					starHotel = (dailyCostFinal * 1.5);
				} else {
					starHotel = 0;
				}
				if ($('#streetFood').hasClass('active')) {
					streetFood = (dailyCostFinal * 0);
				} else {
					streetFood = 0;
				}
				if ($('#eatOut').hasClass('active')) {
					eatOut = (dailyCostFinal * 0.63);
				} else {
					eatOut = 0;
				}
				if ($('#noParty').hasClass('active')) {
					noParty = (dailyCostFinal * 0);
				} else {
					noParty = 0;
				}
				if ($('#moderate').hasClass('active')) {
					moderate = (dailyCostFinal * 0.15);
				} else {
					moderate = 0;
				}
				if ($('#hellYes').hasClass('active')) {
					hellYes = (dailyCostFinal * 0.4);
				} else {
					hellyes = 0;
				}
				
				var addToSum = hostel + cheapHotel + starHotel + streetFood + eatOut + noParty + moderate + hellYes;
				var newDaily = dailyCostFinal + addToSum;
				$('.dailyCost').text("$" + newDaily);
			}

		  $($('.totalCost')[i]).text("$" + (Number($(day).val()) * Number($(cost).text().replace('$', '').replace('\/day', ''))));

		  sum += (Number($(day).val()) * Number($(cost).text().replace('$', '').replace('\/day', '')));
    }

    sum = sum + Number($(activities).val()) + (Number($(flights).val().replace('$', '')) * 0.12);

    $('#totalPrice').text("$" + sum);

  }

	$('.glyphicon-remove').on("click", function() {
		$(this).parent().parent().remove();
		total();
	});

	$('#add').on("click", function() {
		
		$('#addBelow').append('<div class="row"> \
			<div class="daysQty col-xs-2"> \
				<input id="daysInput" class="days getInput" placeholder="Days"> \
			</div> \
			<div class="countryName col-xs-4"></div> \
			<div class="dailyCost col-xs-2"></div> \
			<div class="totalCost col-xs-2"></div> \
			<div class="remove col-xs-1"> \
				<span class="glyphicon glyphicon-remove" aria-hidden="true"></span> \
			</div></div>');

		var countryName = $('#country').val();
		$('.countryName:first').text(countryName);

		var dailyCost = budget[$.inArray(countryName, countries)];
		$('.dailyCost:first').text("$" + dailyCost + "/day");

		$('.glyphicon-remove').on("click", function() {
			$(this).parent().parent().remove();
			total();
		});

		$(document).on("keyup", '.getInput', function() {
			total();
		});

		$('#country').val('');

		total();

	});

	$(".btn-group > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
		total();
	});

});