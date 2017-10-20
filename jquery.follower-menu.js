$.switch=false;
    var x=0;
    var w=0;
    $(document).ready(function() {
      // $(window).resize(function(){
      //   alert("is mobile");
      //   console.log("is mobile");
      // });
      var widthTextSlide=100;
      var i=0;
      $('.text-slide').each(()=>{
        i++;
        $('#text-slide'+i).css({
          'left':widthTextSlide+'px'
        });
        widthTextSlide=widthTextSlide+500;
      });

      var x=5;
      $.width_options=[];
      $.divs_ancho=0;
      for(var i=1;i<=x;i++){
        var div_ancho =$("#option"+i).width();
        w=w+19;
        var z=$.divs_ancho+div_ancho/2+182+w;
        $.width_options.push(z);
        $.divs_ancho =$.divs_ancho+ div_ancho;
      }
      $(window).scroll(function myFunction(){
          console.log( x+= 1);
      });
      //Copiado
      //Ocultar Services
      function closeServices(){
        $('#mega-menu').css({
          'height':'0',
          'transition':'all .3s linear'
        });
        $('#option2').css({'border-bottom': '5px solid transparent'});
      }

      //Copiado
      $('#fullpage').click(()=>{
        if($.switch==true){
          $.switch=false;
          $("#menuDesplegado").css({
            'width':"0px",
            'opacity':'0',
            'transition':'all .3s linear'
          });
        }
      });

      $("#menu-flotante-right").click(()=>{
        $.switch=!$.switch;
        $('#menuDesplegado').addClass('right').removeClass('left');
        $(this).show().css({'right':'14vh'});
        if($.switch){
          $("#menuDesplegado").css({
            'width':"500px",
            'opacity':'1',
            'transition':'all .3s linear',
            'box-shadow': '-5px 3px 5px 1px #FF5000'
          });
          $("#menu-flotante-right").css({'box-shadow': '-5px 3px 5px 0px #cc0000'})
        }else{
          $("#menuDesplegado").css({
            'width':"0px",
            'opacity':'0',
            'transition':'all .3s linear'
          });
          $("#menu-flotante-right").css({'box-shadow': '0px 0px 5px 0px #cc0000'})
        }
      });
//Copiado
      $("#option1").hover(()=>{
        $("#arrow-down").css({
          'position': 'fixed',
          'left':$.width_options[0],
          'opacity':'1',
          'font-size': '2rem',
          'color':'white',
          'transition':'all .3s linear'
        });
        $('#img-preview').css({
          'height':'40vh',
          'transition':'all .3s linear'
        });
        $('#img-preview').css({
          'z-index':'1'
        });
        closeServices();
      },()=>{
        $('#arrow-down').css({
          'opacity':'0',
          'transition':'all .3s linear'
        });
        $('#img-preview').css({
          'z-index':'0'
        });
        $('#img-preview').css({
          'height':'0vh',
          'transition':'all .3s linear'
        });
      });
      $("#option2").hover(()=>{
        $("#arrow-down").css({
          'position': 'fixed',
          'left':$.width_options[1],
          'opacity':'1',
          'font-size': '2rem',
          'color':'white',
          'transition':'all .3s linear'
        });
        $('#mega-menu').css({
          'z-index':'1'
        });
        $('#mega-menu').css({
          'height':'43px',
          'transition':'all .3s linear'
        });
        $('#option2').css({'border-bottom': '5px solid #E6E6E6'});
      },()=>{
        $('#mega-menu').css({
          'z-index':'0'
        });
      });
      $("#option3").hover(()=>{
        $("#arrow-down").css({
          'position': 'fixed',
          'left':$.width_options[2],
          'opacity':'1',
          'font-size': '2rem',
          'color':'white',
          'transition':'all .3s linear'
        });
        $('#empresa').css({
          'height':'40vh',
          'opacity':'1',
          'transition':'all .3s linear'
        });
        $('#empresa').css({
          'border-bottom':'solid 7px #00BBFE',
        });
        $.time=0.3;
        setTimeout(()=>{
          for(i=0;i<=6;i++){
            $('#empleado'+i+' .img').delay($.time).css({
              'height':'60%',
              'transition':'all '+$.time+'s linear'
            });
            $.time=$.time+0.1;
          }
        },500);
        $('.texto').css({
          'height':'40%',
          'transition':'all .3s linear'
        });
        closeServices();
      },()=>{
        $('.texto').css({
          'height':'0%',
          'transition':'all .3s linear'
        });
        $('.img').css({
          'height':'100%',
          'transition':'all .3s linear'
        });
        $('#empresa').css({
          'height':'0vh',
          'opacity':'0',
          'transition':'all .3s linear'
        });
        $('#empresa').css({
          'border-bottom':'solid 7px transparent',
        });
        $('#arrow-down').css({
          'opacity':'0',
          'transition':'all .3s linear'
        })
      });
      $("#option4").hover(()=>{
        $("#arrow-down").css({
          'position': 'fixed',
          'left':$.width_options[3],
          'opacity':'1',
          'font-size': '2rem',
          'color':'white',
          'transition':'all .3s linear'
        });
        $('#shop').css({
          'height':'40vh',
          'opacity':'1',
          'transition':'all .3s linear'
        });
        $('#shop').css({
          'border-bottom':'solid 7px #00BBFE',
        });
        closeServices();
      },()=>{
        $('#shop').css({
          'height':'0vh',
          'opacity':'0',
          'transition':'all .3s linear'
        });
        $('#shop').css({
          'border-bottom':' 0px transparent',
        });
        $('#arrow-down').css({
          'opacity':'0',
          'transition':'all .3s linear'
        })
      });
      $("#option5").hover(()=>{
        $("#arrow-down").css({
          'position': 'fixed',
          'left':$.width_options[4],
          'opacity':'1',
          'font-size': '2rem',
          'color':'white',
          'transition':'all .3s linear'
        });
        $('#contacto').css({
          'height':'40vh',
          'opacity':'1',
          'transition':'all .3s linear'
        });
        $('#contacto').css({
          'border-bottom':'solid 7px #00BBFE',
        });
        closeServices();
      },()=>{
        $('#contacto').css({
          'height':'0vh',
          'opacity':'0',
          'transition':'all .3s linear'
        });
        $('#arrow-down').css({
          'opacity':'0',
          'transition':'all .3s linear'
        });
      });
      //Funciones hover Mega menu
      //Mostrar optionMega1
      //Copiado
      $('#optionMega1').hover(()=>{
        $('#mega-menu').css({
          'height':'40vh',
          'transition':'all .3s linear'
        });
        $('#contenido-webs').css({
          'opacity':'1',
          'transition':'all .3s linear'
        });
      },()=>{
        $('#mega-menu').css({
          'height':'43px',
          'transition':'all .3s linear'
        });
        $('#contenido-webs').css({
          'opacity':'0',
          'transition':'all .3s linear'
        });
      });

      //Mostrar optionMega3
      $('#optionMega3').hover(()=>{
        $('#contenido-services').css({
          'opacity':'1',
          'transition':'all .3s linear'
        });
        $('#mega-menu').css({
          'height':'40vh',
          'transition':'all .3s linear'
        });
      },
      ()=>{
        $('#mega-menu').css({
          'height':'43px',
          'transition':'all .3s linear'
        });
          $('#contenido-services').css({
            'opacity':'0',
            'transition':'all .3s linear'
          });
      });
      $("#optionMega5").hover(()=>{
        $('#slide').css({
          'opacity':'1',
          'transition':'all .3s linear'
        });
        $('.text-slide').addClass('animation-true');
        //Despliegue de optionMega5
        $('#mega-menu').css({
          'height':'40vh',
          'transition':'all .3s linear'
        });
        //Paso de slide
        $.pixelSlide=0;
        $.slide=setInterval(()=>{
          $.pixelSlide=$.pixelSlide+500;
          $('.slide').css({
            'transform':"translateX(-"+$.pixelSlide+"px)",
            'transition':'all .4s linear'
          });
          $('.text-slide').css({
            'transform':"translateX(-"+$.pixelSlide+"px)",
            'transition':'all .4s linear'
          });
        },5000);
      },
      function myStopFunction() {
        $.pixelSlide=0;
        $('.text-slide').removeClass('animation-true');
        $('#slide').css({
          'opacity':'0',
          'transition':'all .3s linear'
        });
        $('.slide').css({
          'transform':"translateX(0px)",
          'transition':'all .4s linear'
        });
        $('.text-slide').css({
          'transform':"translateX(0px)",
          'transition':'all .4s linear'
        });
        $('#mega-menu').css({
          'height':'43px',
          'transition':'all .3s linear'
        });
        clearInterval($.slide);
    });

    //copiado
      $("#menu-flotante-left").click(()=>{
        $.switch=!$.switch;
        $('#menuDesplegado').addClass('left').removeClass('right');
        $('#img-preview').addClass('left').removeClass('right');
        $('#mega-menu').addClass('left').removeClass('right');
        //Pendiente de verificar
        $(this).show().addClass('left');
        if($.switch){
          $('#img-preview').css({
            'width':"500px",
            'opacity':'1',
            'transition':'all .3s linear',
          });
          $('#mega-menu').css({
            'width':"500px",
            'opacity':'1',
            'transition':'all .3s linear',
          });
          $("#menuDesplegado").css({
            'width':"500px",
            'opacity':'1',
            'transition':'all .3s linear',
            'box-shadow': '3px 2px 10px 0px grey',
          });
          $('#search-menu, #login-menu').css({
            'left':'665px',
            'transition':'all .3s linear'
          });

            $('#img-preview').css({
              'border-bottom':'solid 7px #00BBFE',
          });
          $('#mega-menu').css({
            'border-bottom':'solid 7px #00BBFE',
          });
        }
        else{
          $('#img-preview').css({
            'border-bottom':'solid 0px #00BBFE',
          });
          $('#search-menu, #login-menu').css({
            'left':'205px',
            'transition':'all .3s linear'
          });
          $("#menuDesplegado").css({
            'width':"0px",
            'opacity':'0',
            'transition':'all .3s linear'
          });
          $("#menu-flotante-left").css({'box-shadow': '0px 0px 0px 0px #cc0000'})
          $("#img-preview").css({
            'width':"0px",
            'opacity':'0',
            'transition':'all .3s linear'
          })
        }
      });
    });
    //Copiado
    $(document).ready(function($){
	     var ventana_ancho = $(window).width();
       var ventana_alto  = $(window).height();
      $('#posicion').text(ventana_ancho,ventana_alto);
         this.tamañoVentana=ventana_ancho/2;
        });
//Copiado
      $(document).mousemove(function(event){
        $.posicion=event.pageX;
        var ancho = $("#list-mega-menu").width()
        //Moviento parallax
        $.pantalla = $(window);
        $('.parallax').each(function(){
            var $this = $(this);
            var y = -$.posicion*2;
            // $("#optionMega1").text(y);
            // $("#optionMega7").text(y);
            if(y<-1145){y=-1130;}
            if(y>-360){y=-370;}
            var xy =  y + 'px';
            $this.css({ 'transform':'translateX('+xy+')'});
        });
        //Mostrar menu izquierdo y ocuktar derecho
        if($.posicion<this.tamañoVentana){
          if(!$.switch){
            $("#menu-flotante-left").css({
              'left':'120px',
              'box-shadow':'1px 1px 8px 0px grey',
              'transition':'all .3s linear'
            });
            $("#menu-flotante-right").css({
              'right':'-100px',
              'transition':'all .3s linear'
            });
          }
        }else{
          //Mostrar menu derecho y ocultar izquierdo
          if(!$.switch){
            $("#menu-flotante-right").css({
              'right':'14vh',
              'transition':'all .3s linear'
            });
            $("#menu-flotante-left").css({
              'left':'-100px',
              'transition':'all .3s linear'
            });
          }
        }
      });
      console.log($.posicion);
