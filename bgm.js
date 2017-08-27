/*******************************body*********************************/
var bgmBody=document.getElementsByClassName("bgmBody")[0];
//var windowWidth=window.innerWidth;
/*******************************音乐播放*********************************/
function audio(){
	var songIndex=0;
        var arr = ["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3"];//把需要播放的歌曲从后往前排
        var myAudio = new Audio();
        myAudio.className="myAudio";
        myAudio.preload = true;
        myAudio.controls = true;
        myAudio.src=arr[songIndex];
//      myAudio.src = arr.pop();//每次读数组最后一个元素
        myAudio.addEventListener('ended', playEndedHandler, false);
        myAudio.play();
        document.getElementById("audioBox").appendChild(myAudio);
        myAudio.loop = false;//禁止循环，否则无法触发ended事件
        var title=document.createElement("p");
        title.id="bgmTitle";
        title.innerHTML="BGM:";
        document.getElementById("audioBox").appendChild(title);
        //默认播放处理
        function playEndedHandler(){
        	songIndex++;
        	if(songIndex==arr.length) songIndex=0;
        	myAudio.src=arr[songIndex];
//          myAudio.src = arr.pop();
            myAudio.play();
            !arr.length && myAudio.removeEventListener('ended',playEndedHandler,false);//只有一个元素时解除绑定  
        }
        myAudio.onmouseover=function(){
        	if(document.getElementById("theAudio")==null){
        		var theAudio=document.createElement("p");
        		theAudio.id="theAudio";
        		theAudio.innerHTML="背景音乐正在播放";
        		document.getElementById("audioBox").appendChild(theAudio);
        	}
        	//播放态事件处理
        	if(document.getElementById("theAudio")!=null){
        		//播放态
        		myAudio.addEventListener("playing", function(){
				document.getElementById("theAudio").innerHTML="背景音乐正在播放";
				});
				//暂停态
				myAudio.addEventListener("pause", function(){
				   document.getElementById("theAudio").innerHTML = "背景音乐播放已暂停";
				})
        	}
        	if(document.getElementById("theAudio")!=null){
        		document.getElementById("theAudio").style.display="none";
        	}
        }
        myAudio.onmouseout=function(){
        	if(document.getElementById("theAudio")!=null){
        		document.getElementById("theAudio").style.display="none";
        	}
        }
        var songButton=document.getElementsByClassName("songButton")[0];
        //点击下一曲
        songButton.onclick=function(){
        	songIndex++;
        	if(songIndex==arr.length) songIndex=0;
        	myAudio.src=arr[songIndex];
        	myAudio.play();
        }
        songButton.onmouseover=function(){
        	if(document.getElementById("remind")==null){
        		var remind=document.createElement("p");
        		remind.id="remind";
        		remind.innerHTML="下一首";
        		document.getElementById("audioBox").appendChild(remind);
        	}
        	if(document.getElementById("remind")!=null){
        		document.getElementById("remind").style.display="none";
        	}
        }
        songButton.onmouseout=function(){
        	if(document.getElementById("remind")!=null){
        		document.getElementById("remind").style.display="none";
        	}
        }
}
window.onload = audio();