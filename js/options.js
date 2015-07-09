function changeC(){
        $('#optionModalBody').html("");
        $('#optionModalBody').load('options.html',function(){
              jscolor.init();
            } );
      
        
}
function goNews(){
        $('#mainPage').html("");
        $('#mainPage').load('news-page/news.html');
        
}
function goGrades(){
        $('#mainPage').html("");
        $('#mainPage').load('grade-page.html');
        
}

function changeColor(activeIndex){
        var answer=confirm("Are you sure you want this color?");
        console.log(answer);
        if(answer){
            var c=$(".sidebar-nav").children();
            c.each(function() {
                var index = (Math.abs($(this).index() - activeIndex));
                $(this).css('background-color', "");
                index++;
            });
            $('.sidebar-nav').shadeout({
                color: $("#colorPicker").val(),
                color2: '#FFFFFF',
                increment: 10
            });
        }
}
function teacherContact(){
        $('#info').html("");
        $('#info').load('teacherInfo.html');
        
}
function gradeTable(){
        $('#info').html("");
        $('#info').load('gradeTable.html');
        
}
function goDash(){
        $('#mainPage').html("");
        $('#mainPage').load('dashboard.html');
}
