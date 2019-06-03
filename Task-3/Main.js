$(document).ready(function($){
   

    // тег див с чего все начнется
       var bigBox=$('#wrapper');
    
     // массив выбранных цветов
       var colors=[
           {item: 1, color:"#FF0000"},
           {item: 2, color:"#FFA500"},
           {item: 3, color:"#800080"},
           {item: 4, color:"#FF00FF"},
           {item: 5, color:"#00FF00"},
           {item: 6, color:"#00FFFF"},
           {item: 7, color:"#0000FF"},
           {item: 8, color:"#808000"}];
            
     // дублируем цвета полностью
        var duplColors=colors.slice(0);
     
     // добавлям все в одну место
        var newColorBox=colors.concat(duplColors);
     
        var curItem; // для выбора номера квадрата
        var innerColor; // для выбора цвета квадрата
        var evenColorArray=[]; // для добавления выбранных в массив
     
     // функция перемешивания очередности
     function mixColors(c){
       
       var j;
       var x;
     
       for(var i = c.length; i; j = Math.floor(Math.random() * i), x = c[--i], c[i] = c[j], c[j] = x);
          return c;
     }  
       
     
     //вызываем функцию и перемешиваем
      mixColors(newColorBox);
            
      // создаем игровое поле
      jQuery('<div/>', { class: 'wraper'}).appendTo('.container');
             
      jQuery('<div/>', {class: 'cub-wrapper'}).appendTo('.wraper');
            
      for(var i=0; i<16; i++)
            {         
                jQuery('<div/>', {class: 'cub'})
                   .appendTo('.cub-wrapper')
                   .attr('data-item',newColorBox[i].item)
                   .attr('data-color', newColorBox[i].color)
                   .attr('style', 'background-color:#ffffff');
            }
       
     // при нажатие на каждый квадрат
      $('.cub').click(function(){
          
                   // доавляем класс для сортировки выбрынных пар
                    $(this).addClass('selected');
                   // берем атрибут нумерации
                    curItem=$(this).attr('data-item');
                   // берем цвет квадрата
                    innerColor=$(this).attr('data-color');
                    
                   // при нажатие показываем цвет
                    evenColor= $(this).attr('style', 'background-color:'+innerColor);

                   // добавляем цвет в новый массив
                    evenColorArray.push(innerColor);
          
          
                // если в массиве больше одного цвета
                if(evenColorArray.length>1)
                   {
                      
                       for(var i=0; i<evenColorArray.length; i++)
                       {
                           // если цвета елементов одинаковые
                         if(evenColorArray[0]==evenColorArray[1])
                           {
                               // удаляем этот класс оставляем другую для выбранных
                                $(this).removeClass('cub');
                                   
                               // очищаем массив для дальнейшего использования
                                    evenColorArray=[];
                           }
                           else // если цвета не одинаковые 
                           {
                                // обратно в белый цвет
                                $('.cub').attr('style', 'background-color:#ffffff');
                               
                               // очищаем массив для дальнейшего использования
                                evenColorArray=[]; 
                           }        
                       }
                   }      
             });                    
       
    // Добавляем кнопку    
      jQuery('<button/>',{type:'submit', id:'btn', text:'Start'})
            .appendTo('.wraper');

//        при нажатие на кнопку
     $("#btn").click(function(){
   
 
        });
      
    },(jQuery));

//  пока еще недоделана


