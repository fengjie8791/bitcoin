$(function(){
	var ham_btn_counter = 0;

	// nav bar animation effect
	$(window).scroll(function(){
	 	if($(document).scrollTop() >= 35){
		    $("nav").addClass("fixednav");
		   	$(".mobile-view-nav-list").addClass("top-60"); 		  	    	   
	  	}else{
		  	$("nav").removeClass("fixednav");	
		  	$(".mobile-view-nav-list").removeClass("top-60");	  	
		}
	});	

		//toggle nav menu in mobile view
	$(".mobile-view-nav-btn i").on("click", function(){
		if(ham_btn_counter % 2 === 0){
			$(".mobile-view-nav-btn i").removeClass("fa-bars");
			$(".mobile-view-nav-btn i").addClass("fa-times");
			$(".mobile-view-nav-list").removeClass("position-left");
			$(".mobile-view-nav-list").addClass("position-middle");
			$("nav").addClass("background-color-07");
			ham_btn_counter++;
		} else{
			$(".mobile-view-nav-btn i").addClass("fa-bars");
			$(".mobile-view-nav-btn i").removeClass("fa-times");
			$(".mobile-view-nav-list").addClass("position-left");
			$(".mobile-view-nav-list").removeClass("position-middle");
			$("nav").removeClass("background-color-07");
			ham_btn_counter++;
		}
		

		$(".mobile-view-nav-list a").on("click", function(){
			$(".mobile-view-nav-btn i").addClass("fa-bars");
			$(".mobile-view-nav-btn i").removeClass("fa-times");
			$(".mobile-view-nav-list").addClass("position-left");
			$(".mobile-view-nav-list").removeClass("position-middle");
			$("nav").removeClass("background-color-07");
			ham_btn_counter++;
		})

	})

	// taggle pop window
	$("#buy_btn").on("click",function(){		
		$(".pop").addClass("display-block");
		$(".pop").removeClass("display-none");
	})

	$("#buy_c_btn").on("click",function(){		
		$(".pop").removeClass("display-block");
		$(".pop").addClass("display-none");
	})

	$("#confirm_btn").on("click",function(){		
		$(".pop-confirm").removeClass("display-none");
		$(".pop-confirm").addClass("display-block");
		$(".pop").addClass("display-none");
		$(".pop").removeClass("display-block");
	})

})