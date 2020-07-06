
function myFun()
    {
    var a=document.form1.txtname.value;
    document.getElementById("demoname").innerHTML=a;
    var b=document.form1.txtfname.value;
    document.getElementById("demofname").innerHTML=b;
    var c=document.form1.txtbatch.value;
    document.getElementById("demobatch").innerHTML=c;
    var d=document.form1.txtsec.value;
    document.getElementById("demosec").innerHTML=d;
    var e=document.form1.txteng.value;
    document.getElementById("demoeng").innerHTML=e;
    var f=document.form1.txturdu.value;
    document.getElementById("demourdu").innerHTML=f;
    var g=document.form1.txtphy.value;
    document.getElementById("demophy").innerHTML=g;
    var h=document.form1.txtmath.value;
    document.getElementById("demomath").innerHTML=h;
    var i=document.form1.txtchem.value;
    document.getElementById("demochem").innerHTML=i;
    var txt1=eval(parseFloat(document.form1.txteng.value)+parseFloat(document.form1.txturdu.value)
    +parseFloat(document.form1.txtphy.value)+parseFloat(document.form1.txtmath.value)+parseFloat(document.form1.txtchem.value));
    document.getElementById("demototal").innerHTML=txt1;
    var txt2=eval(parseFloat(txt1*100)/500);
    document.getElementById("demoper").innerHTML=txt2.toFixed(2)+"%";
    switch(true)
    {
    case(txt2>=80):
    document.getElementById("demograde").innerHTML="A1";
    break;
    case(txt2>=70):
    document.getElementById("demograde").innerHTML="A";
    break;
    case(txt2>=60):
    document.getElementById("demograde").innerHTML="B";
    break;
    case(txt2>=50):
    document.getElementById("demograde").innerHTML="C";
    break;
    case(txt2>=40):
    document.getElementById("demograde").innerHTML="D";
    break;
    case(txt2<40):
    document.getElementById("demograde").innerHTML="Fail";
    break;
    }
    document.getElementById("f3").style.visibility = "visible";
    }