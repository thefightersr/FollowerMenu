$.switch=false;
$.showright=false;
$.showleft=false;
$.showslide=false;
var delayHideButton=0;
var content;
//Globals enviorement
//Get width and height of windows
$.ventana_alto = $(window).height();

(function($){
  var ventana_ancho = $(window).width();
  $.tamañoVentana=ventana_ancho/2;
  $.fn.followermenu = function(options){
    $.settings=$.extend({
      classContainer:'followermenu',
      marginTop:'',
      marginSide:'',
      marginOtherSide:'',
      activateContact:true,
      activateTabs:true,
      activatePreview:true,
      activateSlide:true,
      activateTeam:false,
      activateMegaMenu:true,
      activateGrid:false,
      activateServices:false,
      activateSecondMenu:false,
      activateFeatures:true,
      activateLogin:true,
      activateSearch:true,
      optionsMenu:[],
      colorsTheme:{
        primaryThemeColor:'',
        secondThemeColor:'',
        thirdThemeColor:'',
        fourthThemeColor:''
      },
      itemsShop:{
          optionName:'SHOP',
          itemsName:[
            'OFFERS',
            'COLLECTIONS',
            'SHOES',
            'CLOTHING',
            'OUTWEAR',
          ]
        },
      workTeam:{
          peopleName:'NOSOTROS',
          peoples:[{
            employedName:'John Doe',
            roll:'Directive',
            imagePath:'img/jhondoe.jpg'
          },{
            employedName:'John Doe',
            roll:'Directive',
            imagePath:'img/jhondoe.jpg'
          },{
            employedName:'John Doe',
            roll:'Directive',
            imagePath:'img/jhondoe.jpg'
          },{
            employedName:'John Doe',
            employedRoll:'Directive',
            imagePath:'img/jhondoe.jpg'
          },{
            employedName:'John Doe',
            roll:'Directive',
            imagePath:'img/jhondoe.jpg'
          },{
            employedName:'John Doe',
            roll:'Directive',
            imagePath:'img/jhondoe.jpg'
          },]
        },
      imagesSlide:[{
        nameSlide:'slide1',
        slides:[{
          imagePath:'img/slide1.jpg',
          titleSlide:'Montañas del Este',
          textSlide:'This mountains be very beutifull'
        }]
      }],
      features:[{
          nombreFeature:'Mayor Rendimiento',
          textFeature:'Aqui va todo el texto...'
        },{
          nombreFeature:'Una Sola carga',
          textFeature:'Aqui va todo el texto...'
        },{
          nombreFeature:'Mas dinamico',
          textFeature:'Aqui va todo el texto...'
        },{
          nombreFeature:'Mas facil de perzonalizar',
          textFeature:'Aqui va todo el texto...'
        },{
          nombreFeature:'Mas segura y robusta',
          textFeature:'Aqui va todo el texto...'
      }],
      buttonMenu:{
        styleMenu:'cicle',
        nameMenu:'MENU',
        iconMenu:'fa-menu',
        logoMenu:''
      },
      effects:{
        effectContactInputs:'slideUp',
        effectTeamImg:'',
        effectTeamText:'slideUp',
        effectShopItemPrice:'appear',
        effectSubmenuChange:'dissolve',
        effectSlideChange:'slideLeft',
        effectSlideText:'appear'
      }
    },options);
  marginSide=$.settings.marginSide;
  //Create main content
  if(true){
    content = "<div id='followerMenuContainer'>";
    content += "<div id='followerMenuOptionsDeployed'>";
    content += "<ul id='followerMenuOptions' class='parallax'><ul>";
    content += "<i id='followerMenuArrow' class='fa fa-sort-desc'></i>";
    //Create container secondMenu
    if($.settings.activateSecondMenu){
      content += "<div id='secondMenuContainer'></div>"
    }
    content += "</div>"; //Close tag followerMenuOptionsDeployed
    content += "<div id='borderFollowerMenu'></div>";
    content += "<i id='search-menu-left' class='fa fa-search'></i>";
    content += "<i id='search-menu-right' class='fa fa-search'></i>";
    content += "<i id='login-menu-right' class='fa fa-user'></i>";
    content += "<i id='login-menu-left' class='fa fa-user'></i>";
    content += "<div id='followerMenuButton-left'>MENU</div>";
    content += "<div id='followerMenuButton-right'>MENU</div>";
    content += "</div>";//Close followerMenuContainer
    $('body').append(content);
    content = "";
  }
  //Array options menu iterator
  var idO=0;
  $.widthOptions=0;
  $.settings.optionsMenu.forEach((option)=>{
    idO++;
    content = "<li id='"+option.optionName+"' class='optionsMenu "+option.functionName+" activate"+option.activateMenu+"'>"+option.optionName+"</li>";
    $('#followerMenuOptions').append(content);
    $.widthOptions += $('#'+option.optionName).width();
    $.widthOptions += +1;
  });
  content="";
  //Create main content secondMenu
  if($.settings.activateSecondMenu){
    $.settings.optionsMenu.forEach((option)=>{
      if(option.functionName=="secondMenu"){
        content += "<div class='secondMenuContainer' id='"+option.optionName+"Fn'><div id='containerUlSecondMenu'><ul class='parallaxSecond' id='"+option.optionName+"FnS'>";
        option.functionData.forEach((b)=>{
          content += "<li class='optionSecondMenu' id='"+b.optionName+"'>"+b.optionName+"</li>";
        })
        content += "</ul></div></div>";
        $("#followerMenuOptionsDeployed").append(content);
        content = "";
      }
    });
    //Hover secondMenu
    //Deslizar contenido secondMenu
    $('.secondMenu').hover((element)=>{
      $.idSecondMenu = element.target.id;
      $("#"+$.idSecondMenu+"Fn").css({
        'opacity':'1',
        'height': '330px',
        'z-index': '1'
      });
        $.widthSecondOptions=0;
        var childElement =$("#"+$.idSecondMenu+"FnS");
      childElement[0].childNodes.forEach((li)=>{
        $.widthSecondOptions += +$('#'+li.id).width();
      });
      $.parallaxElement = childElement;
      $('#borderFollowerMenu').animate({opacity:0},0);
    },()=>{
      $("#"+$.idSecondMenu+"Fn").css({
        'opacity':'1',
        'height': '330px',
        'z-index': '1'
      });
      $('#borderFollowerMenu').animate({opacity:1},0);
    });
  }
  //End function secondMenu
  //Create content function preview
  if($.settings.activatePreview){
    $.settings.optionsMenu.forEach((option)=>{
      if(option.functionName=="preview"){
        content = "<div class='previewFunction' id='"+option.optionName+"Fn'><img id='imgPreview' src='"+option.functionData+"'></div>";
        $("#followerMenuOptionsDeployed").append(content);
        content="";
      }
      if(option.functionName=="secondMenu"){
        option.functionData.forEach((second)=>{
          if(second.functionName=="preview"){
            content = "<div class='previewFunction previewFunctionSecond' id='"+second.optionName+"Fn'><img id='imgPreview' src='"+second.functionData+"'></div>";
            $("#secondMenuContainer").append(content);
            content="";
          }
        })
      }
    });
    //Hover function preview
    $('.preview').hover((element)=>{
      $.idPreview = element.target.id;
      $("#"+$.idPreview+"Fn").css({
        'opacity':'1',
        'height': '330px',
        'z-index': '1'
      });
      $('#borderFollowerMenu').animate({opacity:0},0);
    },()=>{
      $("#"+$.idPreview+"Fn").css({
        opacity:0,
        height: '0',
        'z-index': '0'
      });
      $('#borderFollowerMenu').animate({opacity:1},0);
    });
  }
  //Create content function slide
  if($.settings.activateSlide){
    $.settings.optionsMenu.forEach((option)=>{
      var i=0;
      if(option.functionName=="imagesSlide"){
        content = "<div class='imagesSlideContainer' id='"+option.functionName+"Fn'>";
        option.functionData.forEach((a)=>{
          content += "<div class='imageSlide' id='imageSlide"+i+"'><img src='"+a.imagePath+"'><div class='textSlide'><h3 class='titleSlide'>"+a.titleSlide+"</h3><p class='textSlide'>"+a.textSlide+"</p> </div></div>";
          i++;
        });
        content += "</div>";
        $("#followerMenuOptionsDeployed").append(content);
        content="";
      }
      if(option.functionName=="secondMenu"){
        option.functionData.forEach((second)=>{
          if(second.functionName=="imagesSlide"){
            content = "<div class='imagesSlide secondMenuSlide' id='"+option.functionName+"Fn'>";
            second.functionData.forEach((a)=>{
              content += "<div class='imageSlide' id='imageSlide"+i+"'><img src='"+a.imagePath+"'><div class='textSlide'><h3 class='titleSlide'>"+a.titleSlide+"</h3><p class='textSlide'>"+a.textSlide+"</p> </div></div>";
              i++;
            });
            content += "</div>";
            $("#secondMenuContainer").append(content);
          }
        });
      }
    });
  }
  //Call function slide Menu
  $.callback=false;
  $("#followerMenuButton-right").click(()=>{
    //Saber si dan click al boton menu
      $.switch=!$.switch;
      if($.callback){
        var setTime=setTimeout(opacity,300);
        function opacity(){
          $("#followerMenuButton-right").css({
            opacity:''
          })
          delayHideButton=0;
        }
        delayHideButton=300;
      }
    $.callback=!$.callback;
    slideMenu('right','left');
  });
  //Call function slide Menu
  $("#followerMenuButton-left").click(()=>{
    //Saber si dan click al boton menu
    $.switch=!$.switch;
    if($.callback){
      var setTime=setTimeout(opacity,300);
      function opacity(){
        $("#followerMenuButton-left").css({
          opacity:''
        })
        delayHideButton=0;
      }
      delayHideButton=300;
    }
    $.callback=!$.callback;
    slideMenu('left','right');
  });
  //Hover function Slide
  $('.imagesSlide').hover(()=>{
    var idSlide = $(this).attr("id");
    $(idSlide+"Fn").css({
      //Poner contenido visible
    });
  });
  //End function imagesSlide
  //Create content grid
  if($.settings.activateGrid){
    $.settings.optionsMenu.forEach((option)=>{
      var i=0;
      if(option.functionName=="gridCamp"){
        content = "<div class='gridCampContainer scrollbar container gridCamp' id='"+option.optionName+"Fn'>";
        option.functionData.forEach((a)=>{
          content += "<div class='row' id='gridRow"+i+"'>";
          a.row.forEach((b)=>{
            content += "<div style='overflow:hidden' class=' col-sm-"+b.colSize+"'>";
            if(b.colData.imagePath!=''){
              content += "<img class='img-fluid' src='"+b.colData.imagePath+"'>"
            }
            if(b.colData.textContent!=''){
              content += "<p class='content'>"+b.colData.textContent+"</p>";
            }
            content += "</div>";
          });
          content += "</div>";
          i++;
        });
        content += "</div>";
        $("#followerMenuOptionsDeployed").append(content);
      }
      if(option.functionName=="secondMenu"){
        option.functionData.forEach((second)=>{
          if(second.functionName=="gridCamp"){
            content = "<div class='gridCamp secondMenuGridCamp' id='"+option.functionName+"Fn'>";
            second.functionData.forEach((a)=>{
              content += "<div class='row' id='gridRow"+i+"'>";
              a.row.forEach((b)=>{
                content += "<div class='col-sm-"+b.colSize+"'>";
                if(b.colData.imagePath!=''){
                  content += "<img class='img-fluid' src='"+b.colData.imagePath+"'>"
                }
                if(b.colData.textContent!=''){
                  content += "<p>"+b.colData.textContent+"</p>";
                }
                content += "</div>";
              });
              content += "</div>";
              i++;
            });
            content += "</div>";
            $("#followerMenuOptionsDeployed").append(content);
          }
          });
      }
    });
    //Hover function grid
    $('.gridCamp').hover((element)=>{
      $.idGridCamp = element.target.id;
      $("#"+$.idGridCamp+"Fn").css({
        'opacity':'1',
        'height': '330px',
        'z-index': '1',
      });
      var timer = setTimeout(tresSec,400);
      function tresSec(){
        $("#"+$.idGridCamp+"Fn").css({
          'overflow-y': 'auto'
        });
      }
      $('#borderFollowerMenu').animate({opacity:0},0);
    },()=>{
      $("#"+$.idGridCamp+"Fn").css({
        'opacity':'0',
        'height': '0',
        'z-index': '0',
        'overflow-y': 'hidden'
      });
      $('#borderFollowerMenu').animate({opacity:1},0);
    }
  );
  }
  //End gridCamp
  //Create content function workTeam
  if($.settings.activateTeam){
    $.settings.optionsMenu.forEach((option)=>{
      var i=0;
      if(option.functionName=="workTeam"){
        content = "<div class='workTeamContainer' id='"+option.optionName+"Fn'>";
        option.functionData.forEach((a)=>{
          content += "<div class='employedTeam' id='employedTeam"+i+"'><img src='"+a.imagePath+"'><div class='textTeam'><h3 class='employedName'>"+a.employedName+"</h3><p class='employedRoll'>"+a.employedRoll+"</p> </div></div>";
          i++;
        });
        content += "</div>";
        $("#followerMenuOptionsDeployed").append(content);
      }
      if(option.functionName=="secondMenu"){
        option.functionData.forEach((second)=>{
          if(second.functionName=="workTeam"){
            content = "<div class='workTeam secondMenuSlide' id='"+option.functionName+"Fn'>";
            second.functionData.forEach((a)=>{
              content += "<div class='employedTeam' id='employedTeam"+i+"'><img src='"+a.imagePath+"'><div class='textTeam'><h3 class='employedName'>"+a.employedName+"</h3><p class='employedRoll'>"+a.employedRoll+"</p> </div></div>";
              i++;
            });
            content += "</div>";
            $("#secondMenuContainer").append(content);
            content = "";
          }
        });
      }
    });
    //Hover function workTeam
    $('.workTeam').hover(()=>{
      var idWorkTeam = $(this).attr("id");
      $(idWorkTeam+"Fn").css({
        //Poner contenido visible
      });
    });
  }
  //End function imagesSlide
  //ArrowMove
  $('#followerMenuOptions li').hover((elementObj)=>{
    $.element = elementObj.target.id;
    var position=$('#'+$.element).position();
    var width=$('#'+$.element).width();
    var positionDef=(width/2)-2+position.left+"px";
    $("#followerMenuArrow").css({
      'left':positionDef,
      opacity:1,
    });
  },
  ()=>{
    $("#followerMenuArrow").css({
      opacity:0,
    });
  })
 }
})(jQuery)

//Include all function of mousemove like parallax effect
$(document).mousemove(function(event){
  position=event.pageX;
  console.log(position);
  console.log($.widthOptions);
  if($.switch==false){
      //Mostrar boton menu izquierdo y ocuktar derecho
      if(position<$.tamañoVentana){
        $.side='left';
        $("#followerMenuArrow").css({
          'left':'-10px',
          opacity:0,
        });
        $.otherSide='right';
        if($.showleft==false){
          $.showleft=true;
          $.showright=false;
          showButtonMenu($.side,$.otherSide);
        }
      }else{
          var positionDefR= ($.tamañoVentana)+'px'
          $("#followerMenuArrow").css({
            'left':positionDefR,
            opacity:0,
          });
        $.side='right';
        $.otherSide='left';
        //Mostrar boton menu derecho y ocultar izquierdo
        if($.showright==false){
          $.showright=true;
          $.showleft=false;
          showButtonMenu($.side,$.otherSide);
        }
      }
  }else{
    //Moviento parallax
    if($.side=="right"){
      var z;
      var y;
      var xy;
      var maxDesployer = $.widthOptions-300;
      var anchoVentana = $(window).width(); // Ancho de la ventana para calcular el el Parallax inverso
      if($.widthOptions>391){ //Saber el tamaño de la lista para establecer la velocidad de desplazamiento
        $('.parallax').each(function(){
          var $this = $(this);
          if (position>(anchoVentana-150)) { //Establecer moviento en 0 si no ha pasado de los 150px
            z=0;
          }else if(position<(anchoVentana-150)){ // Establecer moviento del parallax despues de los 150px
            z=position-(anchoVentana-150); //Establecer moviento y restarle los 150px que estuvo inmovil
            y=z; //Almacenar dato en variable de moviento definitivo
            var porcentMax = maxDesployer*3/100;
            if(porcentMax<5){porcentMax=50}
            else if(porcentMax>10){porcentMax=5}
            console.log(porcentMax+' porcentaje');
            if(y<(-maxDesployer+porcentMax)){
              z=(-maxDesployer+porcentMax);
            }
            if($.widthOptions>700){
              z=z*1.4;
              if(z<(280-$.widthOptions)){
                z=(-maxDesployer-20);
              }
            } if($.widthOptions>850){
              z=z*1.6;
              if(z<(280-$.widthOptions)){
                z=(-maxDesployer-20);
              }
            } if($.widthOptions>1000){
              z=z*1.7;
              if(z<(200-$.widthOptions)){
                z=(-maxDesployer-100);
              }
            } if($.widthOptions>1500){
              z=z*1.8;
              if(z<(120-$.widthOptions)){
                z=(-maxDesployer-180);
              }
            }

            y = -z;
            xy =  y + 'px';
            $this.css({ 'transform':'translateX('+xy+')'});
          }
        });
      }
    }else if($.side=="left"){
      var z;
      var y;
      var xy;
      var maxDesployer = $.widthOptions-300;//La cantidad de pixels maxima que recorrera el parallax
      if($.widthOptions>391){
        $('.parallax').each(function(){
          var $this = $(this);
          if (position<150) {
            z=0;
          }else if(position>150){
            count=position-145;
            z=position-150;
            y=z;
            var porcentMax = maxDesployer*3/100;
            if(porcentMax<5){porcentMax=50}
            else if(porcentMax>10){porcentMax=5}
            console.log(position+' position');
            if(y>maxDesployer-porcentMax){
              z=maxDesployer-porcentMax;
            }
            if($.widthOptions>700){
              z=z*1.4;
              if(z>($.widthOptions-280)){
                z=(maxDesployer+20);
              }
            } if($.widthOptions>850){
              z=z*1.6;
              if(z>($.widthOptions-280)){
                z=maxDesployer+20;
              }
            } if($.widthOptions>1000){
              z=z*1.7;
              if(z>($.widthOptions-200)){
                z=maxDesployer+100;
              }
            } if($.widthOptions>1500){
              z=z*1.8;
              if(z>($.widthOptions-120)){
                z=maxDesployer+180;
              }
            }
            // if(y>maxDesployer){
            //   z=maxDesployer;
            // }
            // if($.widthOptions>780){
            //   z=z*1.7;
            //   if(z>($.widthOptions-330)){
            //     z=maxDesployer+20;
            //   }
            // }
            y = -z;
            xy =  y + 'px';
            $this.css({ 'transform':'translateX('+xy+')'});
          }
        });
      }
    }
  }
  if($.parallaxElement!=undefined){
    parallaxEfect($.parallaxElement);
  }

});

//Slide menu before press button menu
function slideMenu(side, otherSide){

  $('#followerMenuOptionsDeployed, #borderFollowerMenu').addClass(side).removeClass(otherSide);
  $('.previewFunction').addClass(side).removeClass(otherSide);
  $('#mega-menu').addClass(side).removeClass(otherSide);
  $("#menu-flotante-"+side).show().addClass(side);
  //Action if button is press or not
  if($.switch){
    $("#followerMenuOptionsDeployed, #borderFollowerMenu").css({
      opacity:1,
      width:'550px',
      transition:'all linear .3s',
    });
    $('#followerMenuButton-'+side).css({
      opacity:1
    })
    if(side=='left'){
      var LoginButtonsDeployedLeft=(marginSide+595)+'px';
    }else{
      var LoginButtonsDeployedRight =(marginSide+595)+'px';
    }
    $('#search-menu-left, #login-menu-left').css({
      'left':LoginButtonsDeployedLeft,
      'transition':'all .3s linear'
    });
    $('#search-menu-right, #login-menu-right').css({
      'right':LoginButtonsDeployedRight,
      'transition':'all .3s linear'
    });
  }
  else{
      $("#followerMenuOptionsDeployed, #borderFollowerMenu").css({
        width:'0px',
        opacity:0.5,
        transition:'all linear .3s',
      });
    if(side=='left'){
      LoginButtonsDeployedLeft=(marginSide+95)+'px';
    }else{
      LoginButtonsDeployedRight =(marginSide+95)+'px';
    }
    $('#img-preview').css({
      'border-bottom':'solid 0px #00BBFE',
    });
    $('#search-menu-'+side+', #login-menu-'+side).css({
      'margin':'',
      'transition':'all .3s linear'
    });
    $("#menuDesplegado").css({
      'width':"0px",
      'opacity':'0',
      'transition':'all .3s linear'
    });
    $("#menu-flotante-"+side).css({'box-shadow': '0px 0px 0px 0px #cc0000'})
    $("#img-preview").css({
      'width':"0px",
      'opacity':'0',
      'transition':'all .3s linear'
    });
    $('#search-menu-left, #login-menu-left').css({
      'left':LoginButtonsDeployedLeft,
      'transition':'all .3s linear'
    });
    $('#search-menu-right, #login-menu-right').css({
      'right':LoginButtonsDeployedRight,
      'transition':'all .3s linear'
    });
  }
}

//Ocultar Services
function hiddenOpenMenus(){
    $('#mega-menu').css({
      'height':'0',
      'transition':'all .3s linear'
    });
    $('#option2').css({'border-bottom': '5px solid transparent'});
  }

//Mostrar button menu
function showButtonMenu(side, otherSide){
  if($.side=='left'){
    $("#followerMenuButton-left").animate({left:'50px'},25);
    $('#search-menu-left ,#login-menu-left').animate({left: '145px'},25);
    $("#followerMenuButton-right").delay(delayHideButton).animate({right:'-115px'},25);
    $('#search-menu-right ,#login-menu-right').delay(delayHideButton).animate({right: '-25px'},25);
  }else{
    $("#followerMenuButton-right").animate({right: '50px'},25);
    $('#search-menu-right ,#login-menu-right').animate({right: '145px'},25);
    $("#followerMenuButton-left").delay(delayHideButton).animate({left: '-115px'},25);
    $('#search-menu-left ,#login-menu-left').delay(delayHideButton).animate({left: '-25px'},25);
  }
  $("#followerMenuButton-left, #followerMenuButton-right").css({
    'top':$.settings.marginTop,
    'box-shadow':'1px 1px 8px 0px grey',
  });
  $.i=0;
}

//Pendiente de comprobar si se usa, creo que no
//llamando funcion de movimiento fuera del mousemove
function parallaxEfect(element){

if($.side=="right"){
  element.addClass('rightSecondOptions').removeClass('leftSecondOptions');
  var z;
  var y;
  var xy;
  var maxDesployer = $.widthSecondOptions-420;
  var anchoVentana = $(window).width(); // Ancho de la ventana para calcular el el Parallax inverso
  if($.widthSecondOptions>480){ //Saber el tamaño de la lista para establecer la velocidad de desplazamiento
    $('.parallaxSecond').each(function(){
      var $this1 = $(this);
      if (position>(anchoVentana-150)) { //Establecer moviento en 0 si no ha pasado de los 150px
        z=0;
      }else if(position<(anchoVentana-150)){ // Establecer moviento del parallax despues de los 150px
        z=position-(anchoVentana-150); //Establecer moviento y restarle los 150px que estuvo inmovil
        y=z; //Almacenar dato en variable de moviento definitivo
        if(y<(-maxDesployer)){
          z=(-maxDesployer);
        }
        if($.widthSecondOptions>780){
          z=z*1.7;
          if(z<(330-$.widthSecondOptions)){
            z=(-maxDesployer-20);
          }
        }
        y = -z;
        xy =  y + 'px';
        $this1.css({ 'transform':'translateX('+xy+')'});
      }
    });
  }
}else if($.side=="left"){
  element.removeClass('rightSecondOptions');
  var z;
  var y;
  var xy;
  var maxDesployer = $.widthSecondOptions-420;//La cantidad de pixels maxima que se recorrera el parallax
  if($.widthSecondOptions>480){
    $('.parallaxSecond').each(function(){
      var $this1 = $(this);
      if (position<150) {
        z=0;
      }else if(position>150){
        count=position-145;
        z=position-150;
        y=z;
        if(y>maxDesployer){
          z=maxDesployer;
        }
        if($.widthSecondOptions>780){
          z=z*1.7;
          if(z>($.widthSecondOptions-330)){
            z=maxDesployer+20;
          }
        }
        y = -z;
        xy =  y + 'px';
        $this1.css({ 'transform':'translateX('+xy+')'});
      }
    });
  }
}
}

//Click fuera del menu, pendiente a optimizar
$('body').click(()=>{
  if($.switch==true){
    $.switch=false;
    $("#menuDesplegado").css({
      'width':"0px",
      'opacity':'0',
      'transition':'all .3s linear'
    });
  }
});
