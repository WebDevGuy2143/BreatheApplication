// assign constant container variable and target the class .container
const container = document.querySelector('.container');

// assign constant text variable and target the id #text
const text = document.querySelector('#text');

// assign constant variable totalTime variable and set it to 7500
const totalTime = 7500; // 7.5 seconds

// assign the constant breatheTime variable and set it to (7500 / 5) * 2 = 3000
const breatheTime = (totalTime / 5) * 2;

// assign the constant holdTime variable and set it to 7500 / 5 = 1500 (1.5 secs)
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation(){
    
    // set the text id and add in the text "Breathe In"
    text.innerHTML = 'Breathe In!';

    // adds the .grow class to the container class
    container.className = 'container grow';

    // wait 3000 miliseconds before initiating 
    setTimeout(() => {

        // set the text id and add in the text 'Hold'
        text.innerHTML = 'Hold!';

        // set the holdTime
        setTimeout(() => {

            // change the text id and add in the text to 'Breathe Out
            text.innerHTML = 'Breathe Out!';

            // Add the .shrink class to the .container class
            container.className = 'container shrink';

        }, holdTime)

    }, breatheTime) // 3000
}

setInterval(breatheAnimation, totalTime);