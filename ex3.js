function returns_duplicates(magicalarray)
{
    duplicate_array = [];
    for (index = 0; index < magicalarray.length; index ++)
    {
        //compare to index 1, 2, 3 .... array.length -1
        for (next_index = index + 1; next_index < magicalarray.length; next_index ++)
        {
            if (magicalarray[index] === magicalarray[next_index] && !(contains(duplicate_array, magicalarray[index])))
            {
                duplicate_array.push(magicalarray[index]);

            }
        }
    }
    return duplicate_array;
}

function contains(arraymisc, thingtomatch) {
    var i = arraymisc.length;
    while (i--) {
       if (arraymisc[i] === thingtomatch) {
           return true;
       }
    }
    return false;
}



var votesToGoEatCake = [true, true, true, true];
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44", "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", "33", "999", "9"];
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];
    
console.log(returns_duplicates(classroomIds));