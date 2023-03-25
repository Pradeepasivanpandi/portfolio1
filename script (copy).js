// function manualclick(){
//     ManualTestcase.style.display="none";

// }


let arr=[
    {
        'role':'Manual Testcase',
        'img':'cars24.png',
        'link':'https://sheet.zoho.com/sheet/open/rbu58fa3c96c48e5e4e76b14003510efc7931?sheetid=0&range=A1',
         'img':'maxi.png'
          
    },
     {
        'role':'Manual Testcase',
        'img':'zomoto.png',
        'link':'https://sheet.zoho.com/sheet/open/41t39fe279f8572004393b1f3a65ad306e569?sheetid=0&range=A1'
        // 'img':'maxi(copy).png'
          
    }, 
    {
        'role':'Manual Testcase',
        'img':'meesho.png',
        'link':'https://sheet.zoho.com/sheet/open/5hjisc69fa10a89ad42bfafc36e1161e923ac?sheetid=0&range=A1'
        // 'img':'maxi(anothrecopy).png'
        
    }
]
  
  let arr2=[  {
        'role':'Selenium IDE',
        'img':'hyundai.png',
        'link':'https://workdrive.zoho.com/file/sfmkw2028a22f1d364bb082daa6b359c1a43a'
        // 'img':'maxi(3rdcopy).png'
    },
     {
        'role':'Selenium IDE',
        'img':'ice.png',
        'link':'https://workdrive.zoho.com/file/2sjpg99f1d9a7c8e24e6aad223390e219a984'
        // 'img':'maxi(4thcopy).png'
    }, 
    {
        'role':'Selenium IDE',
        'img':'tpv.png',
        'link':'https://workdrive.zoho.com/file/0nd9k85ab64f17b6345f69e211ff584f8e4d6'
        // 'img':'maxi(5thcopy).png'
    }
]
   

 let arr3=[   {
        'role':'Selenium Webdriver',
        'img':'insta.png',
        'link':'https://workdrive.zoho.com/file/0nd9kd0bab9cc1298418f8c89637559c81eaf'
        // 'img':'maxi(6thcopy).png'
    },
     {
        'role':'Selenium Webdriver',
        'img':'meesho.png',
        'link':'https://workdrive.zoho.com/file/e222a12628840bafb4230a4de450fe888797e'
        // 'img':'maxi(7thcopy).png'
    }, 
    {
        'role':'Selenium Webdriver',
        'img':'tele.png',
        'link':'https://workdrive.zoho.com/file/sfmkw9fc5e1e4a1974b268fbb96118abef700'
        // 'img':'maxi(8thcopy).png'
    }]
  let arr4=[

    {
        'role':'TestNG',
        'img':'vault.png',
        'link':'https://workdrive.zoho.com/file/ah1hvecf821fd796b4b9fb217356251dd5c18'
        // 'img':'maxi(9thcopy).png'
    },
     {
        'role':'TestNG',
        'img':'kawaiiwish.png',
        'link':'https://workdrive.zoho.com/file/0nd9k0b0850ffcd2c4f03a780e6e7b6459d16'
        // 'img':'maxi(10thcopy).png'
    }, 
    {
        'role':'TestNG',
        'img':'code.png',
        'link':'https://one.zoho.com/zohoone/zohocorp/home/cxapp/workdrive/home/6oq3d00e1e07d58c64077b4f1c1f28da4a777/privatespace/sharedwithme/52664459/rynsd50ccf4f3e4c541fabf12bb171ab9b5ea?frameorigin=https%3A%2F%2Fone.zoho.com'
        // 'img':'maxi(11thcopy).png'
    }

]




function filter(e){
    $(e).addClass('querySelect').siblings().removeClass('querySelect')
  let query=e.innerText;
  let queryArray=[]
  if(e.innerText=='Manual Testcase'){
          queryArray=arr
  }else{
    if(e.innerText=='Selenium IDE'){
        queryArray=arr2
    }else{
        if(e.innerText=='Selenium Webdriver'){
            queryArray=arr3
        }else{
           queryArray=arr4;
        }
    }

  } 
console.log(queryArray)
    console.log(e.innerText)
    let parent=document.querySelectorAll('.thumbnail')
    
    for(let i=0;i<parent.length;i++){
   let link=parent[i].childNodes[1].childNodes[1];
   console.log(link)
       parent[i].style.backgroundImage=`url(${queryArray[i].img})`
        link.href=queryArray[i].link
    }
}


let arr5=[

    {
        'role':'HTML CSS',
        'img':'suite.png',
        'link':'https://suite-landing-page.pradeepas2.repl.co/'
        // 'img':'maxi(12thcopy).png'
          
    },
     {
        'role':'HTML CSS',
        'img':'space.png',
        'link':'https://space-tourism.pradeepas2.repl.co/'
        // 'img':'maxi(13thcopy).png'
          
    }, 
    {
        'role':'HTML CSS',
        'img':'skill.png',
        'link':'https://skilled-e-learning-landing-page.pradeepas2.repl.co/'
        // 'img':'maxi(14thcopy).png'
          
    }

]

let arr6=[

    {
        'role':'JavaScript',
        'img':'word.png',
        'link':'https://word-scramble-final.pradeepas2.repl.co/'
        // 'img':'maxi(15thcopy).png'
          
    },
     {
        'role':'JavaScript',
        'img':'tip.png',
        'link':'https://tip-calculator-js-4.pradeepas2.repl.co/'
        // 'img':'maxi(16thcopy).png'
          
    }, 
    {
        'role':'JavaScript',
        'img':'todo.png',
        'link':'https://todo-list.pradeepas2.repl.co/'
        // 'img':'maxi(17thcopy).png'
          
    }

]

let arr7=[

    {
        'role':'Scratch',
        'img':'date.png',
        'link':'https://scratch.mit.edu/projects/718125015/fullscreen/'
        // 'img':'maxi(18thcopy).png'
        
          
    },
     {
        'role':'Scratch',
        'img':'guess.png',
        'link':'https://scratch.mit.edu/projects/716610620/fullscreen/'
        // 'img':'maxi(19thcopy).png'
    }, 
    {
        'role':'Scratch',
        'img':'fasion.png',
        'link':'https://scratch.mit.edu/projects/722200579/fullscreen/'
        // 'img':'maxi(20thcopy).png'
    }

]



// function filter2(e){
//     let query=e.innerText;
//     let queryArray=[]
//     if(e.innerText=='HTML CSS'){
//             queryArray=arr5
//     }else{

//       queryArray=arr6
     
//     }
  
    
//       let parent=document.querySelectorAll('.thumbnail2')
      
//       for(let i=0;i<parent.length;i++){
//         let link=parent[i].childNodes[1]
//          parent[i].style.backgroundImage=`url(${queryArray[i].img})`
//          link.href=queryArray[i].link;
//       }
//   }
  
function filter2(e){

    $(e).addClass('selectFIll').siblings().removeClass('selectFIll')

    let query=e.innerText;
    let queryArray=[]
    if(e.innerText=='HTML CSS'){
            queryArray=arr5
    }else{
      if(e.innerText=='JavaScript'){
          queryArray=arr6
      }else{
          if(e.innerText=='Scratch'){
              queryArray=arr7
          }else{
             queryArray=arr7;
          }
      }
  
    } 
  console.log(queryArray)
      console.log(e.innerText)
      let parent=document.querySelectorAll('.thumbnail2')
      
      for(let i=0;i<parent.length;i++){
     let link=parent[i].childNodes[1].childNodes[1];
     console.log(link)

         parent[i].style.backgroundImage=`url(${queryArray[i].img})`
          link.href=queryArray[i].link
      }
  }
  

//   jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},6000);
// 	});
// });

// jQuery('.Count').each(function () {
//   var $this = $(this);
//   jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//     duration: 6000,
//     easing: 'swing',
//     step: function () {
//       $this.text(Math.ceil(this.Counter));
//     }
//   });
// });


function change(ans){
    // console.log(ans.childNodes[1].style.display="none");
    
  }
  function changes(ans){
    // console.log(ans.childNodes[1].style.display="block");
    
  }








