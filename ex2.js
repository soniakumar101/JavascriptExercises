/*def fibonacci_set(max):
    if max > 1:
        fib_list = [1]
        current_fib = 1
        while current_fib < max:
            fib_list.append(current_fib)
            current_fib = fib_list[-1] + fib_list[-2]

        return fib_list
    else:
        return [1, 1]

## Tell me if a number is even
def even(n):
    return n % 2 == 0

print sum(filter(even,fibonacci_set(4000000)))*/

function fibonacci_set(max)
{
    if (max > 1)
    {
        var fib_array = [1];
        var current_fib = 1;
        while (current_fib < max)
        {
            fib_array.push(current_fib);
            current_fib = fib_array[fib_array.length - 1] + fib_array[fib_array.length - 2];
        }
        return fib_array;
    } else
    {
        return [1, 1];
    }
}
function even(n)
{
    return n % 2 === 0;
}

function filter(even, fibonacci_set)
{
    var even_fib_set = [];
    for (var i = 0; i < fibonacci_set.length; i++) //for each number in fibonacci_set BY INDEX
    {
        if (even(fibonacci_set[i]) === true) //if number in fibonacci_set AT INDEX is even
        {
            even_fib_set.push(fibonacci_set[i]); //add number to new_fibonacci_set
        }
     }   
            
    return even_fib_set;
}

function sum(even_list)
{
    var sum_total = 0;
    
    for (var i = 0; i < even_list.length; i++) //for each number in our even_list
    {
        sum_total = sum_total + even_list[i];
    }
    return sum_total;        
}

fibonacci_list = fibonacci_set(4000000);
even_fibonacci_list = filter(even, fibonacci_list);
console.log(sum(even_fibonacci_list)); //for comparison
console.log(sum(filter(even, fibonacci_set(4000000)))); //function calls stacked