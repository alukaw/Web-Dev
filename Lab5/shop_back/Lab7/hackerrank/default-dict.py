from collections import defaultdict

n, m = map(int, input().split())

d = defaultdict(list)

for i in range(1, n + 1):
    d[input()].append(str(i))

for _ in range(m):
    word = input()
    print(" ".join(d[word]) if d[word] else -1)