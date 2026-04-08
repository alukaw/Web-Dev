#task a
n = int(input())
arr = []

for _ in range(n):
    arr.append(int(input()))

for i in range(0, n, 2):
    print(arr[i], end=" ")

#task b
n = int(input())
arr = []
for _ in range(n):
    arr.append(int(input()))
for i in range(n):
    if arr[i] % 2 == 0:
        print(arr[i], end = " ")

#task c
n = int(input())
arr = list(map(int, input().split()))

count = 0
for i in range(n):
    if arr[i] > 0:
        count += 1

print(count)

#task d
n = int(input())
arr = list(map(int, input().split()))

count = 0
for i in range(1, n):
    if arr[i] > arr[i - 1]:
        count += 1

print(count)

#task e
n = int(input())
arr = list(map(int, input().split()))

found = False

for i in range(1, n):
    if arr[i] * arr[i - 1] > 0:
        found = True
        break

if found:
    print("YES")
else:
    print("NO")