#task a
def minimum(a, b, c, d):
    return min(a, b, c, d)
a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(minimum(a, b, c, d))

#task b
def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

a = float(input())
n = int(input())

print(power(a, n))

#task c
def xor(x, y):
    return (x and not y) or (not x and y)

x, y = map(int, input().split())

print(int(xor(x, y)))