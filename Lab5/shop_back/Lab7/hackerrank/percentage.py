n = int(input())

student_marks = {}

for _ in range(n):
    data = input().split()
    name = data[0]
    scores = list(map(float, data[1:]))
    student_marks[name] = scores

query_name = input()

avg = sum(student_marks[query_name]) / len(student_marks[query_name])

print(f"{avg:.2f}")