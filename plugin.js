$.time=1500;
$.countImagesFinal=2;
$.imageCurrent=0;
$.slideImagePx=0;
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
  $.marginTop=$.settings.marginTop;
  //Create main content
  if(true){
    content = "<div id='followerMenuContainer'>";
    content += "<div id='followerMenuOptionsDeployed'>";
    content += "<div id='secondMenuContainer'></div>";
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
    content += "<div id='followerMenuButton-left' class='hvr-radial-out'>MENU</div>";
    content += "<div id='followerMenuButton-right' class='hvr-radial-out'>MENU</div>";
    content += "</div>";//Close followerMenuContainer
    $('body').append(content);
    content = "";
  }
  //Array options menu iterator
  var idO=0;
  $.widthOptions=0;
  $.settings.optionsMenu.forEach((option)=>{
    idO++;
    content = "<li id='"+option.optionName+"' class='optionsMenu hvr-underline-from-center "+option.functionName+" activate"+option.activateMenu+"'>"+option.optionName+"</li>";
    $('#followerMenuOptions').append(content);
    $.widthOptions += $('#'+option.optionName).width();
    $.widthOptions += +1;
    //Create main content secondMenu
    if($.settings.activateSecondMenu){
      content = "";
      var count=0;
        if(option.functionName=="secondMenu"){
          content += "<div id='"+option.optionName+"Fn' style='position:absolute' class='containerUlSecondMenu'><ul class='parallaxSecond' id='"+option.optionName+"Ul'></ul></div>";
          $("#secondMenuContainer").append(content);
          $.widthSecondOptions=0;
          contentSecond = "";
          option.functionData.forEach((b)=>{
            contentSecond = "<li class='optionSecondMenu hvr-back-pulse "+b.functionName+"' id='"+b.optionName+"Sec'>"+b.optionName+"</li>";
            $("#"+option.optionName+"Ul").append(contentSecond);
            $.widthSecondOptions+= $("#"+b.optionName+"Sec").width();

          })
          $("#"+option.optionName+"Ul").attr('sizeData',$.widthSecondOptions);
        }
    }
    //End function secondMenu
    if($.settings.activateShop){
      content="";
      var i=0;
      if(option.functionName=="shop"){
        content = "<div id='"+option.optionName+"Fn' class='shopClass'><ul class='tabsClass'></ul></div>";
        $('#followerMenuOptionsDeployed').append(content);
        option.functionData.forEach((b)=>{
          i++;
          if(i==1){var color1='black'; var color2 ='white'}
          content = "<li style='background-color:"+color1+"; color:"+color2+"' id='"+b.tabTitle+"' class='tabsOptionClass'>"+b.tabTitle+"</li>";
          $('#'+option.optionName+'Fn ul.tabsClass').append(content);
          content = "<div id='"+b.tabTitle+"Tab' class='mainContainerClass hideItem'>";
          var side='';
          b.tabData.forEach((tab)=>{
            switch (tab.colFunction){
              case 'imageBanner':
                if(tab.colSide=='right'){ side='right'}
                content += "<div class='imageBanner "+side+"Banner' style='background:url("+tab.colData+") center;background-size: 220px 290px;'><a href='"+tab.bannerHref+"'><div class='bannerTitle hvr-bounce-to-right'><p>"+tab.colTitle+"</p></div></a><a href='"+tab.bannerHref+"'><span class='discount'>"+tab.discount+"</span></a></div>";
                break;
              case 'itemsShop':
                content += "<div class='itemsContainerClass "+side+"Item'>";
                tab.colData.forEach((item)=>{
                  content += "<div class='itemShopClass'><div class='itemImage'><a  href='"+item.itemHref+"'><img class='img-fluid' src='"+item.imagePath+"'></a></div><div class='textItem'><a href='"+item.itemHref+"'><p class='pItem'>"+item.itemDescription+"</p></a><p class='pItem'>"+item.priceItem+"</p></div></div>"
                });
                content += "</div>";
                break;
              case 'tags':
                content += "<div class='tagsContainerClass colgrid"+tab.colSize+" "+side+"Item'><h4 class='tittleUl'>"+tab.colTitle+"</h4><ul>";
                var i=0;
                tab.colData.forEach((item)=>{
                  i++;
                  content += "<li class='itemTagClass'><a href='"+item.tagHref+"'>"+item.titleTag+"</a></li>"
                  if(i==4){
                    content += "</ul><ul>";
                    i=0;
                  }
                });
                content += "</ul></div>";
              default:
            }
          })
          content += "</div>";
          $('#'+option.optionName+'Fn').append(content);
        })
      }
    }

  });
  if($.settings.activateContact){
    $('.contact').hover((element)=>{
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0'
      });
      $.idContact = element.target.id;
      console.log($.idContact);
      $("#"+$.idContact+'Fn').css({
        'height':'330px',
        'opacity':'1',
        'z-index':'1'
      })
    },
    ()=>{
      // $("#"+$.idContact+'Fn').css({
      //   'height':'0',
      //   'opacity':'0',
      //   'z-index':'0'
      // })
    });
  }
  if($.settings.activateShop){
    $('.shop').hover((element)=>{
      $.idShop = element.target.id;
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0'
      });
      console.log($.idShop);
      $("#"+$.idShop+'Fn').css({
        'height':'330px',
        'opacity':'1',
        'z-index':'1'
      })
    },
    ()=>{
      // $("#"+$.idShop+'Fn').css({
      //   'height':'0',
      //   'opacity':'0',
      //   'z-index':'0'
      // })
    });
    $('.tabsOptionClass').click((element)=>{
      $('.tabsOptionClass').css({
        'background-color':'',
        'color':''
      });
      $.idTab = element.target.id;
      console.log(element);
      $("#"+$.idTab).css({
        'background-color':'black',
        'color':'white'
      })
      $("#"+$.idTab+'Tab').removeClass('hideItem').slideDown('fast');
      $('.hideItem').slideUp('fast');
      $("#"+$.idTab+'Tab').addClass('hideItem');
    });
  }
  if($.settings.activateSecondMenu){
    //Hover secondMenu
    //Deslizar contenido secondMenu
    $('.containerUlSecondMenu').hide('fast');
    $('.secondMenu').hover((element)=>{
      $.idSecondMenu = element.target.id;
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0'
      });
      $("#secondMenuContainer").css({
        'opacity':'1',
        'height': '55px',
        'z-index': '1'
      });
      $("#"+$.idSecondMenu+'Fn').show();
      if($("#"+$.idSecondMenu+'Ul').attr('sizedata')<460){
        $('ul.parallaxSecond').css({
          'justify-content':'center'
        });
      }else{
        $('ul.parallaxSecond').css({
          'justify-content':''
        });
      }
      $('#borderFollowerMenu').animate({opacity:0},0);
    },()=>{
      // $("#"+$.idSecondMenu+'Fn').css({
      //   'opacity':'0',
      //   'display':'block',
      //   'z-index': '0'
      // });
      $('ul.parallaxSecond').css({
        'z-index':'0'
      });
      $('#borderFollowerMenu').animate({opacity:1},0);
    });
    //Deslizar contenido secondMenu
    $('.optionSecondMenu').hover((element)=>{
      $.idOptionSecondMenu = element.target.id;
      $("#"+$.idOptionSecondMenu+"Fn").css({
        'opacity':'1',
        'z-index': '1'
      });
      $("#secondMenuContainer").css({
        'opacity':'1',
        'height': '330px',
        'z-index': '1'
      });
      $('#borderFollowerMenu').animate({opacity:0},0);
    },()=>{
      $("#"+$.idOptionSecondMenu+"Fn").css({
        'opacity':'0',
        'z-index': '-1'
      });
      $('#borderFollowerMenu').animate({opacity:1},0);
    });
    content = "";
  }
  //Create content function preview
  if($.settings.activatePreview){
    $.settings.optionsMenu.forEach((option)=>{
      if(option.functionName=="preview"){
        content = "<div class='previewFunction functionFollower' id='"+option.optionName+"Fn'><img class='img-fluid' id='imgPreview' src='"+option.functionData+"'></div>";
        $("#followerMenuOptionsDeployed").append(content);
        content="";
      }
      if(option.functionName=="secondMenu"){
        option.functionData.forEach((second)=>{
          if(second.functionName=="preview"){
            content = "<div class='previewFunction previewFunctionSecond ' id='"+second.optionName+"SecFn'><img id='imgPreview' src='"+second.functionData+"'></div>";
            $("#secondMenuContainer").append(content);
            content="";
          }
        })
      }
    });
    //Hover function preview
    $('.preview').hover((element)=>{
      $.idPreview = element.target.id;
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0'
      });
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
  $.countImages=0;
  if($.settings.activateSlide){
    $.settings.optionsMenu.forEach((option)=>{
      if(option.functionName=="imagesSlide"){
        content = "<div id='"+option.optionName+"Fn' class='imagesSlideContainer functionFollower'><a id ='chevron-left'><i class='fa fa-chevron-left'></i></a><a id ='chevron-right'><i class='fa fa-chevron-right'></i></a>";
        option.functionData.forEach((a)=>{
          content += "<div class='imageSlide' id='imageSlide"+$.countImages+"'><img src='"+a.imagePath+"'><div class='textSlide'><h3 class='titleSlide'>"+a.titleSlide+"</h3><p>"+a.textSlide+"</p></div></div>";
          $.countImages++;
        });
        content += "</div>";
        $("#followerMenuOptionsDeployed").append(content);
        content="";
      }
      if(option.functionName=="secondMenu"){
        option.functionData.forEach((second)=>{
          if(second.functionName=="imagesSlide"){
            content = "<div class='imagesSlide secondMenuSlide ' id='"+option.functionName+"Fn'>";
            second.functionData.forEach((a)=>{
              content += "<div class='imageSlide'><img src='"+a.imagePath+"'><div class='textSlide'><h3 class='titleSlide'>"+a.titleSlide+"</h3><p>"+a.textSlide+"</p></div></div>";
            });
            content += "</div>";
            $("#secondMenuContainer").append(content);
          }
        });
      }
    });
    $('.imageSlide .textSlide').hide();
    //Hover function slide
    $('.imagesSlide').hover((element)=>{
      $.idSlide = element.target.id;
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0'
      });
      console.log($.idSlide);
      $("#"+$.idSlide+"Fn").css({
        'opacity':'1',
        'height': '330px',
        'z-index': '1'
      });
      //Slide images with timeout
      $.slideTimeout = setInterval(slideTimeoutF, 3000);
      function slideTimeoutF(){
        console.log($.slideImagePx+' time');
        if($.countImages>=$.countImagesFinal){
          $.slideImagePx=$.slideImagePx-550;
          $('.imageSlide').css({
            'transform':'translateX('+$.slideImagePx+'px)',
            'transition':'all linear .5s'
          });
          $.countImagesFinal++;
          $.imageCurrent++;
          $("#imageSlide"+$.imageCurrent+" .textSlide").delay(1500).show('slow');
        }
      }

      $("#imageSlide"+$.imageCurrent+" .textSlide").delay(1000).show('slow');
      //show text slide
      // imageSlideElement=$(".imageSlide");
      // imageSlideElement.each((element)=>{
      //   console.log(imageSlideElement[element].id);
      //   $("#"+imageSlideElement[element].id+" .textSlide").delay($.time).show('slow');
      //   $("#"+imageSlideElement[element].id+" .textSlide");
      //   $.time=$.time+3000;
      // });

      //Slide images with click
      $('#chevron-right').click(()=>{
        console.log($.slideImagePx+' click');
        clearInterval($.slideTimeout);
        slideTimeoutF();
        $.slideTimeout = setInterval(slideTimeoutF, 3000);
      });
      $('#chevron-left').click(()=>{
        clearInterval($.slideTimeout);
        if($.countImagesFinal>=3){
          $.slideImagePx=$.slideImagePx+550;
          $('.imageSlide').css({
            'transform':'translateX('+$.slideImagePx+'px)',
            'transition':'all linear .5s'
          });
          $.countImagesFinal--;
          $.imageCurrent--;
        }
        $.slideTimeout = setInterval(slideTimeoutF, 3000);
      });
      $('#borderFollowerMenu').animate({opacity:0},0);
    },()=>{
      // $("#"+$.idSlide+"Fn").css({
      //   opacity:0,
      //   height: '0',
      //   'z-index': '0'
      // });
      clearInterval($.slideTimeout);
      // $('#borderFollowerMenu').animate({opacity:1},0);
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
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0'
      });
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
        content = "<div class='workTeamContainer row' id='"+option.optionName+"Fn'>";
        option.functionData.forEach((a)=>{
          content += "<div class='employedTeam col-sm-4' id='employedTeam"+i+"'><img class='img-fluid' src='"+a.imagePath+"'><div class='textTeam' id='employedTeam"+i+"'><h5 class='employedName'>"+a.employedName+"</h5><p class='employedRoll'>"+a.employedRoll+"</p> </div></div>";
          i++;
        });
        content += "</div>";
        $("#followerMenuOptionsDeployed").append(content);
      }
      if(option.functionName=="secondMenu"){
        option.functionData.forEach((second)=>{
          if(second.functionName=="workTeam"){
            content = "<div class='workTeamContainer row ' id='"+option.functionName+"Fn'>";
            second.functionData.forEach((a)=>{
              content += "<div class='employedTeam col-sm-4' id='employedTeam"+i+"'><img  src='"+a.imagePath+"'><div class='textTeam'><h5 class='employedName'>"+a.employedName+"</h5><p class='employedRoll'>"+a.employedRoll+"</p> </div></div>";
              i++;
            });
            content += "</div>";
            $("#secondMenuContainer").append(content);
            content = "";
          }
        });
      }
    });
    //Hidden work function
    $('.workTeamContainer .textTeam').slideUp();
    //Hover function workTeam
    $('.workTeam').hover((element)=>{
      $.idWorkTeam = element.target.id;
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0'
      });
      $("#"+$.idWorkTeam+"Fn").css({
        'opacity':'1',
        'height': '330px',
        'z-index': '1',
      });
      var time=500;
      var elementEmployed=[];
      elementEmployed=$("#"+$.idWorkTeam+"Fn .employedTeam");
      elementEmployed.each((employed)=>{
        $("#"+$.idWorkTeam+"Fn #"+elementEmployed[employed].id+" #employedTeam"+employed).delay(time).slideDown('slow');
        time=time+100;
      });
    },
    ()=>{
      // $("#"+$.idWorkTeam+"Fn").css({
      //   'opacity':'0',
      //   'height': '0',
      //   'z-index': '0',
      // });
    });
  }
  //End function imagesSlide
  //Close all function
  $("html").click(function() {
    if($.switch){
      $.switch=!$.switch;
      if($.callback){
        var setTime=setTimeout(opacity,300);
        function opacity(){
          $("#followerMenuButton-"+$.side).css({
            opacity:''
          })
          delayHideButton=0;
          $('.parallax').css({
            'transform':'translateX(0)',
          });
        }
        delayHideButton=300;
      }
      $('.functionFollower').css({
        'opacity':'0',
        'height': '0',
        'z-index': '0',
      });
      console.log(!$.switch);
    $.callback=!$.callback;
    slideMenu($.side, $.otherSide);
    }

});
  $('#followerMenuOptionsDeployed, #followerMenuButton-left,#followerMenuButton-right ').click(function (e) {
    console.log('klkl');
    e.stopPropagation();
});
  //ArrowMove
  $('#followerMenuOptions li').hover((elementObj)=>{
    $.element = elementObj.target.id;
    var position=$('#'+$.element).position();
    var width=$('#'+$.element).width();
    var positionDef=(width/2)+position.left+"px";
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
  console.log($.side +' otro '+$.otherSide);
  position=event.pageX;
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
            var porcentMax = maxDesployer*3/100; //Crear margen del limmite
            if(porcentMax<5){porcentMax=50} //Establecer margen de limite
            else if(porcentMax>10){porcentMax=5}
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
  if($.idSecondMenu!=undefined){
    parallaxEfect($.idSecondMenu);
  }

});

//Slide menu before press button menu
function slideMenu(side, otherSide){

  $('#followerMenuOptionsDeployed, #borderFollowerMenu').addClass(side).removeClass(otherSide);
  $('.previewFunction').addClass(side).removeClass(otherSide);
  $('#mega-menu').addClass(side).removeClass(otherSide);
  $("#menu-flotante-"+side).show().addClass(side);
  if($.settings.activateTeam){
    $(".workTeamContainer").addClass(side).removeClass(otherSide);
  }
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
      opacity:1,
      'transition':'all .3s linear'
    });
    $('#search-menu-right, #login-menu-right').css({
      'right':LoginButtonsDeployedRight,
      opacity:1,
      'transition':'all .3s linear'
    });
  }
  else{
    //Hide function followerMenu
    $("#followerMenuOptionsDeployed, #borderFollowerMenu").css({
      width:'0px',
      opacity:0.5,
      transition:'all linear .3s',
    });
    $('.functionFollower').css({
      width:'0',
      height:'0',
      opacity:0,
      transition:'all linear .3s',
    })
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
      opacity:'',
      'transition':'all .3s linear'
    });
    $('#search-menu-right, #login-menu-right').css({
      'right':LoginButtonsDeployedRight,
      opacity:'',
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
    'top':$.marginTop,
    'box-shadow':'1px 1px 8px 0px grey',
  });
  $.i=0;
}

//Pendiente de comprobar si se usa, creo que no
//llamando funcion de movimiento fuera del mousemove
function parallaxEfect(element){
  $.widthSecondOptions = $('#'+element+'Ul').attr('sizedata');
if($.side=="right"){
  $('#'+element+'Fn').css({'right':'0'});
  $('#'+element+'Ul').addClass('rightSecondOptions');
  var z;
  var y;
  var xy;
  var maxDesployer = $.widthSecondOptions-420;
  var anchoVentana = $(window).width(); // Ancho de la ventana para calcular el el Parallax inverso
  if($.widthSecondOptions>480){ //Saber el tamaño de la lista para establecer la velocidad de desplazamiento
      var $this1 = $('#'+element+'Ul');
      if (position>(anchoVentana-150)) { //Establecer moviento en 0 si no ha pasado de los 150px
        z=0;
      }else if(position<(anchoVentana-150)){ // Establecer moviento del parallax despues de los 150px
        z=position-(anchoVentana-150); //Establecer moviento y restarle los 150px que estuvo inmovil
        y=z; //Almacenar dato en variable de moviento definitivo
        var porcentMax = maxDesployer*3/100; //Crear margen del limmite
        if(porcentMax<5){porcentMax=50} //Establecer margen de limite
        else if(porcentMax>10){porcentMax=5}
        if(y<(-maxDesployer+porcentMax)){
          z=(-maxDesployer+porcentMax);
        }
        if($.widthSecondOptions>780){
          z=z*1.7;
          if(z<(420-$.widthSecondOptions)){
            z=(-maxDesployer);
          }
        }
        y = -z;
        xy =  y + 'px';
        $this1.css({ 'transform':'translateX('+xy+')'});
      }
  }
}else if($.side=="left"){
  $('#'+element+'Ul').removeClass('rightSecondOptions');
  $('#'+element+'Fn').css({
    'right':'',
    'left':'0'
  });
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
        var porcentMax = maxDesployer*3/100;
        if(porcentMax<5){porcentMax=50}
        else if(porcentMax>10){porcentMax=5}
        if(y>maxDesployer-porcentMax){
          z=maxDesployer-porcentMax;
        }
        if($.widthSecondOptions>780){
          z=z*1.7;
          if(z>($.widthSecondOptions-420)){
            z=maxDesployer;
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
