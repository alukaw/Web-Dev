#task a
n = int(input())
i = 1
while i * i <= n:
    print(i * i)
    i += 1

#task b
n = int(input())
i = 2
while i <= n:
    if n % i == 0:
        print(i)
        break
    i += 1

#task c
n = int(input())

x = 1
while x <= n:
    print(x, end=" ")
    x *= 2

#task d
n = int(input())
x = 1
while x < n:
    x *= 2

if x == n:
    print("YES")
else:
    print("NO")

#task e
n = int(input())
k = 0
x = 1

while x < n:
    x *= 2
    k += 1
print(k)
