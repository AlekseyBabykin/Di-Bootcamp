a = [[1,10],[2,3],[1,2]]
c = [1,2]
b = [1,2]
a.append(c)
print(a)
# for i in a:
#     if i == c:
#         print("yes")
print(c in a)
print(c in b)