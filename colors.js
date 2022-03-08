let Link = {
  setColor:function(color){
    // let list = document.querySelectorAll('a');
    // let i = 0;
    // while(i < list.length){
    //   list[i].style.color = color;
    //   i++;
    // }
    $('a').css('color', color);
  }
}
let Body = {
  setFontColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self){
  if(self.value === 'NIGHT') {
    Body.setBackgroundColor('black');
    Body.setFontColor('white');
    self.value = 'DAY';
    Link.setColor('yellow');
  } else {
    Body.setBackgroundColor('white');
    Body.setFontColor('black');
    self.value = 'NIGHT';
    Link.setColor('blue');
  }
}
