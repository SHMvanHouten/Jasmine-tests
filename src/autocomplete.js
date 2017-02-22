function Autocomplete(input, dictionary){
    var matches = [];
    var input = input.replace(/[^A-Za-z]/g, "").toLowerCase();

    this.getMatches = function(){
        dictionary.forEach(function(element){
            elementReplacement = element.replace(/[^A-Za-z]/g, "").toLowerCase();
            if (elementReplacement.indexOf(input)===0 && matches.length < 5){matches.push(element)}
        });
        return matches;
    };
};

