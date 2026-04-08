n = int(input())
students = []

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])

grades = sorted(set(s[1] for s in students))
second = grades[1]

names =[]

for s in students:
    if s[1] == second:
        names.append(s[0])

names.sort()

for name in names:
    print(name)