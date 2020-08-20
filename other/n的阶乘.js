function Factorial(n) {
    if (n == 0) {
        return 1
    }

    return Factorial(n - 1)* n
}

function Factorial1(n)
{
    let i=1,sum=1;
    while(i<=n)
    {
        sum*=i;
        ++i;
    }
    return sum;
}

