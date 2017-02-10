function Loop(){

    this.showCountdown = function(){



        for(var i = 10; i >= 0; i--){
            if(i == 10){
                window.alert("Countdown " + i);
            }
            else if(i == 0){
                window.alert("Blast off!")
            }
            else{
                window.alert(i);
            };
        };

    };
};
Loop.prototype.startCountdown = function(){
    return this.showCountdown();
};