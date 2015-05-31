$(document).ready(function() {

  var countries = ["Afghanistan", "Albania", "Algeria", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, DR", "Congo, Republic", "Costa Rica", "Ivory Coast", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestina", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "St. Vincent and Grenadines", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

  var budget = ["14", "21", "18", "23", "26", "32", "20", "56", "39", "28", "45", "27", "18", "28", "23", "44", "31", "24", "200", "19", "21", "25", "32", "46", "22", "24", "24", "25", "24", "47", "20", "25", "14", "26", "28", "22", "24", "25", "17", "29", "24", "30", "26", "37", "25", "50", "22", "24", "26", "17", "21", "17", "24", "26", "28", "30", "25", "31", "45", "45", "28", "24", "20", "38", "32", "35", "28", "23", "28", "28", "24", "24", "24", "34", "25", "50", "13", "19", "22", "23", "46", "40", "42", "31", "41", "28", "28", "24", "12", "18", "40", "14", "22", "28", "31", "14", "24", "25", "26", "47", "19", "25", "24", "22", "22", "14", "35", "24", "27", "21", "17", "21", "24", "20", "29", "24", "27", "14", "43", "46", "22", "25", "31", "300", "62", "25", "14", "28", "26", "24", "18", "17", "24", "19", "23", "30", "34", "34", "21", "38", "24", "25", "28", "23", "17", "28", "24", "22", "28", "24", "45", "26", "33", "20", "22", "40", "24", "33", "19", "18", "27", "23", "44", "63", "19", "27", "24", "25", "21", "25", "32", "26", "17", "24", "22", "20", "25", "20", "31", "45", "42", "33", "26", "31", "23", "20", "12", "22", "31"];



	var multipliers = {
		sleep: 0,
		eat: 0,
		party: 0,
		options: 1
	};

	var countryName = [];
  var dailyCost = [];

  //--------------------------------------------------------
  // SLEEP
  //--------------------------------------------------------
  function addSleep(elem) {
    multipliers.sleep = $(elem).data('sleep');
    multipliers.options += multipliers.sleep;
  }
  
  $('#hostel, #cheapHotel, #starHotel').click(function() {
    addSleep(this);
  });

  //--------------------------------------------------------
  // EAT
  //--------------------------------------------------------
  function addEat(elem) {
    multipliers.eat = $(elem).data('eat');
    multipliers.options += multipliers.eat;
  }

  $('#streetFood, #eatOut').click(function() {
    addEat(this);
  });

  //--------------------------------------------------------
  // PARTY
  //--------------------------------------------------------
  function addParty(elem) {
    multipliers.party = $(elem).data('party');
    multipliers.options += multipliers.party;
  }

  $('#noParty, #moderate, #hellYes').click(function() {
    addParty(this);
  });

  $("#insideLetsGo").click(function(){
    $('#whichCountry').removeClass("hidden").siblings().addClass("hidden");
    $( "#country" ).autocomplete({lookup: countries });
  });

  $("#toCountry").click(function(){
    $('#whichCountry').removeClass("hidden").siblings().addClass("hidden");
    $( "#country" ).autocomplete({lookup: countries });
  });

  $("#toHome").click(function(){
    $('#head').removeClass("hidden").siblings().addClass("hidden");
  });

  $(".firstStep").click(function(){
    $('#eatX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toSleep2").click(function(){
    $('#sleepX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toSleep").click(function(){
    $('#sleepX').removeClass("hidden").siblings().addClass("hidden");
    multipliers.sleep = 0;
  });

  $(".secondStep").click(function(){
    $('#partyX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toEat2").click(function(){
    $('#eatX').removeClass("hidden").siblings().addClass("hidden");
    multipliers.eat = 0;
  });

  $(".thirdStep").click(function(){
    $('#activityX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toParty2").click(function(){
    $('#partyX').removeClass("hidden").siblings().addClass("hidden");
    multipliers.party = 0;
  });

  $("#toFlights").click(function(){
    $('#flightX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toActivity2").click(function(){
    $('#activityX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toCalculator").click(function(){
    $('#calculator').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toFlights2").click(function(){
    $('#flightX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toFlights3").click(function(){
    $('#flightX').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#getTotal").click(function(){
    $('#results').removeClass("hidden").siblings().addClass("hidden");
  });

  $("#toCalculator2").click(function(){
    $('#calculator').removeClass("hidden").siblings().addClass("hidden");
    $('.daysInput:last').focus();
  });

  $("#toCalculator3").click(function(){
    $('#calculator').removeClass("hidden").siblings().addClass("hidden");
    // $( "#country" ).autocomplete({lookup: countries });
    var dailyCost2 = [];

    $('.daysQty').parent().remove();

    for (var i = 0; i < dailyCost.length; i++){
      addCountry2();
      $('.countryName:last').text(countryName[i]);
      dailyCost2.push(Math.round(dailyCost[i] * multipliers.options));
      $($('.dailyCost')[i]).text("$" + dailyCost2[i] + "/day");
    }
    total();
    // $('.daysInput:last').focus();
  });

  $("#backToTop").click(function(){
    $('#head').removeClass("hidden").siblings().addClass("hidden");
    multipliers.options = 1;
    multipliers.eat = 0;
    multipliers.sleep = 0;
    multipliers.party = 0;
  });

  $(document).on("keyup", '.getInput', function() {
    total();
  });

  function total() {
    var days = $('.days');
    var dailyCosts = $('.dailyCost');
    var activities = Number($('#activities').val());
    var flights = (Number($('#flights').val()) * 0.12);
    var sum = 0;
    var dayT = 0;
    var sumLess = 0;
    var average = 0;
    var totalFlights = 0;
    var totalTransport = 0;
    var totalSleep = 0;
    var totalFood = 0;
    var totalActivities = 0;
    var totalTravel = 0;

    for (var i = 0; i < dailyCosts.length; i++) {
      var cost = dailyCosts[i];
      var costNumber = Number($(cost).text().replace('$', '').replace('\/day', ''));
      var day = days[i];
      var dayNumber = Number($(day).val());
      
      $($('.dailyCost')[i]).text("$" + costNumber + "\/day");
      $($('.totalCost')[i]).text("$" + dayNumber * costNumber);
      
      sum += (Number($(day).val()) * Number($(cost).text().replace('$', '').replace('\/day', '')));
      dayT += Number($(day).val());
    }

    sumLess = sum;
    average = Math.round(sumLess/dayT);
    sum = Math.round(sum + activities + flights);

    totalFlights = Math.round(flights);
    totalTransport = Math.round(sumLess * 0.25);
    totalSleep = Math.round(sumLess * 0.3);
    totalFood = Math.round(sumLess * 0.25);
    totalActivities = Math.round((sumLess * 0.15) + activities);
    totalTravel = Math.round(sumLess * 0.05);

    $('#totalFlights').text("$" + totalFlights);
    $('#totalTransport').text("$" + totalTransport);
    $('#totalSleep').text("$" + totalSleep);
    $('#totalFood').text("$" + totalFood);
    $('#totalActivities').text("$" + totalActivities);
    $('#totalTravel').text("$" + totalTravel);
    $('#totalPrice').text("$" + sum);
    $('#sumCaption').text("You will visit " + days.length + " countries for " + dayT + " days and spend an average of $" + average + " daily");
  }

  $('#add').on("click", function() {
    if (countries.indexOf($('#country').val()) > -1) {
      countryName.push($('#country').val());
      dailyCost.push(budget[$.inArray($('#country').val(), countries)]);

      addCountry();
    } else {
      $('#country').val('');
    }
  });
  
  $(document).on('click', '.remov', function() {
    $(this).fadeOut(600,function() { $(this).remove() });
    var index = countryName.indexOf($(this).text().replace(' + ', ''));
    countryName.splice(index, 1);
    dailyCost.splice(index, 1);
    total();
  });



  function addCountry() {
    $('#addCountry').append('<a class="remov">' + countryName[countryName.length -1] + ' + ' + '</a>');

    $('#country').val('');
  }

  function addCountry2() {
    $('#addBelow').children().append('<tr>' +
      '<td class="daysQty table1">' +
      '<input class="days getInput daysInput" placeholder="Days">' +
      '</td>' +
      '<td class="countryName table1"></td>' +
      '<td class="dailyCost table1"></td>' +
      '<td class="totalCost table1"></td>' +
      '<td class="remove table1">' +
      '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
      '</td></tr>');

    $('.glyphicon-remove').on("click", function() {
      var index = $(this).parent().index(".remove");
      $(this).parent().parent().fadeOut(600,function() {
        $(this).remove() 
        console.log(index);
        $($('.remov')[index]).remove();
        countryName.splice(index, 1);
        dailyCost.splice(index, 1);
        console.log(countryName);
        total();
      });
    });
  }
});

