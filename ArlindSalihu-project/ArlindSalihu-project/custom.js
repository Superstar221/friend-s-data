var flag = false;
if(config['thumbup']  || config['thumbdown'] || config['bulb'] || config['question'] || config['thought_balloon'] )
{ 
    var all = document.getElementsByClassName('notes');
    for(var i = 1 ; i < all.length; i ++) {
           all[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";

    }
    if(document.getElementsByClassName('js-comment-form') != null)   document.getElementsByClassName('js-comment-form')[0].style.display = "none";
}
else{
    var all = document.getElementsByClassName('notes');
    for(var i = 1 ; i < all.length; i ++) {
         all[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";

    }
    all = document.getElementsByClassName('note-wrapper system-note');
    for(var i = 1 ; i < all.length; i ++) {
        all[i].style.display = "block";

    }
    all = document.getElementsByClassName('timeline-entry note note-wrapper');
    for(var i = 1 ; i < all.length; i ++) {
        var classN = (all[i].parentElement.children[1] ? all[i].parentElement.children[1].className : "null");
        if(classN != 'gl-display-flex! gl-align-items-center gl-flex-wrap gl-bg-gray-10 gl-py-3 gl-px-5 gl-border-t gl-border-b')  all[i].style.display = "block";
    }
    if(document.getElementsByClassName('js-comment-form') != null)   document.getElementsByClassName('js-comment-form')[0].style.display = "block";

}

//filter with thumbup
if(config['thumbup'] > 0){
     if(config['thumbup'] == 1)
    {
        
        all = document.getElementsByClassName('notes');
 
         for(var i = 1 ; i < all.length; i ++) {
            var emoji = all[i].firstChild.firstChild.children[1].children[1].children[0].children[0].children[0].children[0];
            if(emoji.innerHTML.indexOf('thumbsup') != -1) all[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";

        }
        all = document.getElementsByClassName('note-wrapper system-note');
        for(var i = 1 ; i < all.length; i ++) {
            all[i].style.display = "none";

        }
        all = document.getElementsByClassName('timeline-entry note note-wrapper');
        for(var i = 1 ; i < all.length; i ++) {
            var classN = (all[i].parentElement.children[1] ? all[i].parentElement.children[1].className : "null");
            if(classN != 'gl-display-flex! gl-align-items-center gl-flex-wrap gl-bg-gray-10 gl-py-3 gl-px-5 gl-border-t gl-border-b')  all[i].style.display = "none";
        }
        flag = true;
    }

}
// filter with thumbdown
if(config['thumbdown'] > 0){

    if(config['thumbdown'] == 1)
    {
        
        all = document.getElementsByClassName('notes');
 
         for(var i = 1 ; i < all.length; i ++) {
             var emoji = all[i].firstChild.firstChild.children[1].children[1].children[0].children[0].children[0].children[0];
           if(emoji.innerHTML.indexOf('thumbsdown') != -1) all[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";

        }
        all = document.getElementsByClassName('note-wrapper system-note');
        for(var i = 1 ; i < all.length; i ++) {
            all[i].style.display = "none";

        }
        all = document.getElementsByClassName('timeline-entry note note-wrapper');
        for(var i = 1 ; i < all.length; i ++) {
            var classN = (all[i].parentElement.children[1] ? all[i].parentElement.children[1].className : "null");
            if(classN != 'gl-display-flex! gl-align-items-center gl-flex-wrap gl-bg-gray-10 gl-py-3 gl-px-5 gl-border-t gl-border-b')  all[i].style.display = "none";
        }
        flag = true;
    }
}

 //filter with bulb

if(config['bulb'] > 0){

    if(config['bulb'] == 1)
    {
        all = document.getElementsByClassName('notes');
 
         for(var i = 1 ; i < all.length; i ++) {
             var emoji = all[i].firstChild.firstChild.children[1].children[1].children[0].children[0].children[0].children[0];
            if(emoji.innerHTML.indexOf('bulb') != -1) all[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";

        }
        all = document.getElementsByClassName('note-wrapper system-note');
        for(var i = 1 ; i < all.length; i ++) {
            all[i].style.display = "none";

        }
        all = document.getElementsByClassName('timeline-entry note note-wrapper');
        for(var i = 1 ; i < all.length; i ++) {
            var classN = (all[i].parentElement.children[1] ? all[i].parentElement.children[1].className : "null");
            if(classN != 'gl-display-flex! gl-align-items-center gl-flex-wrap gl-bg-gray-10 gl-py-3 gl-px-5 gl-border-t gl-border-b')  all[i].style.display = "none";
        }
        flag = true;
    }
}

// //filter with question

if(config['question'] > 0){

    if(config['question'] == 1)
    {
        all = document.getElementsByClassName('notes');
 
         for(var i = 1 ; i < all.length; i ++) {
             var emoji = all[i].firstChild.firstChild.children[1].children[1].children[0].children[0].children[0].children[0];
            if(emoji.innerHTML.indexOf('question') != -1) all[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";

        }
        all = document.getElementsByClassName('note-wrapper system-note');
        for(var i = 1 ; i < all.length; i ++) {
            all[i].style.display = "none";

        }
        all = document.getElementsByClassName('timeline-entry note note-wrapper');
        for(var i = 1 ; i < all.length; i ++) {
            var classN = (all[i].parentElement.children[1] ? all[i].parentElement.children[1].className : "null");
            if(classN != 'gl-display-flex! gl-align-items-center gl-flex-wrap gl-bg-gray-10 gl-py-3 gl-px-5 gl-border-t gl-border-b')  all[i].style.display = "none";
        }
        flag = true;
    }
}


// filter with thought_balloon


if(config['thought_balloon'] > 0){

    if(config['thought_balloon'] == 1)
    {
        all = document.getElementsByClassName('notes');
 
         for(var i = 1 ; i < all.length; i ++) {
             var emoji = all[i].firstChild.firstChild.children[1].children[1].children[0].children[0].children[0].children[0];
            if(emoji.innerHTML.indexOf('thought_balloon') != -1){
                all[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "block";
            } 

        }
        all = document.getElementsByClassName('note-wrapper system-note');
        for(var i = 1 ; i < all.length; i ++) {
            all[i].style.display = "none";

        }
        all = document.getElementsByClassName('timeline-entry note note-wrapper');
        for(var i = 1 ; i < all.length; i ++) {
            var classN = (all[i].parentElement.children[1] ? all[i].parentElement.children[1].className : "null");
            if(classN != 'gl-display-flex! gl-align-items-center gl-flex-wrap gl-bg-gray-10 gl-py-3 gl-px-5 gl-border-t gl-border-b')  all[i].style.display = "none";
        }
        flag = true;
    }
}