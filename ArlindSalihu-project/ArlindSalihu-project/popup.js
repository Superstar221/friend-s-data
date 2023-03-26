// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function click() {
  var config={'thumbup': 0, "thumbdown":0, "bulb":0, "question":0, "thought_balloon":0};
  var checkbox = document.getElementsByClassName('emoji');
  var thumbup = document.getElementById('thumbup');
  var thumbdown = document.getElementById('thumbdown');
  var bulb = document.getElementById('bulb');
  var question = document.getElementById('question');
  var thought_balloon = document.getElementById('thought_balloon');
  
  config['thumbup'] = thumbup.checked ? 1 : 0;
   config['thumbdown'] = thumbdown.checked  ? 1 : 0;
   config['bulb'] = bulb.checked  ? 1 : 0;
  config['question'] = question.checked  ? 1 : 0;
   config['thought_balloon'] = thought_balloon.checked  ? 1 : 0;
   localStorage.setItem('checked', JSON.stringify(config));

  chrome.tabs.executeScript(null, {
    code: 'var config = ' +  JSON.stringify(config)
}, function() {
    chrome.tabs.executeScript(null, {file: 'custom.js'});
});
}
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('div');
  var config={'thumbup': 0, "thumbdown":0, "bulb":0, "question":0, "thought_balloon":0};
  var checkbox = document.getElementsByClassName('emoji');
  config = localStorage.getItem('checked') ? JSON.parse(localStorage.getItem('checked')) : config;
  var thumbup = document.getElementById('thumbup');
  var thumbdown = document.getElementById('thumbdown');
  var bulb = document.getElementById('bulb');
  var question = document.getElementById('question');
  var thought_balloon = document.getElementById('thought_balloon');
  if(config['thumbup']) thumbup.checked = true;
  if(config['thumbdown']) thumbdown.checked = true;
  if(config['bulb']) bulb.checked = true;
  if(config['question']) question.checked = true;
  if(config['thought_balloon']) thought_balloon.checked = true;
  
  btn.addEventListener('click', click);
});
