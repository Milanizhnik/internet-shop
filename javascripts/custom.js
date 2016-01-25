$(document).ready(function() {
	$(".nav li").click(function() {
	$(".nav li").removeClass("active");
	$(this).addClass("active");
	});
	$(".large-tile").mouseover(function(){
	$(this).siblings().css('display', 'block');
	});
	$(".large-tile").mouseout(function(){
	$(this).siblings().css('display', 'none');
	});
	$(".basket").mouseover(function() {
	$(".order").toggle();
	});
	$(".basket-small").click(function() {
	$(".order").css("display", "block")
	});
	$(".basket").click(function() {
	$("#popup").show();
	return false;
	});	
	$(".price").click(function() {
	$("#popup").show();
	});	
	$(".big-cross").click(function(){
	$("#popup").hide();
	return false;
	});
	if ($(".advertise-wrap").length > 0) {
    $(".second-level").css({"top": "0", "left": "0"});
	}
	if($('.advertise-wrap').length === 0){
	$(".second-level").css({"top": "0", "left": "100%"});
		}
	$("li.panel").click(function () {
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	});
	$(".cross").click(function (){
	$(".navbar-collapse").collapse('hide');
	});
	$('.delivery-choice').find('li').click(function(){
   //removing the previous selected menu state
   	$('.delivery-choice').find('li.active').removeClass('active');

    //is this element from the second level menu?
    if($(this).closest('ul').hasClass('delivery-submenu')){
         $(this).parents('li').addClass('active');
    //this is a parent element
    }else{
         $(this).addClass('active');
    }
	});
	$(".payment-choice li").click(function() {
	$(".payment-choice li").removeClass("active");
	$(this).addClass("active");
	});
	$(".customer").mouseover(function() {
	$(".customer").removeClass("active");
	$(this).addClass("active");
	});
	$(".producer :checkbox").click(function() {
    $(".tablet").hide();
    $(".producer :checkbox:checked").each(function() {
    $("." + $(this).val()).show();
    });
   	});
	$(".color :checkbox").click(function() {
    $(".tablet").hide();
    $(".color :checkbox:checked").each(function() {
    $("." + $(this).val()).show();
   	});
   	});
	$(".table td").mouseover(function() {
	$(".table td").removeClass("undrln");
	$(this).addClass("undrln");
	});
	$(".table td").click(function() {
	$(".table td").removeClass("active");
	$(this).addClass("active");
	});
	$(".table td").click(function() {
	var filter = $(this).attr('id');  
	$('.tablet').show();
	$('.tablet:not(.' + filter + ')').hide();
	});
	$(".small-cross").click(function() {
	$('.line').hide();
	return false;
	});
	$(".btn-product").on("click", function(){
		var oldValue = $(this).siblings().find("input").val();

		if ($(this).hasClass("add-product")){
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}

		$(this).siblings().find("input").val(newVal);

		var id = $(this).attr("id");
		$.ajax ({
			type: "POST",
			url: "dosomething.php?id=" + id + "&newvalue=" + newVal,
			success: function() {
				$(this).siblings().find("input").val(newVal);
			}
		});
	});
	
});

$(document).ready(function() {
   $("#slider").slider({
		range: true,
        min: 0,
        max: 30000,
        step: 1,
        values: [100, 10000],
        slide: function(event, ui) {
        	for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            };
            var min = ui.values[0];
            var max = ui.values[1];
            showProducts(min, max);
            }

    });

	$("input.sliderValue").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });

    function showProducts(minPrice, maxPrice) {
    $(".tablet-grid div.tablet").hide().filter(function() {
        var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();}
});

	



