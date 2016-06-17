/**
 * Created by Administrator on 2016/6/16.
 */


// 图片轮播代码
$(function(){
    //代码初始化
    var size=$(".img li").size();

    for(var i=1; i<=size; i++){
        var li="<li>"+i+"</li>";
        $(".num").append(li);
    }

    //手动控制轮播图
    $(".img li").eq(0).show();
    $(".num li").eq(0).addClass("active");
    $(".num li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        i=index;
        $(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    })



    //自动轮播
    var i=0;
    var t=setInterval(move,1500);


    //核心向左运动函数
    function moveL(){
        i--;
        if(i==-1){
            i=size-1;
        }

        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

    }

    //核心向右运动函数
    function move(){
        i++;
        if(i==size){
            i=0;
        }

        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

    }


    //左边按钮点击事件
    $(".banner .left").click(function(){
        moveL();
    })

    //右边按钮点击事件
    $(".banner .right").click(function(){
        move()

    })


    //定时器的开始于结束
    $(".banner").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(move,1500);
    })



});

// 表单提交代码
$(document).ready(function(){

        $(".submit").click(function (){
            $.get("http://localhost:8000/login",
                {
                    username:"admin",
                    password:"123123"
                },

                function (data) {
                    alert("Data: " + data.code + "Status: " + data.data);
                });
    });


});