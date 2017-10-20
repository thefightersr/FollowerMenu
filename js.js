function iniciar(){
  $("body").mensaje({
    color:'yellow'
  });
  var check=true;
  if(check){
    $(document).mousemove(function(event){
      hello();
    });
}
}

(function ( $ ) {
    $.fn.mensaje = function( options ) {
        // This is the easiest way to have default options.
        $.settings = $.extend({
            // These are the defaults.
            color: "red",
            backgroundColor: "black",
            activatePreview:true,
            optionsMenu:[{
              optionName:'HOME',
              functionName:'preview',
              functionData:'img/preview1.jpg'
              },{
              optionName:'SERVICES',
              functionName:'secondMenu',
              functionData:[{
                  optionName:'ANGULAR',
                  functionName:'',
                  functionData:''
                  },{
                    optionName:'WEBS',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'SEO',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'PLANTILLAS',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'PLANTILLAS',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'PLANTILLAS',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'PLANTILLAS',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'PLANTILLAS',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'PLANTILLAS',
                    functionName:'',
                    functionData:''
                  },{
                    optionsName:'PLANTILLAS',
                    functionName:'',
                    functionData:''
                  }
                ]
              },{
              optionName:'TEAM',
              functionName:'workTeam',
              functionData:''
              },{
              optionName:'SHOP',
              functionName:'secondMenu',
              functionData:''
              },{
              optionName:'CONTACTS',
              functionName:'secondMenu',
              functionData:''
              }
            ],

        }, options );
        var objeto=[{
          colores:{
            amarillo:'yellow',
            rojo:'red',
            blanco:'white',
            rosa:'pink'
          }
        },'blue'];
        var objeto2 = {
          preview:[{
          namePreview:'preview1',
          image:'preview1.jpg'
        }]
      };
          $("span").css({
            position:'absolute',
            color:$.settings.color
          });
          $(this).css({
            left:''
          });

        // Greenify the collection based on the settings variable.
        return $(this).find('span').css({
        }).hover(function(){
          var id =$(this).attr("id");
          console.log(id);
        });

        if($.settings.activatePreview){
          $.settings.optionsMenu.forEach((option)=>{
            if(option.functionName=="preview"){
              content = "<div class='previewFunction' id='"+option.optionName+"Fn'>klsdhfjksdjhkjshfjkasdf<img id='imgPreview' src='"+option.functionData+"'></div>";
              $("body").append(content);
              content="";
            }
            if(option.functionName=="secondMenu"){
              option.functionData.forEach((second)=>{
                if(second.functionName=="preview"){
                  content = "<div class='previewFunction previewFunctionSecond' id='"+second.optionName+"Fn'>ajkshfjkasjklflsjkfhjlskhjsdksjdf<img id='imgPreview' src='"+second.functionData+"'></div>";
                  $("body").append(content);
                  content="";
                }
              })
            }
          });
        }

    };


    //Create content function preview
    })(jQuery)
function fondo(element){
  var a=['hola', 'klk','como','estas','manin'];
  a.forEach((element)=>{
    console.log(element);
  })
  colo={
      backgroundColor:$.settings.backgroundColor
  }

  $(element).css(colo);
}

  function hello(){
  }
