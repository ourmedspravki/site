import $ from 'jquery';
import './../stylesheets/style_r.css';
import './../stylesheets/style.css';
document.addEventListener('DOMContentLoaded', function() {
	const global_width = document.querySelector('#section-1').offsetWidth;
	const global_height = document.querySelector('#section-1').offsetHeight;
	global_wrapper.style.width = global_width - 40 + "px";
	global_wrapper.style.height = global_height - 92.5 + "px";
	global_wrapper.style.top = 70 + "px";
	global_wrapper.style.left = 50 + "%"
	const width = document.querySelector('#section-1 #global_wrapper').offsetWidth;
	const height = document.querySelector('#section-1 #global_wrapper').offsetHeight;
	border_wrapper.style.width = width - 22 + "px";
	border_wrapper.style.height = height - 22 + "px";
	vk_comments.style.width = document.querySelector('.spravka').offsetWidth * 2 + 7 + "px";
	vk_comments.style.left = $('#section-3 .wrapper').offset().left + 19.5 + "px";
	section_4.style.width = document.querySelector('.spravka').offsetWidth * 2 + 7 + "px";
	section_4.style.left = $('#section-3 .wrapper').offset().left + 19.5 + "px";
	$( window ).resize(function () {
	const global_width = document.querySelector('#section-1').offsetWidth;
	vk_comments.style.width = document.querySelector('.spravka').offsetWidth * 2 + 7 + "px";
	const global_height = document.querySelector('#section-1').offsetHeight;
	vk_comments.style.left = $('#section-3 .wrapper').offset().left + 19.5 + "px";
	section_4.style.width = document.querySelector('.spravka').offsetWidth * 2 + 7 + "px";
	section_4.style.left = $('#section-3 .wrapper').offset().left + 19.5 + "px";
	global_wrapper.style.width = global_width - 40 + "px";
	global_wrapper.style.height = global_height - 92.5 + "px";
	global_wrapper.style.top = 70 + "px";
	global_wrapper.style.left = 50 + "%"
	const width = document.querySelector('#section-1 #global_wrapper').offsetWidth;
	const height = document.querySelector('#section-1 #global_wrapper').offsetHeight;
	border_wrapper.style.width = width - 22 + "px";
	border_wrapper.style.height = height - 22 + "px";
	});

	$(".email_button").click(()=>{
		$("#outplane").fadeIn(400, ()=>{
            $("#blank").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
		});
		 $('#success').css("display", "none");
	});


    $('#close_modal, #outplane').click( function(){
        $('#blank')
            .animate({opacity: 0, top: '45%'}, 200,
                ()=>{
                    $("#blank").css('display', 'none');
                    $('#outplane').fadeOut(400);
                }
            );
    });

    $('#desc_1').click(()=>{
        
        $('#desc_desc_095').css("display", "block");
        $('.descPlusImg').css('backgroundImage','url("../img/095u.jpg")');
        $('.descPlusImg').css('background-color', '#ffffff');
        $("#outplane").fadeIn(400, ()=>{
        $(".descPlus-1").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
})
});
    $('#desc_2').click(()=>{
        $('#desc_desc_027').css("display", "block");
        $('.descPlusImg').css('backgroundImage','url("../img/027u.png")');
        $('.descPlusImg').css('background-color', '#ffffff');
        $("#outplane").fadeIn(400, ()=>{
        $(".descPlus-1").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
        })
    });
    $('#desc_3').click(()=>{
        $('#desc_desc_kek').css("display", "block");
        $('.descPlusImg').css('backgroundImage','url("../img/kek.jpg")');
        $('.descPlusImg').css('background-color', '#262626');
        $("#outplane").fadeIn(400, ()=>{
        $(".descPlus-1").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
        })
    });
    $("#desc_4").click(()=>{
        $('#desc_desc_academ').css("display", "block");
        $('.descPlusImg').css('backgroundImage','none');
        $('.descPlusImg').css('background-color', '#f8f8f2');
        $('#academ_buttons').css('display', 'block');
        $("#outplane").fadeIn(400, ()=>{
        $(".descPlus-1").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
        })
    });
    $('#button1').click( function(){
        $('.descPlus-1')
            .animate({opacity: 0, top: '20%'}, 0,
                ()=>{
                    $(".descPlus-1").css('display', 'none');
                    $('#academ_buttons').css('display', 'none');
                    $('.desc_desc_div').css("display", "none");
                    $('#outplane').fadeOut(0);
                }
            );
        $('#desc_desc_095').css("display", "block");
        $('.descPlusImg').css('backgroundImage','url("../img/095u.jpg")');
        $('.descPlusImg').css('background-color', '#ffffff');
        $("#outplane").fadeIn(400, ()=>{
        $(".descPlus-1").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
    });
    });
    $('#button2').click( function(){
        $('.descPlus-1')
            .animate({opacity: 0, top: '20%'}, 0,
                ()=>{
                    $('.desc_desc_div').css("display", "none");
                    $(".descPlus-1").css('display', 'none');
                    $('#academ_buttons').css('display', 'none');
                    $('#outplane').fadeOut(0);
                }
            );
        $('#desc_desc_027').css("display", "block");
        $('.descPlusImg').css('backgroundImage','url("../img/027u.png")');
        $('.descPlusImg').css('background-color', '#ffffff');
        $("#outplane").fadeIn(400, ()=>{
        $(".descPlus-1").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
    });
    });
    $('#button3').click( function(){
        $('.descPlus-1')
            .animate({opacity: 0, top: '20%'}, 0,
                ()=>{
                    $('.desc_desc_div').css("display", "none");
                    $(".descPlus-1").css('display', 'none');
                    $('#academ_buttons').css('display', 'none');
                    $('#outplane').fadeOut(0);
                }
            );
        $('#desc_desc_kek').css("display", "block");
        $('.descPlusImg').css('backgroundImage','url("../img/kek.jpg")');
        $('.descPlusImg').css('background-color', '#262626');
        $("#outplane").fadeIn(400, ()=>{
        $(".descPlus-1").css("display", "block").animate({opacity: 0.95, top: '50%'}, 200);
    });
    });
    $('#outplane, #close_modal_desc1').click( function(){
        $('.descPlus-1')
            .animate({opacity: 0, top: '20%'}, 200,
                ()=>{
                    $('.desc_desc_div').css("display", "none");
                    $(".descPlus-1").css('display', 'none');
                    $('#academ_buttons').css('display', 'none');
                    $('#outplane').fadeOut(400);
                }
            );
           
    });
    $('.email_button').click( function(){
        $('.descPlus-1')
            .animate({opacity: 0, top: '50%'}, 400,
                ()=>{
                    $(".descPlus-1").css('display', 'none');

                }
            );
    });
    $("header").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 600);
    });

    $("#img").on("click", function (event){

		event.preventDefault();
        let top1 = $('#section-2').offset().top;
		console.log();
        $('body,html').animate({scrollTop: top1}, 600);
	});
    $("#submit").on("click", ()=>{
    	let val1 = $('#subbut');
        let val2 = $('input[type=\'tel\']');
        console.log(val1.val() + "" + val2.val());
        if (val1.val() === ""){
        	val1.css("border-color", "red");
		}
        if (val2.val() === ""){
            val2.css("border-color", "red");
        }
        if (val1.val()){
            val1.css("border-color", "#ccc");
        }
        if (val2.val()){
            val2.css("border-color", "#ccc");
        }
    });
    $("#submit").click(()=> {
        let name = $('#subbut').val();
        let tel = $('input[type=\'tel\']').val();
        let call = document.querySelector("input[id='1']").hasAttribute('checked');
        let whats = document.querySelector("input[id='2']").hasAttribute('checked');
        let typeCall;
        let city = window.location.href;
        if(call){typeCall = "телефону"} else { typeCall = "WhatsApp"}
        if (name && tel) {

            $.ajax({
                type: 'POST',
                url: '/',
                data: {name: name, tel: tel, type: typeCall, city: city},
                dataType: "json",
                success: function (data) {

                }
            });
            $('#success').css("display", "block").animate({opacity: 0.95}, 800);
        }

    });
    $("#refbut").click(()=> {
        let name = $('#refname').val();
            $.ajax({
                type: 'POST',
                url: '/setitem',
                data: {name: name},
                dataType: "json",
                success: function (data) {

                }
            });
        $('#refname').css("display", "none").animate({opacity: 0}, 800);
        $('#refbut').css("display", "none").animate({opacity: 0}, 800);
        $('#succesref').css("display", "block").animate({opacity: 0.95}, 800)
    });
    $("label[for='1']").click(()=> {
        if (document.querySelector("input[id='2']").hasAttribute('checked')){
            document.querySelector("input[id='2']").removeAttribute('checked');
            document.querySelector("input[id='1']").setAttribute('checked', 'o');

        }
    });
    $("label[for='2']").click(()=> {
        if (document.querySelector("input[id='1']").hasAttribute('checked')){
            document.querySelector("input[id='1']").removeAttribute('checked');
            document.querySelector("input[id='2']").setAttribute('checked', 'o');

        }
    });
});


