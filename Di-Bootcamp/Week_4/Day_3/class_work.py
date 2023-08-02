# def sum_list(a):
#     if len(a) == 0:
#         return 0
#     else:
       
#         return a[0] + sum_list(a[1:])
    
# test = [2,4,5,6,7]    
# print(sum_list(test))

# def lalal(a):
#     if len(a) == 0:
#         return a
#     else:
#         return lalal(a[1:]) + a[0]
    
    
# c = 'Hello World!'

# print(lalal(c))


def mmm(a,b):
    if b == 0:
        return 1
    if b > 0:
        return a*mmm(a,b-1)
    else:
        return 1 / a*mmm(a,abs(b-1))
    
    
a=2
b=3
print(mmm(a,b))