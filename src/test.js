function DaysTillChristmas(){
    this.dayCalculator = function dayCalculator(day, month){
        if(month == 12){
            return "Christmas is "+ (25-day)+ " days away"
        };
    };

    this.getNumberOfDays = function getNumberOfDays(day, month){
        if(day == 25 && month == 12){
            return "It is Christmas Today!";
        }
        else if(day==24 && month == 12){
            return "Christmas is 1 day away";
        }
        else{
            return this.dayCalculator(day, month);
        }
    };
};