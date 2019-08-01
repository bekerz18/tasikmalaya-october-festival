
$(document).ready(function(){
    //owl.carousel
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true
    })
    //scrollsections 
    $('section.scrollsections').scrollSections({
        createNavigation: false,
        navigation: true
    });

  });
  function regist(){
      var nama = document.getElementById("nama").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var chat="https://api.whatsapp.com/send?phone=6282219583274&text=" + "Permisi Pak, Perkenalkan : " + "%0ASaya : " +nama+ "%0AEmail : " +email+ "%0ANomor HP : " +phone+ "%0ABersedia untuk menjadi volunteer diacara Tasikmalaya October Festival 2019.";
      window.open(chat);
  }
  function toggle(){
      var nav = document.getElementById("scrollsections-navigation");
      if(nav.className === "col-100"){
          nav.className += " responsive";
      }else{
          nav.className = "col-100";
      }
  }