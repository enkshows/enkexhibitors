

//
// Show/Hide Press
//

$(document).ready(function(){
	$('.caption, .captionShow').hide();
	
	$('.element').hover(
	function () {
		$(this).find('.caption, .captionShow').stop(true, true).slideDown("fast");
	},
	function(){
		$(this).find('.caption, .captionShow').stop(true, true).slideUp("fast");
	});

});




//
// Collections Table odd/even background
//
  $(document).ready(function(){
		$("tr:odd").css("background", "url(../img/stripe-light-bg1.png) repeat");
  });


//
// rollover on calendar showbox
//

  $(document).ready(function(){
    $("#calendarBox").hover(function() {
      $('#calendarText').stop().css('color', '#ee1c24');
    },
    function() {
      $('#calendarText').stop().css('color', '#d7d7d7');
    });
  });


/*
$(document).ready(function() {
	$("div.text-foot").click(function() {						   	
		$("div.text-foot").toggle(
		  function() {
			$("a.more").html("&#8211");
		  },
		  function() {
			$("a.more").html("+");
		  }
		);
	});	
});

$(this).next(".togglebox").slideToggle("slow");
*/

//
// fade on Image rollovers
//


  $(document).ready(function(){
    $("a img").hover(function() {
      $(this).stop().animate({opacity: "0.6"}, 'slow');
    },
    function() {
      $(this).stop().animate({opacity: "1"}, 'slow');
    });
  });




//
// fade small images
//

$(document).ready(function(){
$(this).find('.fade2').stop().css({opacity:0});	
	$(".image-sm").hover( 
				function(){
						$(this).find('.fade2').stop().animate({
							opacity:1
							},250);
				}, 
				
				function(){
					   $(this).find('.fade2').stop().animate({
							opacity:0
							},250);
				}
	); 
	
});




//
// CONCIERGE, EXHIBITOR, FLOOR PLANS, AMENITIES AND INTERNATIONAL MODULE
//


$(document).ready(function(){

	var currentSection;
	
	window.onload = onLoaded;
	
	// make sure all script is loaded
	function onLoaded()
	{
		window.initExhibitorsList();
		window.initFloorPlans();
		window.initConciege();
		window.initAmenities();
		window.initVisas();
	}
	
////////////////////
///////////////////Exhibitors ("Collections" module)
//////////////////	
	
	window.initExhibitorsList = function()
	{
		var _self = this;
		for(var i=1; i<=18; i++) {
			var content = $("#exhibitors-content"+i);
			console.log(content);
			content.css("display", "none")		
		}
		
		// assign mouse actions
		$(".showcol-btn1").mouseover( onBtnRollOver )
		.mouseout( onBtnRollOut )
		.click( onBtnClick );
		
		// show first section as default section
		toggleSection(1);
	}
	
	function onBtnRollOver()
	{
		// or do you own rollover
		//$(this).animate({"opacity":"0.5"}, 200);
	}
	
	function onBtnRollOut()
	{
		// or do you own rollout
		//$(this).animate({"opacity":"1"}, 200);
	}
	
	function onBtnClick()			
	{
		$( ".showcol-btn1.active" ).removeClass( "active" );
		$( this ).addClass( "active" );
		toggleSection( this.id.substring(3) );
		
	}
	
	function toggleSection(id)
	{
		if(currentSection != null) {
			currentSection.css("display", "none");
		}
		var newSection = $("#exhibitors-content"+id);
		newSection.css("display", "block");
		currentSection = newSection;
	}


});	


//////////////
////////////// FLOOR PLANS module
//////////////

$(document).ready(function(){
	
	
		var currentSection;
	
	// make sure all script is loaded
	window.initFloorPlans = function()
	{
		var _self = this;
		for(var i=1; i<=18; i++) {
			var content = $("#floorplans-content"+i);
			content.css("display", "none")		
		}
		
		// assign mouse actions
		$(".showcol-btn2").mouseover( onBtnRollOver )
		.mouseout( onBtnRollOut )
		.click( onBtnClick );
		
		$(".showcolEmpty2").mouseover( onBtnRollOver )
		.mouseout( onBtnRollOut )
		.click( onBtnClick );
		
		// show first section as default section
		toggleSection(1);
		
		if( window.location.hash === "#floorplans-venue" )
		{
			toggleSection(1);
		}
		if( window.location.hash === "#floorplans-javits" )
		{
			toggleSection(2);
		}
		if( window.location.hash === "#floorplans-pier94" )
		{
			toggleSection(3);
		}		
	}
	
	function onBtnRollOver()
	{
		// or do you own rollover
		//$(this).animate({"opacity":"0.5"}, 200);
	}
	
	function onBtnRollOut()
	{
		// or do you own rollout
		//$(this).animate({"opacity":"1"}, 200);
	}
	
	function onBtnClick()
	{
		toggleSection( this.id.substring(3), this );

	}
	
	function toggleSection(id)
	{
		if(currentSection != null) {
			currentSection.css("display", "none");
		}

		$( ".showcol-btn2.active" ).removeClass( "active" );
		$( ".floorplans-btn" + id ).addClass( "active" );

		var newSection = $("#floorplans-content"+id);
		newSection.css("display", "block");
		currentSection = newSection;
	}
	
	
});	



////////////////////
/////////////////// CONCIERGE ("Hotel + Travel" Module)
//////////////////

$(document).ready(function(){
	
	var currentSection;
	
	// make sure all script is loaded
	window.initConciege = function()
	{
		var _self = this;
		for(var i=1; i<=18; i++) {
			var content = $("#concierge-content"+i);
			content.css("display", "none")		
		}
		
		// assign mouse actions
		$(".showcol-btn3").mouseover( onBtnRollOver )
		.mouseout( onBtnRollOut )
		.click( onBtnClick );
		
		$(".showcolEmpty3").mouseover( onBtnRollOver )
		.mouseout( onBtnRollOut )
		.click( onBtnClick );
		
		// show first section as default section
		toggleSection(1);
	}
	
	function onBtnRollOver()
	{
		// or do you own rollover
		//$(this).animate({"opacity":"0.5"}, 200);
	}
	
	function onBtnRollOut()
	{
		// or do you own rollout
		//$(this).animate({"opacity":"1"}, 200);
	}
	
	function onBtnClick()
	{
		$( ".showcol-btn3.active" ).removeClass( "active" );
		$( this ).addClass( "active" );
		toggleSection( this.id.substring(3) );
	}
	
	function toggleSection(id)
	{
		if(currentSection != null) {
			currentSection.css("display", "none");
		}
		var newSection = $("#concierge-content"+id);
		newSection.css("display", "block");
		currentSection = newSection;
	}
});




///////////////////////
////////////////////// AMENITIES Module
//////////////////////

$(document).ready(function(){
	
	var currentSection;
	
	// make sure all script is loaded
	window.initAmenities = function()
	{
		var _self = this;
		for(var i=1; i<=18; i++) {
			var content = $("#amenities-content"+i);
			content.css("display", "none")		
		}
		
		// assign mouse actions
		$(".showcol-btn4").mouseover( onBtnRollOver )
		.mouseout( onBtnRollOut )
		.click( onBtnClick );
		
		// show first section as default section
		toggleSection(1);
	}
	
	function onBtnRollOver()
	{
		// or do you own rollover
		//$(this).animate({"opacity":"0.5"}, 200);
	}
	
	function onBtnRollOut()
	{
		// or do you own rollout
		//$(this).animate({"opacity":"1"}, 200);
	}
	
	function onBtnClick()
	{
		$( ".showcol-btn4.active" ).removeClass( "active" );
		$( this ).addClass( "active" );	
		toggleSection( this.id.substring(3) );
	}
	
	function toggleSection(id)
	{
		if(currentSection != null) {
			currentSection.css("display", "none");
		}
		var newSection = $("#amenities-content"+id);
		newSection.css("display", "block");
		currentSection = newSection;
	}
});


///////////////////////
////////////////////// International ("Visas" Module)
//////////////////////

$(document).ready(function(){
	
	var currentSection;
	
	// make sure all script is loaded
	window.initVisas = function()
	{
		var _self = this;
		for(var i=1; i<=18; i++) {
			var content = $("#visas-content"+i);
			content.css("display", "none")		
		}
		
		// assign mouse actions
		$(".showcol-btn5").mouseover( onBtnRollOver )
		.mouseout( onBtnRollOut )
		.click( onBtnClick );
		
		// show first section as default section
		toggleSection(1);
	}
	
	function onBtnRollOver()
	{
		// or do you own rollover
		//$(this).animate({"opacity":"0.5"}, 200);
	}
	
	function onBtnRollOut()
	{
		// or do you own rollout
		//$(this).animate({"opacity":"1"}, 200);
	}
	
	function onBtnClick()
	{
		$( ".showcol-btn5.active" ).removeClass( "active" );
		$( this ).addClass( "active" );		
		toggleSection( this.id.substring(3) );
	}
	
	function toggleSection(id)
	{
		if(currentSection != null) {
			currentSection.css("display", "none");
		}
		var newSection = $("#visas-content"+id);
		newSection.css("display", "block");
		currentSection = newSection;
	}
});







// 
// NAVIGATION DOM MANIPULATION
//
$(document).ready(function(){



// Main Nav Links on Show Pages
  //var $newsHome = '<li><a href="#recent-news" title="Recent News">Recent News</a></li>'
	var $companyShow = '<li><a href="../#about" title="About">About</a></li>'
	var $attendShow = '<li><a href="../#attend" title="Attendee/Press Registration">Attend</a></li>'
	var $exhibitShow = '<li><a href="../#exhibit" title="Exhibitor Application">Exhibit</a></li>'
	var $pressShow = '<li><a href="../#press" title="Press">Press</a></li>'
	var $enktravelShow = '<li><a href="../#travel" title="Travel">Travel</a></li>'
	var $contactShow = '<li><a href="../#contact" title="Contact">Contact</a></li>'
	var $theshowsShow = '<li><a href="../#home" title="Shows">Shows</a>'
// Change around the order of the shows below to change order of Main Nav links on Show page Navigation		
	$('#navFirstShow').append( $companyShow, $attendShow, $exhibitShow, $pressShow, $enktravelShow, $contactShow, $theshowsShow );	
	
		
// Main Nav Links on Exhibitor Page
  //var $newsHome = '<li><a href="#recent-news" title="Recent News">Recent News</a></li>'
	var $companyExhibitor = '<li><a href="../../#about" title="About">About</a></li>'
	var $attendExhibitor = '<li><a href="../../#attend" title="Attendee/Press Registration">Attend</a></li>'
	var $exhibitExhibitor = '<li><a href="../../#exhibit" title="Exhibitor Application">Exhibit</a></li>'
	var $pressExhibitor = '<li><a href="../../#press" title="Press">Press</a></li>'
	var $enktravelExhibitor = '<li><a href="../../#travel" title="Travel">Travel</a></li>'
	var $contactExhibitor = '<li><a href="../../#contact" title="Contact">Contact</a></li>'
	var $theshowsExhibitor = '<li><a href="../../#home" title="Shows">Shows</a>'
// Change around the order of the shows below to change order of Main Nav links on Home page Navigation		
	$('#navFirstExhibitor').append( $companyExhibitor, $attendExhibitor, $exhibitExhibitor, $pressExhibitor, $enktravelExhibitor, $contactExhibitor, $theshowsExhibitor );
	
	
// Show Links on Show Pages
	var $acShow = '<li><a href="../circuit" title="Accessorie Circuit">Circuit</a> <ul class="nav_third" id="navThirdac"> </ul> </li>'
	var $icShow = '<li><a href="../intermezzo" title="Intermezzo Collections" >Intermezzo</a> <ul class="nav_third" id="navThirdic"> </ul> </li>'
	var $ccShow = '<li><a href="../childrensclub" title="Childrens Club">Childrens Club</a> <ul class="nav_third" id="navThirdcc"> </ul> </li>'
	var $shanghaiShow = '<li><a href="../enkshanghai" title="ENK/MODE Shanghai">Shanghai</a> <ul class="nav_third" id="navThirdshanghai"> </ul> </li>'
	var $vegasShow = '<li><a href="../enkvegas" title="ENKVegas" >ENKVEGAS</a><ul class="nav_third" id="navThirdvegas"> </ul> </li>'
	var $wsaShow = '<li><a href="http://www.magiconline.com/wsa" target="_blank" title="WSA" >WSA</a> <ul class="nav_third" id="navThirdwsa"> </ul> </li>'
	var $coterieShow = '<li><a href="../coterie" title="Fashion Coterie" >Coterie</a><ul class="nav_third" id="navThirdcoterie"> </ul> </li>'
	var $soleShow = '<li><a href="../sole" title="Sole Commerce" >Sole Commerce</a><ul class="nav_third" id="navThirdsole"> </ul> </li>'
	var $tmrwShow = '<li><a href="../tmrw" title="TMRW" >TMRW</a><ul class="nav_third" id="navThirdtmrw"> </ul> </li>'
// Change around the order of the shows below to change order of show links on Show page Navigation	
	$('#navSecondShow').append(   $ccShow, $acShow, $coterieShow, $vegasShow, $icShow, $shanghaiShow, $soleShow, $tmrwShow, $wsaShow  );


// Show Links on Exhibitor Page
	var $acExhibitor = '<li><a href="../../circuit" title="Accessorie Circuit" >Circuit</a></li>'
	var $icExhibitor = '<li><a href="../../intermezzo" title="Intermezzo Collections">Intermezzo</a></li>'
	var $ccExhibitor = '<li><a href="../../childrensclub" title="Childrens Club">Childrens Club</a> </li>'
	var $shanghaiExhibitor = '<li><a href="../../enkshanghai" title="ENK/MODE Shanghai">Shanghai</a> </li>'
	var $vegasExhibitor = '<li><a href="../../enkvegas" title="ENKVegas" >ENKVEGAS</a></li>'
	var $wsaExhibitor = '<li><a href="http://www.magiconline.com/wsa" target="_blank" title="WSA" >WSA</a> </li>'
	var $coterieExhibitor = '<li><a href="../../coterie" title="Fashion Coterie" >Coterie</a></li>'
	var $soleExhibitor = '<li><a href="../../sole" title="Sole Commerce" >Sole Commerce</a></li>'
	var $tmrwExhibitor = '<li><a href="../../tmrw" title="TMRW" >TMRW</a></li>'
// Change around the order of the shows below to change order of show links on Home page Navigation		
	$('#navSecondExhibitor').append(  $ccExhibitor, $acExhibitor, $coterieExhibitor, $vegasExhibitor, $icExhibitor, $shanghaiExhibitor, $soleExhibitor, $tmrwExhibitor, $wsaExhibitor );


// Module Links on Show pages (Nav Third) (add more vars to create new links)
	var $collections = '<li><a href="#collections">Collections</a></li>'
	var $floorplan = '<li><a href="#floorplans">Floor Plans</a></li>'
	var $concierge = '<li><a href="#hotel-travel">Hotel + Travel</a></li>'
	var $gallery = '<li><a href="#gallery">Gallery</a></li>'
	var $highlights = '<li><a href="#highlights">Highlights</a></li>'
	var $video = '<li><a href="#video">Video</a></li>'
	var $amenities = '<li><a href="#amenities">Amenities</a></li>'
	var $international = '<li><a href="#visas">Visas</a></li>'
	var $overview = '<li><a href="#overview">Overview</a></li>'
  	//var $contact = '<li><a href="#contact">Contact</a></li>'


//circuit third branch links
	if( $("body").hasClass("acJanPage") == true) 
		  { 
		  	$('#navThirdac').prev().addClass( "activeLink" );
		  	$('#navThirdac').append($highlights, $collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdac').append(); }

//intermezzo third branch links
	if( $("body").hasClass("icJanPage") == true) 
		  { 
		  	$('#navThirdic').prev().addClass( "activeLink" );
		  	$('#navThirdic').append($highlights, $collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdic').append(); }
	
//circuit third branch links
	if( $("body").hasClass("acMayPage") == true) 
		  { 
		  	$('#navThirdac').prev().addClass( "activeLink" );
		  	$('#navThirdac').append($highlights, $collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdac').append(); }

//intermezzo third branch links
	if( $("body").hasClass("icMayPage") == true) 
		  { 
		  	$('#navThirdic').prev().addClass( "activeLink" );
		  	$('#navThirdic').append($highlights, $collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdic').append(); }
	


//ccjan third branch links	
	if( $("body").hasClass("ccJanPage") == true) 
		  { 
		  	$('#navThirdcc').prev().addClass( "activeLink" );
		  	$('#navThirdcc').append($highlights, $collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdcc').append(); }

		//ccmar third branch links	
			if( $("body").hasClass("ccMarPage") == true) 
				  { 
				  	$('#navThirdcc').prev().addClass( "activeLink" );
				  	$('#navThirdcc').append($highlights, $collections, $floorplan, $concierge, $gallery); }
			else { $('#navThirdcc').append(); }	
			
			//ccaug third branch links	
				if( $("body").hasClass("ccAugPage") == true) 
					  { 
					  	$('#navThirdcc').prev().addClass( "activeLink" );
					  	$('#navThirdcc').append($highlights, $collections, $floorplan, $concierge, $gallery); }
				else { $('#navThirdcc').append(); }	
	
	
	
//clearwhite third branch links	
	if( $("body").hasClass("clearwhitePage") == true) 
		  { 
		  	$('#navThirdclearwhite').prev().addClass( "activeLink" );
		  	$('#navThirdclearwhite').append($collections, $floorplan); }
	else { $('#navThirdclearwhite').append(); }		
	
//beijing third branch links	
	if( $("body").hasClass("beijingPage") == true) 
		  { 
		  	$('#navThirdbeijing').prev().addClass( "activeLink" );
		  	$('#navThirdbeijing').append($overview, $collections, $concierge, $gallery); }
	else { $('#navThirdbeijing').append(); }

		
//shanghai third branch links	
	if( $("body").hasClass("shanghaiPage") == true) 
		  { 
		  	$('#navThirdshanghai').prev().addClass( "activeLink" );
		  	$('#navThirdshanghai').append($highlights, $overview, $concierge); }
	else { $('#navThirdshanghai').append(); }
		
//vegas third branch links	
	if( $("body").hasClass("vegasPageFeb") == true) 
		  { 
		  	$('#navThirdvegas').prev().addClass( "activeLink" );
		  	$('#navThirdvegas').append($highlights, $collections, $floorplan, $gallery); }
	else { $('#navThirdvegas').append(); }		
		
	//vegas third branch links	
		if( $("body").hasClass("vegasPage") == true) 
			  { 
			  	$('#navThirdvegas').prev().addClass( "activeLink" );
			  	$('#navThirdvegas').append($highlights, $collections, $floorplan, $concierge, $video); }
		else { $('#navThirdvegas').append(); }
			
//wsa third branch links	
	if( $("body").hasClass("wsaPage") == true) 
		  { 
		  	$('#navThirdwsa').prev().addClass( "activeLink" );
		  	$('#navThirdwsa').append($highlights, $collections, $floorplan, $concierge, $amenities, $international, $gallery); }
	else { $('#navThirdwsa').append(); }
	
	//wsa third branch links	
	if( $("body").hasClass("wsaPageAug") == true) 
		  { 
		  	$('#navThirdwsa').prev().addClass( "activeLink" );
		  	$('#navThirdwsa').append($highlights, $collections, $concierge, $gallery); }
	else { $('#navThirdwsa').append(); }
		
//coterie third branch links	
	if( $("body").hasClass("coteriePage") == true) 
		  { 
		  	$('#navThirdcoterie').prev().addClass( "activeLink" );
		  	$('#navThirdcoterie').append($highlights, $collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdcoterie').append(); }
		
//sole third branch links	
	if( $("body").hasClass("solePage") == true) 
		  { 
		  	$('#navThirdsole').prev().addClass( "activeLink" );
		  	$('#navThirdsole').append($collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdsole').append(); }
									
//tmrw third branch links	
	if( $("body").hasClass("tmrwPage") == true) 
		  { 
		  	$('#navThirdtmrw').prev().addClass( "activeLink" );
		  	$('#navThirdtmrw').append($highlights, $collections, $floorplan, $concierge, $gallery); }
	else { $('#navThirdtmrw').append(); }
							

// Social links
	var $calendar = '<a id="calendar" target="_blank" href="http://www.enkshows.com/pdf/ENKcalendar.pdf" title="All Shows Calendar"><span>pdf/ENKcalendar.pdf</span></a>'
	var $fb = '<a id="fb" target="_blank" href="https://www.facebook.com/ENKInternational" title="ENK Facebook"><span>https://www.facebook.com/ENKInternational</span></a>'
	var $twit = '<a id="twit" target="_blank" href="https://twitter.com/ENKSHOWS" title="ENK Twitter"><span>https://twitter.com/ENKSHOWS</span></a>'
	var $tmblr = '<a id="tmblr" target="_blank" href="http://enkinternational.tumblr.com/" title="ENK Tumblr"><span>http://enkinternational.tumblr.com/</span></a>'
	
$('.socialNav').append($calendar, $fb, $twit, $tmblr);


// Social links CC
	var $fbCC = '<a id="fb" target="_blank" href="https://www.facebook.com/Childrens.Club" title="ENK Facebook"><span>https://www.facebook.com/Childrens.Club</span></a>'
	var $twitCC = '<a id="twit" target="_blank" href="https://twitter.com/childrensclub" title="ENK Twitter"><span>https://twitter.com/childrensclub</span></a>'
	var $tmblrCC = '<a id="tmblr" target="_blank" href="http://childrensclub.tumblr.com/" title="ENK Tumblr"><span>http://childrensclub.tumblr.com/</span></a>'

$('.socialCC').append($calendar, $fbCC, $twitCC, $tmblrCC);

//Other Twitter links

var $twitFC = '<a id="twit" target="_blank" href="https://twitter.com/FashionCoterie" title="ENK Twitter"><span>https://twitter.com/FashionCoterie</span></a>'
var $twitACIC = '<a id="twit" target="_blank" href="https://twitter.com/ACICENK" title="ENK Twitter"><span>https://twitter.com/ACICENK</span></a>'
var $twitVegas = '<a id="twit" target="_blank" href="https://twitter.com/ENK_VEGAS" title="ENK Twitter"><span>https://twitter.com/ENK_VEGAS</span></a>'

$('.socialFC').append($calendar, $fb, $twitFC, $tmblr);

$('.socialACIC').append($calendar, $fb, $twitACIC, $tmblr);

$('.socialVegas').append($calendar, $fb, $twitVegas, $tmblr);

});




//
// FIXED FOOTER DOM MANIPULATION L + R Content
//

// created element
var enkFoot = document.createElement("span");
var infoFoot1 = document.createElement("span");
var infoFoot2 = document.createElement("span");
var infoFoot3 = document.createElement("span");
var emailFoot = document.createElement("a");

// created child nodes manually
var enkFootText = document.createTextNode("ENK INTERNATIONAL");
var infoFoot1Text = document.createTextNode("3 EAST 54 STREET NEW YORK, NY 10022");
var infoFoot2Text = document.createTextNode("T. 212.759.8055");
var infoFoot3Text = document.createTextNode("F. 212.758.3403");
var emailFootText = document.createTextNode("ENKSHOWS@ENKSHOWS.COM");

// appended attributes to element
enkFoot.setAttribute("class", "foot_enk");
infoFoot1.setAttribute("class", "foot_space");
infoFoot2.setAttribute("class", "foot_space");
infoFoot3.setAttribute("class", "foot_space2");
emailFoot.setAttribute("href", "mailto:enkshows@enkshows.com");
	emailFoot.setAttribute("class", "redLink");
		emailFoot.setAttribute("target", "_blank");
											  
// appended info to element
enkFoot.appendChild(enkFootText);
infoFoot1.appendChild(infoFoot1Text);
infoFoot2.appendChild(infoFoot2Text);
infoFoot3.appendChild(infoFoot3Text);
emailFoot.appendChild(emailFootText);

// appended the element to the document!
document.getElementById("lFoot").appendChild(enkFoot);
document.getElementById("lFoot").appendChild(infoFoot1);
document.getElementById("lFoot").appendChild(infoFoot2);
document.getElementById("lFoot").appendChild(infoFoot3);
document.getElementById("rFoot").appendChild(emailFoot);



//
// Sticky Footer container DIV's
//

// created element
var logoSticky = document.createElement("div");
var footboxSticky = document.createElement("div");
var footboxShowsSticky = document.createElement("div");
var footboxCompanySticky = document.createElement("div");

// created child nodes manually
var logoStickyText = document.createTextNode("ENK INTERNATIONAL");
var footboxStickyText = document.createTextNode("");
var footboxShowsStickyText = document.createTextNode("");
var footboxCompanyStickyText = document.createTextNode("");


// appended attributes to element
logoSticky.setAttribute("id", "footlogo");
footboxSticky.setAttribute("id", "footbox");
footboxShowsSticky.setAttribute("id","footboxShows");
footboxCompanySticky.setAttribute("id","footboxCompany");


// appended info to element
logoSticky.appendChild(logoStickyText);
footboxSticky.appendChild(footboxStickyText);
footboxShowsSticky.appendChild(footboxShowsStickyText);
footboxCompanySticky.appendChild(footboxCompanyStickyText);

// appended the element to the document!
document.getElementById("footerlinks").appendChild(logoSticky);
document.getElementById("footerlinks").appendChild(footboxSticky);
document.getElementById("footbox").appendChild(footboxShowsSticky);
document.getElementById("footbox").appendChild(footboxCompanySticky);


//
// Sticky Footer SHOW Links
//

// created element
var footAc = document.createElement("a");
var footIc = document.createElement("a");
var footCc = document.createElement("a");
var footBeijing = document.createElement("a");
var footNyc = document.createElement("a");
var footWsa = document.createElement("a");
var footFc = document.createElement("a");
var footSole = document.createElement("a");
var footTmrw = document.createElement("a");
var footWhite = document.createElement("a");
var footShanghai = document.createElement("a");
var footVegas = document.createElement("a");



// created child nodes manually
var footAcText = document.createTextNode("Circuit");
var footIcText = document.createTextNode("Intermezzo");
var footCcText = document.createTextNode("Children's Club");
var footBeijingText = document.createTextNode("ENKBeijing");
var footNycText = document.createTextNode("Project/ENKNYC");
var footWsaText = document.createTextNode("WSA");
var footFcText = document.createTextNode("Coterie");
var footSoleText = document.createTextNode("Sole");
var footTmrwText = document.createTextNode("TMRW");
var footWhiteText = document.createTextNode("Clear White");
var footShanghaiText = document.createTextNode("Shanghai");
var footVegasText = document.createTextNode("ENKVegas");



// appended attributes to element
footAc.setAttribute("class", "show");
	footAc.setAttribute("href", "http://www.enkshows.com/circuit");
			footAc.setAttribute("title", "Accessorie Circuit");

footIc.setAttribute("class", "show");
	footIc.setAttribute("href", "http://www.enkshows.com/intermezzo");
			footIc.setAttribute("title", "Intermezzo Collections");
						
footCc.setAttribute("class", "show");
	footCc.setAttribute("href", "http://www.enkshows.com/childrensclub");
			footCc.setAttribute("title", "Children's Club");	

footBeijing.setAttribute("class", "show");
	footBeijing.setAttribute("href", "http://www.enkshows.com/enkbeijing");
			footBeijing.setAttribute("title", "ENKBeijing");

footNyc.setAttribute("class", "show");
	footNyc.setAttribute("href", "http://www.enkshows.com/enknyc");
			footNyc.setAttribute("title", "Project/ENKNYC");
			
footWsa.setAttribute("class", "show");
	footWsa.setAttribute("href", "http://www.magiconline.com/wsa");
			footWsa.setAttribute("title", "WSA");
				footWsa.setAttribute("target", "_blank");
			
footFc.setAttribute("class", "show");
	footFc.setAttribute("href", "http://www.enkshows.com/coterie");
			footFc.setAttribute("title", "Coterie");

footSole.setAttribute("class", "show");
	footSole.setAttribute("href", "http://www.enkshows.com/sole");
			footSole.setAttribute("title", "Sole Commerce");	
			
footTmrw.setAttribute("class", "show");
	footTmrw.setAttribute("href", "http://www.enkshows.com/tmrw");
			footTmrw.setAttribute("title", "TMRW");	

footWhite.setAttribute("class", "show");
	footWhite.setAttribute("href", "http://www.enkshows.com/clearwhite");
			footWhite.setAttribute("title", "Clear White");	
			
footShanghai.setAttribute("class", "show");
	footShanghai.setAttribute("href", "http://www.enkshows.com/enkshanghai");
			footShanghai.setAttribute("title", "MODE Shanghai ENK");		
			
footVegas.setAttribute("class", "show");
	footVegas.setAttribute("href", "http://www.enkshows.com/enkvegas");
			footVegas.setAttribute("title", "ENKVegas");									
			
		
	
			

// appended info to element
footAc.appendChild(footAcText);
footIc.appendChild(footIcText);
footCc.appendChild(footCcText);
footBeijing.appendChild(footBeijingText);
footNyc.appendChild(footNycText);
footWsa.appendChild(footWsaText);
footFc.appendChild(footFcText);
footSole.appendChild(footSoleText);
footTmrw.appendChild(footTmrwText);
footWhite.appendChild(footWhiteText);
footShanghai.appendChild(footShanghaiText);
footVegas.appendChild(footVegasText);



// appended the element to the document!
document.getElementById("footboxShows").appendChild(footCc);
document.getElementById("footboxShows").appendChild(footAc);
//document.getElementById("footboxShows").appendChild(footWhite);
document.getElementById("footboxShows").appendChild(footFc);
//document.getElementById("footboxShows").appendChild(footBeijing);
document.getElementById("footboxShows").appendChild(footVegas);
document.getElementById("footboxShows").appendChild(footIc);
//document.getElementById("footboxShows").appendChild(footNyc);
document.getElementById("footboxShows").appendChild(footSole);
document.getElementById("footboxShows").appendChild(footShanghai);
document.getElementById("footboxShows").appendChild(footTmrw);
document.getElementById("footboxShows").appendChild(footWsa);



//
// Sticky Footer COMPANY Links
//

// created element
var footSiteMap = document.createElement("a");
var footCareers = document.createElement("a");
var footFaq = document.createElement("a");
var footPp = document.createElement("a");
var footTc = document.createElement("a");
var footTop = document.createElement("a");

var footLine1 = document.createElement("span");
var footLine2 = document.createElement("span");
var footLine3 = document.createElement("span");
var footLine4 = document.createElement("span");
var footLine5 = document.createElement("span");


// created child nodes manually
var footSiteMapText = document.createTextNode("Site Map");
var footCareersText = document.createTextNode(" Careers");
var footFaqText = document.createTextNode(" F.A.Q.");
var footPpText = document.createTextNode(" Privacy Policy");
var footTcText = document.createTextNode(" Terms & Conditions");
var footTopText = document.createTextNode(" Back to top");

var footLineText1 = document.createTextNode(" | ");
var footLineText2 = document.createTextNode(" | ");
var footLineText3 = document.createTextNode(" | ");
var footLineText4 = document.createTextNode(" | ");
var footLineText5 = document.createTextNode(" | ");

// appended attributes to element
footSiteMap.setAttribute("class", "company");
	footSiteMap.setAttribute("href", "http://www.enkshows.com/company/site-map.html");
			footSiteMap.setAttribute("title", "Site Map");
			
footCareers.setAttribute("class", "company");
	footCareers.setAttribute("href", "http://www.enkshows.com/company/careers.html");
			footCareers.setAttribute("title", "Careers");			

footFaq.setAttribute("class", "company");
	footFaq.setAttribute("href", "http://www.enkshows.com/company/faq.html");
			footFaq.setAttribute("title", "F.A.Q.");

footPp.setAttribute("class", "company");
	footPp.setAttribute("href", "http://www.enkshows.com/company/privacy-policy.html");
			footPp.setAttribute("title", "Privacy Policy");
			
footTc.setAttribute("class", "company");
	footTc.setAttribute("href", "http://www.enkshows.com/company/terms-conditions.html");
			footTc.setAttribute("title", "Terms & Conditions");

footTop.setAttribute("class", "company");
	footTop.setAttribute("href", "#top");
			footTop.setAttribute("title", "Back to top");

footLine1.setAttribute("class", "footLine");	
footLine2.setAttribute("class", "footLine");	
footLine3.setAttribute("class", "footLine");	
footLine4.setAttribute("class", "footLine");	
footLine5.setAttribute("class", "footLine");	

// appended info to element
footSiteMap.appendChild(footSiteMapText);
footCareers.appendChild(footCareersText);
footFaq.appendChild(footFaqText);
footPp.appendChild(footPpText);
footTc.appendChild(footTcText);
footTop.appendChild(footTopText);

footLine1.appendChild(footLineText1);
footLine2.appendChild(footLineText2);
footLine3.appendChild(footLineText3);
footLine4.appendChild(footLineText4);
footLine5.appendChild(footLineText5);



// appended the element to the document!
//document.getElementById("footboxCompany").appendChild(footSiteMap);
//document.getElementById("footboxCompany").appendChild(footLine1);
// document.getElementById("footboxCompany").appendChild(footCareers);
// document.getElementById("footboxCompany").appendChild(footLine2);
//document.getElementById("footboxCompany").appendChild(footFaq);
//document.getElementById("footboxCompany").appendChild(footLine3);
document.getElementById("footboxCompany").appendChild(footPp);
document.getElementById("footboxCompany").appendChild(footLine4);
document.getElementById("footboxCompany").appendChild(footTc);
document.getElementById("footboxCompany").appendChild(footLine5);
document.getElementById("footboxCompany").appendChild(footTop);








