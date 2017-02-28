function BouncingBall(height, bounce, windowHeight){
    this.testForBadInput = function(){
        (height<=0 || bounce<=0 || bounce>= 1 || window >= height)
    };
    this.getResult = function(){
        if(this.testForBadInput){
        return -1
        }
        return this.calculateAppearances();
    };
    this.calculateAppearances = function(){
        var appearanceCounter = -1;
        while(height > windowHeight){
            height *= bounce;
            appearanceCounter += 2;
        };
        return appearanceCounter;
    };
};