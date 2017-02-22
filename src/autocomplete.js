function Autocomplete(input, dictionary){
    var matches = [];
    var input = input.replace(/[^A-Za-z]/g, "");
    this.getMatches = function(){
        dictionary.forEach(function(element){
            if (element.indexOf(input)> -1){matches.push(element)}
        });
        return matches;
    };
};