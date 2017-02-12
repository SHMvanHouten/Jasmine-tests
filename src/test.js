function DaysTillChristmas(){
    this.getNumberOfDays = function getNumberOfDays(day, month){
        if(day == 25 && month == 12){
            return "It is Christmas Today!";
        }
        else{
            return "Christmas is 1 day away";
        }
    };
};