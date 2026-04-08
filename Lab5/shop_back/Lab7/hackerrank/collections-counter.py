x = int(input())
sizes = list(map(int, input().split()))

n = int(input())

money = 0

for _ in range(n):
    size, price = map(int, input().split())
    if size in sizes:
        money += price
        sizes.remove(size)

print(money)