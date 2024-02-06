"use strict";
    const styler = document.getElementById('styleSheet'); 
    const stylerButton1 = document.getElementById('styleA');
    const stylerButton2 = document.getElementById('styleB');

    stylerButton1.addEventListener('click', function(event) {
        event.preventDefault();
        styler.href = 'styleA.css';
    });

    stylerButton2.addEventListener('click', function(event) {
        event.preventDefault();
        styler.href = 'styleB.css';
    });