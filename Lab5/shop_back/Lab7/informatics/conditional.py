#task a
a = int(input())
b = int(input())

print(max(a, b))

#task b
year = int(input())

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

#task c
a = int(input())
b = int(input())

if a == b or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")

#task d
x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

#task e
a = int(input())
b = int(input())

if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)