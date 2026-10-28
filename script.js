(function(){
    const envelopeScreen = document.getElementById("envelopeScreen");
    const openInvitation = document.getElementById("openInvitation");
    const invitation = document.getElementById("invitation");
    const backToTop = document.getElementById("backToTop");

    openInvitation.addEventListener("click", ()=>{
        envelopeScreen.classList.add("opening");
        setTimeout(()=>{
            envelopeScreen.classList.add("hide");
            invitation.classList.remove("hidden");
            invitation.classList.add("show");
        },1400);
    });

    backToTop.addEventListener("click", ()=>{
        invitation.classList.remove("show");
        invitation.classList.add("hidden");

        envelopeScreen.classList.remove("hide");
        envelopeScreen.classList.remove("opening");

    window.scrollTo({
        top:0,
        behavior: "smooth"
    });

    });

    const weddingDate = new Date(2027, 1, 20, 10, 0, 0).getTime();
    const weddingMessage = document.getElementById("weddingMessage");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    function updateCountdown(){
        const now = new Date().getTime();
        const difference = weddingDate - now;
        

        if(difference <= 0){
            daysElement.textContent = "000";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            weddingMessage.classList.remove("hidden");

            clearInterval(countdownTimer);

            return;
        }

        const days = Math.floor(difference/(1000*60*60*24)
        );
        const hours = Math.floor((difference/(1000*60*60))% 24
        );
        const minutes = Math.floor((difference/(1000*60))% 60
        );
        const seconds = Math.floor((difference/1000)% 60
        );

        daysElement.textContent = String(days).padStart(3, "0");

        hoursElement.textContent = String(hours).padStart(2, "0");

        minutesElement.textContent = String(minutes).padStart(2, "0");

        secondsElement.textContent = String(seconds).padStart(2, "0");

    };
    updateCountdown();

     if (weddingDate > Date.now()) {
        countdownTimer = setInterval(updateCountdown, 1000);
    };

})();