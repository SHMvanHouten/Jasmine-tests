function DaysTillChristmas(){

    this.getMonthsAway = function getMonthsAway(month){
        var monthsAway = 0;
            while(month <= 11){
            monthsAway++;
            month++;
        };
        if (monthsAway == 1){
            return 30 * monthsAway;
        }
        else if (monthsAway >= 2){
            return (30 * monthsAway) + 1;
        }

    };

    this.monthCalculator = function monthCalculator(day, month){

        var day = day;
        day = 25 - day;
        day += this.getMonthsAway(month);
        return "Christmas is "+ (day) + " days away";


    };

    this.dayCalculator = function dayCalculator(day, month){
        if(month >= 12 && day<25){
            return "Christmas is "+ (25-day)+ " days away";
        }
        else if(month >= 12){
            return "Christmas is "+ (365 -(day-25))+ " days away";
        }
        else{
            return this.monthCalculator(day, month);
        };
    };

    this.getNumberOfDays = function getNumberOfDays(day, month){
        if(day == 25 && month >= 12){
            return "It is Christmas Today!";
        }
        else if(day==24 && month >= 12){
            return "Christmas is 1 day away";
        }
        else{
            return this.dayCalculator(day, month);
        }
    };
};