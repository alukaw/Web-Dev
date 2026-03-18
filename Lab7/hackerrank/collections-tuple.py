n = int(input())

columns = input().split()
marks_index = columns.index("MARKS")

total = 0

for _ in range(n):
    data = input().split()
    total += int(data[marks_index])

print(f"{total / n:.2f}")