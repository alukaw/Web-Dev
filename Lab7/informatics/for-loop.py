#task a
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

#task b
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")

#task c
a = int(input())
b = int(input())

i = 1
while i * i <= b:
    if i * i >= a:
        print(i * i, end=" ")
    i += 1

#task g
x = int(input())

for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break

#task h
x = int(input())

for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")

#task i
x = int(input())

count = 0
for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        if i * i == x:
            count += 1
        else:
            count += 2

print(count)

#task j
s = 0
for _ in range(100):
    s += int(input())

print(s)

#task k
n = int(input())
s = 0
for _ in range(n):
    s += int(input())

print(s)

#task m
n = int(input())
count = 0
for _ in range(n):
    if int(input()) == 0:
        count += 1

print(count)