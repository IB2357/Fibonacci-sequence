def F(n):
    sequence = [1] #  initialize Fibonacci sequence
    a, b, c = 1, 0, 1 # my variables
    for i in range(n):
        a = c
        c = a + b
        b = a
        sequence.append(c)
    return sequence

print(F(5))
