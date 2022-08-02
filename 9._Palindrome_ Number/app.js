// 9. Palindrome Number ( EASY )

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) 
{
    
    if (x < 0)  // Ex. Input: x = -121 is not polindrom
    {
        return false;
    }

    xString = x.toString();
    let len = xString.length;
    
    let ortaDeger = Math.round(len / 2 - 0.1);

    xArray = xString.split("");
    for (let i = 0; i < ortaDeger; i++)
    {
        if (xArray[i] != xArray[len - i - 1])
        {
            return false
        }
    }
    return true;    
};
console.log(isPalindrome(12321));