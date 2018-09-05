window.onload=function () {
    let button = document.querySelector(".button");
    console.log(button);
    let box = document.querySelector(".box");
    console.log(box);
    let num = 0;
 /*   button.onclick = function () {
        //    创建文本节点
        let text = document.createTextNode(`这是文本${num}`);
        box.appendChild(text);
        num++
        //    1创建元素节点
        let a = document.createElement("a");
        let text = document.createTextNode("百度");
        //   2 创建属性
        let attr = document.createAttribute("href");
        //3设置属性的值
        attr.nodeValue = "http://www.baidu.com";
        //    4设置属性的节点
        a.setAttributeNode(attr);
        //    5插入节点
        box.appendChild(a);
        a.appendChild(text);

    }*/
// 自动出字
/*   let str="yusiahnadasdad.adadadad";
   let t=setInterval(fn1,200);

   let start=0;
   //字符的个数
   function fn1() {
       if(start>=str.length){
           clearInterval(t);
           box.style.color="blue";
       }
      let con = str.substr(start,1);
        //subStr(start,length)     从指定位置开始截取指定长度的字符(这里是从开始截取每次截取一个字符)
      let text=document.createTextNode(con);
      box.appendChild(text);
      start+=1;
   }*/
//自动出字结束
//点击出现大小不一的圆
/*    button.onclick=function () {
        let son=document.createElement("div");
        let w,r,g,b;
        w =parseInt(Math.random()*100+100);
        r =parseInt(Math.random()*255);
        g =parseInt(Math.random()*255);
        b =parseInt(Math.random()*255);
        son.style=`width:${w}px;height:${w}px;background-color:rgb(${r},${g},${b}); border-radius:50%;float:left`;
        box.appendChild(son);
    }*/
    //点击出现大小不一的圆结束
    //留言板获取内容开始

    //留言板获取内容结束
    // 表格开始
    let table=document.querySelector(".table");
    console.log(table);
    console.dir(table.childNodes);
    let td=document.querySelectorAll("td");
    let tr=document.querySelectorAll("tr");
    console.log(tr);
    let sc=document.querySelectorAll(".sc");
    console.log(sc);
    sc.forEach((element,index)=>{
        element.onclick=function () {

            table.childNodes[1].removeChild(tr[index]);
        //    一定要记住找到table
        }
    })
    td.forEach((item,index)=>{
        //每个单元格遍历起来
        item.ondblclick=function () {
            //每个单元格双击事件
            let input =document.createElement("input");
            //生成一个input输入框
            input.value=item.innerText;
            //将每个单元格的值赋给input
            item.innerText="";
            //将每个单元格清空
            input.onblur=function(){
                //点击input以外区域的事件
                value=this.value;
                // input的值直接等于此时输入的值
                item.innerText=value;
              //再将input此时的值赋给单元格
            }
            item.appendChild(input);
            input.focus();
        //    获取焦点
        }
    })
    // 表格结束
    }