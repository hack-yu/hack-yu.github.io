//const wise_saying_text = document.querySelector("#wise_saying_text");
const wise_saying_text = document.querySelector("#wisesayingtext");
//console.log(wise_saying_text);
const wise_saying = {
    0 : "Computers are the greatest tools humans have ever created. Computers are like bicycles in our minds.\n\n- steve jobs -\n",
    1 : "Life is not fair get. used to it.\n\n- Bill Gates -\n",
    2 : "Make a clear plan and start right away to make your aspirations come true.\nReady or not, put this plan into action.\n\n- Napoleon Hill -\n",
    3 : "A good plan actively executed now is better than a perfect plan for next week.\n\n- Gen. G. Patton -\n",
    4 : "Action plans come with risks and costs. However, this is far smaller than the long-term risks and costs of doing nothing indolently.\n\n- John F. Kennedy -\n",
    5 : "A goal without a plan is just a dream.\n\n- Antoine de Saint Exupery -\n",
    6 : "The great secret in life is that there are no great secrets.\nWhatever your goals are, you can achieve them if you are willing to work hard.\n\n- Oprah Winfrey -\n"

}

function random_wise_saying(){
    wise_saying_text.innerText = wise_saying[Math.floor(Math.random() * 7)];
}

setInterval(random_wise_saying, 4500);