let two_sum = function(list, k) {
    for(var i = 0; i < list.length; i++) {
        for(var j =0; j < list.length; j++) {
            if(i != j && list[i] + list[j] === k) {
                return true;
            } 
        }
    }
    return false;
}