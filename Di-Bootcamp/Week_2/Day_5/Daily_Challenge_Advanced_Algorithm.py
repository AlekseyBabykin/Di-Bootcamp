import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
a = []
length_range = 0
count = 0
for i in range(len(list_of_numbers)):
    if list_of_numbers[i] <=  target_number:
        a.append(list_of_numbers[i])
if len(a) % 2 == 0:
    length_range = len(a)/2
else:
    length_range = len(a)/2 + 1
              
for i in range(int(length_range)):
    for j in range(int(length_range)):
        if a[i] + a[j] == target_number:
            count +=1
print(count)
          