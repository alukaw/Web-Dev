#task a
import math
a = int(input())
b = int(input())

c = math.sqrt(a*a + b*b)
print(c)

#task b
n = int(input())
print("The next number for the number", n, "is", n + 1, ".")
print("The previous number for the number", n, "is", n - 1, ".")

#task c
n = int(input())
k = int(input())

print(k // n)

#task d
n = int(input())
k = int(input())

print(k % n)

#task e
v = int(input())
t = int(input())

print((v * t) % 109)
