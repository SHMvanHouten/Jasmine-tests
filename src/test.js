function DaysTillChristmas(){

    this.monthCalculator = function monthCalculator(day, month){
        var day = day;
        day += ((-(10-month)) * 30);
        return "Christmas is 30 days away";


    };

    this.dayCalculator = function dayCalculator(day, month){
        if(month == 12 && day<25){
            return "Christmas is "+ (25-day)+ " days away";
        }
        else if(month== 12){
            return "Christmas is "+ (365 -(day-25))+ " days away";
        }
        else{
            return this.monthCalculator(day, month);
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