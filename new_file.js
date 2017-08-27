
/*************************宿舍图片*****************************/
var images=document.getElementById("images");
var buttonUp=document.getElementById("buttonUp");
var buttonDown=document.getElementById("buttonDown");
var imagesSrc=new Array(6);
var n=0;
imagesSrc[0]="img/4.jpg";
imagesSrc[1]="img/5.jpg";
imagesSrc[2]="img/6.jpg";
imagesSrc[3]="img/7.jpg";
imagesSrc[4]="img/8.jpg";
imagesSrc[5]="img/9.jpg";
if(images!=null) images.src=imagesSrc[n];
function imagesDown(){
	n++;
	if(n==6){
		n--;
		alert("已经是最后一张啦！");
	}
	else{
		images.src=imagesSrc[n];
	}
}
function imagesUp(){
	n--;
	if(n==-1){
		n++;
		alert("已经是第一张啦！");
	}
	else{
		images.src=imagesSrc[n];
	}
}
/*************************more*******************************/
var oMidd=document.getElementsByClassName("middmainright")[0];
var oMember=document.getElementsByClassName("member");
var memberImg=document.getElementsByClassName("memberImg");
var person=new Array();
person[0]=new Object();
	person[0].name="李文文";
	person[0].speciality="嵌入式软件开发";
	person[0].hometown="陕西榆林";
	person[0].phone="12031442224";
	person[0].hobby="搭玩具车";
	person[0].tag="你猜";
	person[0].hasMate="有";
	person[0].englishLeval="二级";
person[1]=new Object();
	person[1].name="冯明明";
	person[1].speciality="Web前端开发";
	person[1].hometown="广东信宜";
	person[1].phone="12031442234";
	person[1].hobby="战斗于峡谷";
	person[1].tag="王哲哲的头";
	person[1].hasMate="有";
	person[1].englishLeval="四级";
person[2]=new Object();
	person[2].name="王哲哲";
	person[2].speciality="嵌入式软件开发";
	person[2].hometown="陕西富平";
	person[2].phone="12031442214";
	person[2].hobby="拆搭废品";
	person[2].tag="大过五层楼";
	person[2].hasMate="没有";
	person[2].englishLeval="二级";
person[3]=new Object();
	person[3].name="朱敏敏";
	person[3].speciality="Android开发";
	person[3].hometown="陕西咸阳";
	person[3].phone="12031432424";
	person[3].hobby="做仰卧起坐";
	person[3].tag="你猜";
	person[3].hasMate="没有";
	person[3].englishLeval="二级";
person[4]=new Object();
	person[4].name="贾浩浩";
	person[4].speciality="嵌入式软件开发";
	person[4].hometown="河北石家庄";
	person[4].phone="12031440024";
	person[4].hobby="玩王者荣耀";
	person[4].tag="卧槽";
	person[4].hasMate="有";
	person[4].englishLeval="四级";
person[5]=new Object();
	person[5].name="曹辉辉";
	person[5].speciality="网络编程开发";
	person[5].hometown="陕西咸阳";
	person[5].phone="12031000224";
	person[5].hobby="弄手柄";
	person[5].tag="......";
	person[5].hasMate="没有";
	person[5].englishLeval="二级";
function more(i){
	if(document.getElementsByClassName('creatDiv')[0]!=null){
		oMidd.removeChild(document.getElementsByClassName('creatDiv')[0]);
	}
	var creat_div=document.createElement("div");
	creat_div.className="creatDiv";

	var create_font=document.createElement('font');
	create_font.className="createFont";
	//关闭按钮
	var close_btn=document.createElement("input");
	close_btn.className="closeBtn";
	close_btn.value="X";
	close_btn.type="button";
	create_font.appendChild(close_btn);
	
	//顶头标题
	var create_h=document.createElement("h3");
	var name=document.getElementsByClassName("name");
	create_h.innerHTML=name[i].innerHTML;
	create_h.className="createH";
	create_font.appendChild(create_h);
	creat_div.appendChild(create_font);
	//个人图片
    var creat_img=document.createElement('img');
    creat_img.className="creatImg";
    var imgSrc=memberImg[i].src.substring(memberImg[i].src.indexOf("img"),memberImg[i].src.length);
	creat_img.src=imgSrc;
	creat_div.appendChild(creat_img);
	//个人信息
	var create_ul=document.createElement("ul");
	create_ul.className="createUl";
	var create_li=new Array();
	var count=0;
	for(var j in person[i]){
		if(person[i].hasOwnProperty(j)){//计算对象person[i]中有多少个属性
			count++;
		}
	}
	for(var j=0;j<count-1;j++){
		create_li[j]=document.createElement("li");
		create_li[j].className="createLi";
		create_ul.appendChild(create_li[j]);
	}
	create_li[0].innerHTML="特长:&nbsp"+person[i].speciality;
	create_li[1].innerHTML="故乡:&nbsp"+person[i].hometown;
	create_li[2].innerHTML="手机号码:&nbsp"+person[i].phone;
	create_li[3].innerHTML="爱好:&nbsp"+person[i].hobby;
	create_li[4].innerHTML="口头禅:&nbsp"+person[i].tag;
	create_li[5].innerHTML="有无伴侣:&nbsp"+person[i].hasMate;
	create_li[6].innerHTML="英语水平:&nbsp"+person[i].englishLeval;
	creat_div.appendChild(create_ul);
	
    oMidd.appendChild(creat_div);
    //点击关闭按钮关闭选项卡
	close_btn.onclick=function(){
		oMidd.removeChild(creat_div);
	}
}
/***********************************************************/
/*************************个人展示****************************/	
var showMain=document.getElementsByClassName("showMain")[0];
var showSelf=document.getElementsByClassName("showSelf")[0];
var showStory=document.getElementsByClassName("showStory")[0];
var showPhoto=document.getElementsByClassName("showPhoto")[0];
var showAch=document.getElementsByClassName("showAch")[0];
var showName=document.getElementsByClassName("showName");
var showMes=document.getElementsByClassName("showMes");
var imgSelf=document.getElementById("imgSelf");
var who=0;//名字栏
var what=0;//选项栏
var ph=1;//图片选项栏
var showperson=new Array();
showperson[0]=new Object();
	showperson[0].selfImg="img02/lww_self.jpg";
	showperson[0].selfHref="resume/lww_self.doc";
	showperson[0].article=["article/besotted.txt","article/Boring grew up.txt","article/How long can love love without money.txt","article/How many romantic not win back.txt"];
	showperson[0].xiuxian=["img02/xiuxian_lww01.jpg","img02/xiuxian_lww02.jpg","img02/xiuxian_lww03.jpg","img02/xiuxian_lww04.jpg","img02/xiuxian_lww05.jpg","img02/xiuxian_lww06.jpg","img02/xiuxian_lww07.jpg","img02/xiuxian_lww08.jpg","img02/xiuxian_lww09.jpg"];
	showperson[0].study=["img02/study_fmm08.jpg","img02/study_fmm09.jpg"];
	showperson[0].sport=["img02/sport_wzz01.jpg","img02/sport_wzz06.jpg","img02/sport_wzz05.jpg"];
	showperson[0].gloup=["img02/gloup_jhh01.jpg","img02/gloup_jhh02.jpg","img02/gloup_jhh03.jpg","img02/gloup_jhh04.jpg","img02/gloup_jhh05.jpg","img02/gloup_jhh06.jpg","img02/gloup_jhh07.jpg","img02/gloup_jhh08.jpg","img02/gloup_jhh09.jpg"];
	showperson[0].award=["img02/award_lww01.jpg","img02/award_lww02.jpg","img02/award_lww03.jpg"];
	showperson[0].awardint=["2013年2月李文文同学获得了\"最牛逼装逼王称号\"！","2014年1月李文文同学获得了\"最牛赖皮王称号\"！","2014年6月李文文同学获得了\"醉看熊猫tv影评节目王称号\"！"];
showperson[1]=new Object();
	showperson[1].selfImg="img02/fmm_self.jpg";
	showperson[1].selfHref="resume/fmm_self.doc";
	showperson[1].article=["article/I am a grain of beads in front of the Buddha.txt","article/I am a violet flower in front of the Buddha.txt","article/I had a love.txt","article/In love eternally.txt"];
	showperson[1].xiuxian=["img02/xiuxian_lww01.jpg","img02/xiuxian_lww02.jpg","img02/xiuxian_lww03.jpg","img02/xiuxian_lww04.jpg","img02/xiuxian_lww05.jpg","img02/xiuxian_lww06.jpg"];
	showperson[1].study=["img02/study_fmm01.jpg","img02/study_fmm02.jpg"];
	showperson[1].sport=["img02/sport_wzz09.jpg","img02/sport_wzz03.jpg","img02/sport_wzz02.jpg"];
	showperson[1].gloup=["img02/gloup_jhh02.jpg","img02/gloup_jhh05.jpg"];
	showperson[1].award=["img02/award_fmm01.jpg","img02/award_fmm02.jpg","img02/award_fmm03.jpg"];
	showperson[1].awardint=["2013年2月冯明明同学获得了\"地球最强盖伦王称号\"！","2014年1月冯明明同学获得了\"最厚脸皮王称号\"！","2014年6月冯明明同学获得了\"风扇最多王称号\"！"];
showperson[2]=new Object();
	showperson[2].selfImg="img02/wzz_self.jpg";
	showperson[2].selfHref="wzz_self.doc";
	showperson[2].article=["article/Leave the decision to try to love.txt","article/love a man.txt","article/Meet not miss.txt"];
	showperson[2].xiuxian=["img02/xiuxian_lww07.jpg","img02/xiuxian_lww08.jpg"];
	showperson[2].study=["img02/study_fmm01.jpg","img02/study_fmm02.jpg","img02/study_fmm03.jpg","img02/study_fmm04.jpg","img02/study_fmm05.jpg","img02/study_fmm06.jpg","img02/study_fmm07.jpg","img02/study_fmm08.jpg","img02/study_fmm09.jpg"];
	showperson[2].sport=["img02/sport_wzz03.jpg","img02/sport_wzz02.jpg","img02/sport_wzz01.jpg"];
	showperson[2].gloup=["img02/gloup_jhh03.jpg","img02/gloup_jhh04.jpg"];
	showperson[2].award=["img02/award_wzz01.jpg"];
	showperson[2].awardint=["2013年2月王哲哲同学获得了\"最牛大胃王称号\"！"];
showperson[3]=new Object();
	showperson[3].selfImg="img02/zmm_self.jpg";
	showperson[3].selfHref="resume/zmm_self.doc";
	showperson[3].article=["article/Send rose and ragrance.txt","article/strang faces again.txt","article/The most unexpected results.txt"];
	showperson[3].xiuxian=["img02/xiuxian_lww09.jpg","img02/xiuxian_lww10.jpg"];
	showperson[3].study=["img02/study_fmm05.jpg","img02/study_fmm06.jpg","img02/study_fmm07.jpg"];
	showperson[3].sport=["img02/sport_wzz07.jpg","img02/sport_wzz03.jpg","img02/sport_wzz02.jpg"];
	showperson[3].gloup=["img02/gloup_jhh06.jpg","img02/gloup_jhh08.jpg"];
	showperson[3].award=["img02/award_zmm01.jpg"];
	showperson[3].awardint=["2013年2月朱敏敏同学获得了\"被褥邋遢王称号\"！"];
showperson[4]=new Object();
	showperson[4].selfImg="img02/jhh_self.jpg";
	showperson[4].selfHref="resume/jhh_self.doc";
	showperson[4].article=["article/The stillness of the night thinking.txt","article/Today's special miss you.txt","article/Vow, or a lie.txt"];
	showperson[4].xiuxian=["img02/xiuxian_lww11.jpg","img02/xiuxian_lww12.jpg"];
	showperson[4].study=["img02/study_fmm03.jpg","img02/study_fmm04.jpg","img02/study_fmm06.jpg"];
	showperson[4].sport=["img02/sport_wzz01.jpg","img02/sport_wzz02.jpg","img02/sport_wzz03.jpg","img02/sport_wzz04.jpg","img02/sport_wzz05.jpg","img02/sport_wzz06.jpg","img02/sport_wzz07.jpg","img02/sport_wzz08.jpg","img02/sport_wzz09.jpg"];
	showperson[4].gloup=["img02/gloup_jhh05.jpg","img02/gloup_jhh02.jpg"];
	showperson[4].award=["img02/award_jhh01.jpg"];
	showperson[4].awardint=["2013年2月贾浩浩同学获得了\"亡者农药最浪王称号\"！"];
showperson[5]=new Object();
	showperson[5].selfImg="img02/chh_self.jpg";
	showperson[5].selfHref="resume/chh_self.doc";
	showperson[5].article=["article/What is your standard of love.txt","article/When time to settle, only memories.txt","article/Where Is The Love.txt","article/your birthday.txt"];
	showperson[5].xiuxian=["img02/xiuxian_lww01.jpg","img02/xiuxian_lww02.jpg","img02/xiuxian_lww03.jpg","img02/xiuxian_lww04.jpg","img02/xiuxian_lww05.jpg","img02/xiuxian_lww06.jpg"];
	showperson[5].study=["img02/study_fmm02.jpg","img02/study_fmm05.jpg","img02/study_fmm07.jpg"];
	showperson[5].sport=["img02/sport_wzz01.jpg","img02/sport_wzz03.jpg","img02/sport_wzz05.jpg"];
	showperson[5].gloup=["img02/gloup_jhh01.jpg","img02/gloup_jhh09.jpg"];
	showperson[5].award=["img02/award_chh01.jpg"];
	showperson[5].awardint=["2013年2月曹辉辉同学获得了\"最宅宿舍王称号\"！"];
if(document.getElementById("show")!=null){
	//默认下显示这个
	showName[0].style.backgroundColor="#7CFC00";
	showMes[0].style.backgroundColor="orangered";
	imgSelf.src=showperson[who].selfImg;
	//以下是先创建好showperson对象中的各项内容
	
	var selectArticle=new Array();//select标签
	var artControl=document.getElementsByClassName("artControl")[0];
	
	var photoDisplay=new Array();
	var photoDisplay02=new Array();
	var photoDisplay03=new Array();
	var photoDisplay04=new Array();
	var showPhoto=document.getElementsByClassName("showPhoto")[0];
	
	var awardImg=new Array();
	var awardIntro=new Array();
	var bigAch=document.getElementsByClassName("bigAch")[0];
	var awardInt=document.getElementsByClassName("awardInt")[0];
	
	for(var i=0;i<showperson.length;i++){
		//证书栏
		awardImg[i]=document.createElement("div");
		awardImg[i].className="awardImg";
		awardImg[i].style.display="none";
		awardIntro[i]=document.createElement("div");
		awardIntro[i].className="awardIntro";
		awardIntro[i].style.display="none";
		if(awardImg[i].childNodes.length==0){
			for(var j=0;j<showperson[i].award.length;j++){
				var awardPath=showperson[i].award[j];
				var awardImgDisplay=document.createElement("img");
				awardImgDisplay.src=awardPath;
				var awardIntroduc=document.createElement("P");
				awardIntroduc.innerHTML=showperson[i].awardint[j];
				
				awardImg[i].appendChild(awardImgDisplay);
				awardIntro[i].appendChild(awardIntroduc);
			}
		}
		bigAch.appendChild(awardImg[i]);
		awardInt.appendChild(awardIntro[i]);
		//故事栏内容准备工作
		selectArticle[i]=document.createElement("select");
		selectArticle[i].className="selectArticle";
		selectArticle[i].style.display="none";
//		alert(selectArticle[i].length);
		if(selectArticle[i].length==0){
			for(var k=0;k<showperson[i].article.length;k++){
				var articlePath=showperson[i].article[k];
				var option=document.createElement("option");
				option.value=articlePath;
				option.innerHTML=articlePath.substring(articlePath.indexOf("/")+1,articlePath.indexOf("."));
				selectArticle[i].appendChild(option);
			}
			
		}
		artControl.appendChild(selectArticle[i]);
		//图库栏内容准备工作
		//图库栏----休闲
		photoDisplay[i]=document.createElement("div");
		photoDisplay[i].className="photoDisplay";
 		if(i==0) photoDisplay[i].style.display="block";
 		else photoDisplay[i].style.display="none";
		if(photoDisplay[i].childNodes.length==0){
			for(var k=0;k<showperson[i].xiuxian.length;k++){
				var xImgPath=showperson[i].xiuxian[k];
				var xImg=document.createElement("img");
				xImg.src=xImgPath;
				photoDisplay[i].appendChild(xImg);
			}
		}
		showPhoto.appendChild(photoDisplay[i]);
		//图库栏----运动
		photoDisplay02[i]=document.createElement("div");
		photoDisplay02[i].className="photoDisplay";
 		photoDisplay02[i].style.display="none";
		if(photoDisplay02[i].childNodes.length==0){
			for(var k=0;k<showperson[i].sport.length;k++){
				var xImgPath=showperson[i].sport[k];
				var xImg=document.createElement("img");
				xImg.src=xImgPath;
				photoDisplay02[i].appendChild(xImg);
			}
		}
		showPhoto.appendChild(photoDisplay02[i]);
		//图库栏----学习
		photoDisplay03[i]=document.createElement("div");
		photoDisplay03[i].className="photoDisplay";
 		photoDisplay03[i].style.display="none";
		if(photoDisplay03[i].childNodes.length==0){
			for(var k=0;k<showperson[i].study.length;k++){
				var xImgPath=showperson[i].study[k];
				var xImg=document.createElement("img");
				xImg.src=xImgPath;
				photoDisplay03[i].appendChild(xImg);
			}
		}
		showPhoto.appendChild(photoDisplay03[i]);
		//图库栏----集体
		photoDisplay04[i]=document.createElement("div");
		photoDisplay04[i].className="photoDisplay";
 		photoDisplay04[i].style.display="none";
		if(photoDisplay04[i].childNodes.length==0){
			for(var k=0;k<showperson[i].gloup.length;k++){
				var xImgPath=showperson[i].gloup[k];
				var xImg=document.createElement("img");
				xImg.src=xImgPath;
				photoDisplay04[i].appendChild(xImg);
			}
		}
		showPhoto.appendChild(photoDisplay04[i]);
	}

}
function showach(m){
	what=m;
	var showMes=document.getElementsByClassName("showMes");
	for(var j=0;j<showMes.length;j++){
		if(j==m) showMes[j].style.backgroundColor="orangered";
		else showMes[j].style.backgroundColor=" #F0E68C";
	}
	showSelf.style.display="none";
	showStory.style.display="none";
	showPhoto.style.display="none";
	showAch.style.display="block";
	
//	alert(awardImg.length);
	for(var n=0;n<awardImg.length;n++){
		if(who==n){
			//如果awardImg、awardIntro块元素下面有超过一张的图片
			if(awardImg[n].childNodes.length>1){
				awardImg[n].style.width="500px";
				awardImg[n].style.height="400px";
				awardImg[n].style.overflow="scroll";
				awardImg[n].style.display="block";
				awardIntro[n].style.display="block";
			}
			else{
				awardImg[n].style.display="block";
				awardIntro[n].style.display="block";
			}
		}
		else{
			awardImg[n].style.display="none";
			awardIntro[n].style.display="none";
		}
	}
}
function showWho(i){
	who=i;
	
	for(var j=0;j<showName.length;j++){
		if(j==i) showName[j].style.backgroundColor="#7CFC00";
		else showName[j].style.backgroundColor=" #F0E68C";
	}
	if(what==0) window.onload=showself(what);
	else if(what==1) window.onload=showstory(what);
	else if(what==2) window.onload=showphoto(what);
	else if(what==3) window.onload=showach(what);
}

function showself(m){
	what=m;
	for(var j=0;j<showMes.length;j++){
		if(j==m) showMes[j].style.backgroundColor="orangered";
		else showMes[j].style.backgroundColor=" #F0E68C";
	}
	showSelf.style.display="block";
	showStory.style.display="none";
	showPhoto.style.display="none";
	showAch.style.display="none";
	
	imgSelf.src=showperson[who].selfImg;
	var hrefSelf=document.getElementById("hrefSelf");
	hrefSelf.href=showperson[who].selfHref;
}
function showstory(m){
	what=m;
	var showMes=document.getElementsByClassName("showMes");
	for(var j=0;j<showMes.length;j++){
		if(j==m) showMes[j].style.backgroundColor="orangered";
		else showMes[j].style.backgroundColor=" #F0E68C";
	}
	showSelf.style.display="none";
	showStory.style.display="block";
	showPhoto.style.display="none";
	showAch.style.display="none";
	for(var n=0;n<selectArticle.length;n++){
		if(who==n) selectArticle[n].style.display="block";
		else  selectArticle[n].style.display="none";
	}
	var articleIframe=document.getElementById("articleIframe");
//	articleIframe.src=encodeURIComponent(selectArticle[who].value);
	articleIframe.src=selectArticle[who].value;
}
function goToThis(){
	var articleIframe=document.getElementById("articleIframe");
//	articleIframe.src=encodeURIComponent(selectArticle[who].value);
	articleIframe.src=selectArticle[who].value;
}
function showphoto(m){
	what=m;
	var showMes=document.getElementsByClassName("showMes");
	for(var j=0;j<showMes.length;j++){
		if(j==m) showMes[j].style.backgroundColor="orangered";
		else showMes[j].style.backgroundColor=" #F0E68C";
	}
	showSelf.style.display="none";
	showStory.style.display="none";
	showPhoto.style.display="block";
	showAch.style.display="none";
	
	for(var i=0;i<photoDisplay.length;i++)
	{	
		window.onload=watch(ph);
	}
}
function photoButton(){
	var relax=document.getElementsByClassName("relax")[0];
	var study=document.getElementsByClassName("study")[0];
	var sport=document.getElementsByClassName("sport")[0];
	var gloup=document.getElementsByClassName("gloup")[0];
	if(ph==1){
		relax.style.backgroundColor="purple";
		relax.style.color="white";
		study.style.backgroundColor="Aquamarine";
		study.style.color="black";
		sport.style.backgroundColor="Aquamarine";
		sport.style.color="black";
		gloup.style.backgroundColor="Aquamarine";
		gloup.style.color="black";
	}
	else if(ph==2){
		study.style.backgroundColor="purple";
		study.style.color="white";
		relax.style.backgroundColor="Aquamarine";
		relax.style.color="black";
		sport.style.backgroundColor="Aquamarine";
		sport.style.color="black";
		gloup.style.backgroundColor="Aquamarine";
		gloup.style.color="black";
	}
	else if(ph==3){
		sport.style.backgroundColor="purple";
		sport.style.color="white";
		study.style.backgroundColor="Aquamarine";
		study.style.color="black";
		relax.style.backgroundColor="Aquamarine";
		relax.style.color="black";
		gloup.style.backgroundColor="Aquamarine";
		gloup.style.color="black";
	}
	else if(ph==4){
		gloup.style.backgroundColor="purple";
		gloup.style.color="white";
		study.style.backgroundColor="Aquamarine";
		study.style.color="black";
		sport.style.backgroundColor="Aquamarine";
		sport.style.color="black";
		relax.style.backgroundColor="Aquamarine";
		relax.style.color="black";
	}
}
function watch(flag){
	if(flag==1){
		ph=flag;
		photoButton();
		for(var i=0;i<photoDisplay.length;i++)
		{	
		photoDisplay02[i].style.display="none";
		photoDisplay03[i].style.display="none";
		photoDisplay04[i].style.display="none";
		if(i==who) photoDisplay[i].style.display="block";
		else photoDisplay[i].style.display="none";
		}
	}
	else if(flag==2){
		ph=flag;
		photoButton();
		for(var i=0;i<photoDisplay.length;i++)
		{	
		photoDisplay[i].style.display="none";
		photoDisplay02[i].style.display="none";
		photoDisplay04[i].style.display="none";
		if(i==who) photoDisplay03[i].style.display="block";
		else photoDisplay03[i].style.display="none";
		}
	}
	else if(flag==3){
		ph=flag;
		photoButton();
		for(var i=0;i<photoDisplay.length;i++)
		{	
		photoDisplay[i].style.display="none";
		photoDisplay03[i].style.display="none";
		photoDisplay04[i].style.display="none";
		if(i==who) photoDisplay02[i].style.display="block";
		else photoDisplay02[i].style.display="none";
		}
	}
	else if(flag==4){
		ph=flag;
		photoButton();
		for(var i=0;i<photoDisplay.length;i++)
		{
		photoDisplay[i].style.display="none";
		photoDisplay02[i].style.display="none";
		photoDisplay03[i].style.display="none";
		if(i==who) photoDisplay04[i].style.display="block";
		else photoDisplay04[i].style.display="none";
		}
	}
}



/***********************************************************/
/*************************活动图片****************************/
var middlePattenid;
var Images0,Images1,Images2,Images3,Images4;
var allImages=new Array();
var index=0;
var inde=0;
var introduction;
var paragraph=new Array();
var activityTitle;
var title=new Array();
if(document.getElementById("middlePattenid")!=null){
	middlePattenid=document.getElementById("middlePattenid");
	Images0=document.getElementById("aImages0");
	Images1=document.getElementById("aImages1");
	Images2=document.getElementById("aImages2");
	Images3=document.getElementById("aImages3");
	Images4=document.getElementById("aImages4");
	Images0.style.backgroundColor="purple";
	Images1.style.backgroundColor="#7FFFD4";
	Images2.style.backgroundColor="#7FFFD4";
	Images3.style.backgroundColor="#7FFFD4";
	Images4.style.backgroundColor="#7FFFD4";
	
	allImages[0]=["url('img/activity01.jpg')","url('img/activity02.jpg')","url('img/activity03.jpg')","url('img/activity04.jpg')","url('img/activity05.jpg')"];
	allImages[1]=["url('img/activity06.jpg')","url('img/activity07.jpg')","url('img/activity08.jpg')","url('img/activity09.jpg')","url('img/activity10.jpg')"];
	allImages[2]=["url('img/activity11.jpg')","url('img/activity12.jpg')","url('img/activity13.jpg')","url('img/activity14.jpg')","url('img/activity15.jpg')"];
	middlePattenid.style.backgroundImage=allImages[inde][index];
	
	activityTitle=document.getElementById("activityTitle");
	title[0]="复仇者联盟";
	title[1]="加勒比海盗风云";
	title[2]="速度与激情写真";
	activityTitle.innerHTML=title[inde];
	
	summary=document.getElementById("summary");
	paragraph[0]="路上只我一个人，背着手踱⑶着。这一片天地好像是我的；我也像超出了平常的自己，到了另一个世界里。我爱热闹，也爱冷静；爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现 在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。";
	paragraph[1]="曲曲折折的荷塘上面，弥望⑷的是田田⑸的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜⑹地开着的，有羞涩地打着朵儿的；正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。叶子底下是脉脉⑺的流水，遮住了，不能见一些颜色；而叶子却更见风致⑻了。";
	paragraph[2]="月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。虽然是满月，天上却有一层淡淡的云，所以不能朗照；但我以为这恰是到了好处——酣眠固不可少，小睡也别有风味的。月光是隔了树照过来的，高处丛生的灌木，落下参差的斑驳的黑影，峭楞楞如鬼一般；弯弯的杨柳的稀疏的倩影，却又像是画在荷叶上。塘中的月色并不均匀；但光与影有着和谐的旋律，如梵婀玲⑼上奏着的名曲。";
	summary.innerHTML=paragraph[inde];
}
function nextButton(){
	inde++;
	index=0;
	if(inde==allImages.length){
		inde--;
		alert("已经是最后一个活动啦！")
	}
	else{
		middlePattenid.style.backgroundImage=allImages[inde][index];
		Images0.style.backgroundColor="purple";
		Images1.style.backgroundColor="#7FFFD4";
		Images2.style.backgroundColor="#7FFFD4";
		Images3.style.backgroundColor="#7FFFD4";
		Images4.style.backgroundColor="#7FFFD4";
		activityTitle.innerHTML=title[inde];
		summary.innerHTML=paragraph[inde];
	}
}
function forwardButton(){
	inde--;
	index=0;
	if(inde==-1){
		inde++;
		alert("已经是第一个活动啦！")
	}
	else{
		middlePattenid.style.backgroundImage=allImages[inde][index];
		Images0.style.backgroundColor="purple";
		Images1.style.backgroundColor="#7FFFD4";
		Images2.style.backgroundColor="#7FFFD4";
		Images3.style.backgroundColor="#7FFFD4";
		Images4.style.backgroundColor="#7FFFD4";
		activityTitle.innerHTML=title[inde];
		summary.innerHTML=paragraph[inde];
	}
}
function Touch0(){
	index=0;
	middlePattenid.style.backgroundImage=allImages[inde][index];
	Images0.style.backgroundColor="purple";
	Images1.style.backgroundColor="#7FFFD4";
	Images2.style.backgroundColor="#7FFFD4";
	Images3.style.backgroundColor="#7FFFD4";
	Images4.style.backgroundColor="#7FFFD4";
}
function Touch1(){
	index=1;
	middlePattenid.style.backgroundImage=allImages[inde][index];
	Images1.style.backgroundColor="purple";
	Images0.style.backgroundColor="#7FFFD4";
	Images2.style.backgroundColor="#7FFFD4";
	Images3.style.backgroundColor="#7FFFD4";
	Images4.style.backgroundColor="#7FFFD4";
}
function Touch2(){
	index=2;
	middlePattenid.style.backgroundImage=allImages[inde][index];
	Images2.style.backgroundColor="purple";
	Images1.style.backgroundColor="#7FFFD4";
	Images0.style.backgroundColor="#7FFFD4";
	Images3.style.backgroundColor="#7FFFD4";
	Images4.style.backgroundColor="#7FFFD4";
}
function Touch3(){
	index=3;
	middlePattenid.style.backgroundImage=allImages[inde][index];
	Images3.style.backgroundColor="purple";
	Images1.style.backgroundColor="#7FFFD4";
	Images2.style.backgroundColor="#7FFFD4";
	Images0.style.backgroundColor="#7FFFD4";
	Images4.style.backgroundColor="#7FFFD4";
}
function Touch4(){
	index=4;
	middlePattenid.style.backgroundImage=allImages[inde][index];
	Images4.style.backgroundColor="purple";
	Images1.style.backgroundColor="#7FFFD4";
	Images2.style.backgroundColor="#7FFFD4";
	Images3.style.backgroundColor="#7FFFD4";
	Images0.style.backgroundColor="#7FFFD4";
}
/*************************世界贡献*****************************/
var option=0;								//记住是第contribution的哪个栏
var contribution;
var con=new Array();
var conUl=new Array();
var pIntroduction=new Array();
var pNotes=new Array();
con[0]=new Object();
	con[0].cImages=["img/con101.jpg","img/con102.jpg","img/con103.jpg"];
	con[0].cMember=["李文文","冯明明","曹辉辉"];
	con[0].cIntroduction="就这么伟大的一件事，所有人的深刻无比";
	con[0].cNotes="http://www.baidu.com/";
con[1]=new Object();
	con[1].cImages=["img/con201.jpg","img/con202.jpg","img/con203.jpg"];
	con[1].cMember=["贾浩浩","朱敏敏","曹辉辉"];
	con[1].cIntroduction="觉得这世界是多么的黑暗";
	con[1].cNotes="http://www.baidu.com/";
con[2]=new Object();
	con[2].cImages=["img/con301.jpg","img/con302.jpg","img/con303.jpg"];
	con[2].cMember=["李文文","王哲哲","冯明明"];
	con[2].cIntroduction="那一天的夜里深深地失眠了";
	con[2].cNotes="http://www.baidu.com/";
con[3]=new Object();
	con[3].cImages=["img/con401.jpg","img/con402.jpg","img/con403.jpg"];
	con[3].cMember=["贾浩浩","朱敏敏","王哲哲"];
	con[3].cIntroduction="有一刹那时间都停止了";
	con[3].cNotes="http://www.baidu.com/";
if((contribution=document.getElementById("contribution"))!=null){
	moveImg(0);
	
}
function moveImg(flag){
	var nav1=document.getElementById("nav1");
	var nav2=document.getElementById("nav2");
	var nav3=document.getElementById("nav3");
	if(flag==0){
		Opcity1();
	}
	else if(flag==1){
		Opcity2();
	}
	else if(flag==2){
		Opcity3();
	}
	else if(flag==3){
		Opcity4();
	}
	nav1.src=con[flag].cImages[0];
	nav2.src=con[flag].cImages[1];
	nav3.src=con[flag].cImages[2];
	var navDisplay=document.getElementById("navDisplay");
	navDisplay.src=con[flag].cImages[0];
	
	var conM=document.getElementById("conM");
	var memberMessage=document.getElementById("memberMessage");
	var introMessage=document.getElementById("introMessage");
	var notesMessage=document.getElementById("notesMessage");
	if(!conUl[flag]){
		conUl[flag]=document.createElement('ul');
		var conLi=new Array();
		
		for(var i=0;i<con[flag].cMember.length;i++){
			conLi[i]=document.createElement("li");
			conLi[i].innerHTML=con[flag].cMember[i];
			conLi[i].style.color="gold";
			conLi[i].style.fontSize="18px";
			conLi[i].style.listStyle="square";
			conLi[i].style.marginLeft="10px";
			conUl[flag].appendChild(conLi[i]);
			memberMessage.innerHTML=conUl[flag].innerHTML;
			
		}
		pIntroduction[flag]=document.createElement("p");
		pIntroduction[flag].innerHTML=con[flag].cIntroduction;
		introMessage.innerHTML=pIntroduction[flag].innerHTML;
		pNotes[flag]=document.createElement("p");
		pNotes[flag].innerHTML=con[flag].cNotes;
		pIntroduction[flag].innerHTML=con[flag].cIntroduction;
		notesMessage.innerHTML=pNotes[flag].innerHTML;
	}
	else { 
		memberMessage.innerHTML=conUl[flag].innerHTML;
		introMessage.innerHTML=pIntroduction[flag].innerHTML;
		notesMessage.innerHTML=pNotes[flag].innerHTML;
	}
	option=flag;
}
function displayImage(i){
	navDisplay.src=con[option].cImages[i];
}
function Opcity1(){
	var linkAchor1=document.getElementById("linkAchor1");
	var linkAchor2=document.getElementById("linkAchor2");
	var linkAchor3=document.getElementById("linkAchor3");
	var linkAchor4=document.getElementById("linkAchor4");
	var imageAnchor1=document.getElementById("imageAnchor1");
	var imageAnchor2=document.getElementById("imageAnchor2");
	var imageAnchor3=document.getElementById("imageAnchor3");
	linkAchor1.style.opacity=1;
	linkAchor2.style.opacity=0.8;
	linkAchor3.style.opacity=0.8;
	linkAchor4.style.opacity=0.8;
}
function Opcity2(){
	var linkAchor1=document.getElementById("linkAchor1");
	var linkAchor2=document.getElementById("linkAchor2");
	var linkAchor3=document.getElementById("linkAchor3");
	var linkAchor4=document.getElementById("linkAchor4");
	var imageAnchor1=document.getElementById("imageAnchor1");
	var imageAnchor2=document.getElementById("imageAnchor2");
	var imageAnchor3=document.getElementById("imageAnchor3");
	linkAchor1.style.opacity=0.8;
	linkAchor2.style.opacity=1;
	linkAchor3.style.opacity=0.8;
	linkAchor4.style.opacity=0.8;
}

function Opcity3(){
	var linkAchor1=document.getElementById("linkAchor1");
	var linkAchor2=document.getElementById("linkAchor2");
	var linkAchor3=document.getElementById("linkAchor3");
	var linkAchor4=document.getElementById("linkAchor4");
	var imageAnchor1=document.getElementById("imageAnchor1");
	var imageAnchor2=document.getElementById("imageAnchor2");
	var imageAnchor3=document.getElementById("imageAnchor3");
	linkAchor1.style.opacity=0.8;
	linkAchor2.style.opacity=0.8;
	linkAchor3.style.opacity=1;
	linkAchor4.style.opacity=0.8;
}
function Opcity4(){
	var linkAchor1=document.getElementById("linkAchor1");
	var linkAchor2=document.getElementById("linkAchor2");
	var linkAchor3=document.getElementById("linkAchor3");
	var linkAchor4=document.getElementById("linkAchor4");
	var imageAnchor1=document.getElementById("imageAnchor1");
	var imageAnchor2=document.getElementById("imageAnchor2");
	var imageAnchor3=document.getElementById("imageAnchor3");
	linkAchor1.style.opacity=0.8;
	linkAchor2.style.opacity=0.8;
	linkAchor3.style.opacity=0.8;
	linkAchor4.style.opacity=1;
//	imageAnchor1.style.opacity=1;
//	imageAnchor2.style.opacity=0.8;
//	imageAnchor3.style.opacity=0.8;
}
/*************************得奖情况*****************************/
if(document.getElementById("award")!=null){
	var awardImgs=["img/award01.jpg","img/award02.jpg","img/award03.jpg","img/award04.jpg","img/award05.jpg","img/award06.jpg","img/award07.jpg","img/award08.jpg","img/award09.jpg","img/award10.jpg","img/award11.jpg","img/award12.jpg","img/award13.jpg","img/award14.jpg","img/award15.jpg","img/award16.jpg"];
	var awardDiv=document.getElementsByClassName("awardDiv")[0];
//	alert(awardDiv);
	for(var i=0;i<awardImgs.length;i++){
		var awardImg=document.createElement("img");
		awardImg.className="awardImg";
		awardImg.src=awardImgs[i];
		awardDiv.appendChild(awardImg);
	}
	var enlargeImg=document.getElementsByClassName("awardImg");
	//选中图片以放大
	for(var i=0;i<enlargeImg.length;i++){
		enlargeImg[i].index=i;//标记索引号
		enlargeImg[i].onclick=function(){	
//			alert(this.index+1);
			var enlargeDiv=document.createElement('div');
			enlargeDiv.className="enlargeDiv";
			var largeImg=document.createElement("img");
			largeImg.style.margin="0px";
			largeImg.style.width="100%";
			largeImg.style.height="100%";
			var path=enlargeImg[this.index].src;
			largeImg.src=path.substring(path.indexOf('img'),path.length);
			enlargeDiv.appendChild(largeImg);
			awardDiv.appendChild(enlargeDiv);
		}
		enlargeImg[i].onmouseout=function(){
			if(document.getElementsByClassName("enlargeDiv")[0]!=null){
				awardDiv.removeChild(document.getElementsByClassName("enlargeDiv")[0]);
			}
		}
	}
}
/*************************底部*****************************/
//关于作者
function about(){
	alert("开发人员正在紧张的开发当中...");
}
//最近更新
function update(){
	alert("上一次更新时间为：2017年7月14日");	
}
//赞助作者
var main=document.getElementsByClassName("main")[0];
if(document.getElementsByClassName("qrCodeDiv").length==0){	
	var qrCodeDiv=document.createElement("div");
	
	var closeQrCode=document.createElement("input");
	closeQrCode.className="closeQrCode";
	closeQrCode.type="button";
	closeQrCode.value="X";
	qrCodeDiv.appendChild(closeQrCode);
	
	var remind=document.createElement("div");
	remind.innerHTML="<p>"+"请用"+"<font>"+"支付宝"+"</font>"+"扫一扫下图二维码"+"</br>"+"感谢您的丰厚的打赏,好人一生平安!"+"</p>";
	qrCodeDiv.appendChild(remind);
	qrCodeDiv.className="qrCodeDiv";
	qrCodeDiv.style.display="none";
	
	var qrCode=document.createElement("img");
	qrCode.src="img/qrCode.jpg";
	qrCodeDiv.appendChild(qrCode);
	main.appendChild(qrCodeDiv);
}
document.getElementsByClassName("closeQrCode")[0].onclick=function(){
		qrCodeDiv.style.display="none";
}
function sponsor(){
	qrCodeDiv.style.display="block";
}
//留言我们
function leave(){
	var leaveDiv=document.getElementsByClassName("leaveDiv")[0];
	leaveDiv.style.display="block"
	var closeLeaveDiv=document.getElementById('closeLeaveDiv');
	var bug=document.getElementById("bug");
	bug.style.backgroundColor="purple";
	var comunity=document.getElementById("comunity");
	var Bugfeedback=document.getElementsByClassName("Bugfeedback")[0];
	var Community=document.getElementsByClassName("Community")[0];
	bug.onclick=function(){
		bug.style.backgroundColor="purple";
		comunity.style.backgroundColor="black";
		Bugfeedback.style.display="block";
		Community.style.display="none";
	}
	comunity.onclick=function(){
		comunity.style.backgroundColor="purple";
		bug.style.backgroundColor="black";
		Bugfeedback.style.display="none";
		Community.style.display="block";
		var statement=document.getElementsByClassName('statement')[0];
		var host=document.getElementsByClassName("host");
		var textarea2=document.getElementsByClassName("textarea2")[0];
		var You=document.getElementById("You");
//		alert(host.length);
		You.innerHTML=host.length+1+"楼";
		var submitInput2=document.getElementsByClassName("submitInput2")[0];
		submitInput2.onclick=function (){
			if(textarea2.value!=""){
			var yourHost=document.createElement("h4");
			yourHost.className="host";
			yourHost.innerHTML=You.innerHTML+"：";
			statement.appendChild(yourHost);
			var yourSpeech=document.createElement("p");
			yourSpeech.className="speech";
			yourSpeech.innerHTML=textarea2.value;
			statement.appendChild(yourSpeech);
			}
			else{
				alert("内容不能为空！");
			}
		}
	}
	//关闭留言栏
	closeLeaveDiv.onclick=function(){
		leaveDiv.style.display="none";
		
	}
}
//底部时间
var date=new Date();
var dateTime=document.getElementById("date");
function getTime(){
	var date=new Date();
	var year=date.getYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	dateTime.innerHTML=1900+year+"/"+month+"/"+day+" "+hours+":"+minutes+":"+seconds;
}
setInterval(getTime,1000);
