//importing fromEvent    
import {fromEvent} from 'https://dev.jspm.io/rxjs@6/_esm2015';

//Fetching all the required tags by ID
//Fetching bold button tag
const btnbold=document.getElementById('btnbold');
//Fetching Italic button tag
const btnitalic=document.getElementById('btnitalic');
//Fetching font size tag
const font_size=document.getElementById('font-size');
//Fetching Editable text area div
const textarea=document.getElementById('editable_area_id');
  
/*Using FromEvent from RxJS which takes target and event type as input parameters.FromEvent returns an observable.
We are subscribing this observable after which event handler function will be registered to event target on given event type.*/

//fromEvent on bold button
fromEvent(btnbold,'click').subscribe(()=>boldcontent());
//fromEvent on italics button
fromEvent(btnitalic,'click').subscribe(()=>italiccontent());
//fromEvent on Fontsize dropdown
fromEvent(font_size,'change').subscribe(()=>changefontsize());
//  1.fromEvent on Editable area
//  2.Using mouseup event which is fired when user releases mouse button over an element.    
fromEvent(textarea,'mouseup').subscribe(()=>changetags());

//bold content function
const boldcontent=()=>{
//The execCommand() method executes the specified command for the selected part of an editable section.    
//Making the selected content bold using execCommand
document.execCommand('bold');
//changing button style
btnbold.style.fontWeight="bold"
}

// Italic content function
const italiccontent=()=>{
    //The execCommand() method executes the specified command for the selected part of an editable section
    //Making the selected content italic using execCommnd.
    document.execCommand('italic');
    //changing button style
    btnitalic.style.fontWeight="bold"
        
}

//Fontsize function
let changefontsize=()=>{
    //getting the selected value from dropdown
     let size=font_size.options[font_size.selectedIndex].value;
     //The execCommand() method executes the specified command for the selected part of an editable section
     //Making the selected content of the selected size through execCommand.
     document.execCommand("fontSize", false, size);

}


const changetags=()=>{
    //queryCommandState lets us know if the current selection has a certain Document.execCommand() command applied.
    //It will return boolean value.
    let boldtag=document.queryCommandState("bold");
    let italic=document.queryCommandState("italic");
    //queryCommandValue returns current selection for the given command.
    //It will return an integer
    let fontsize=document.queryCommandValue("fontSize");

    //checking if current selection has bold property applied, if yes,then changing the style of button
    if(boldtag){
        btnbold.style.fontWeight="bold"
    }
    else{
        btnbold.style.fontWeight="normal"
    }
     //checking if current selection has italic property applied, if yes,then changing the style of button
    if(italic){
        btnitalic.style.fontWeight="bold"
    }
    else{
        btnitalic.style.fontWeight="normal" 
    }
    //setting the fontsize of the selected text 
    font_size.value=fontsize;
    }

