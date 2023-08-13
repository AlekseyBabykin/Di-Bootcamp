import numpy as np
import random

# 2.Create a vector* of zeros with size 10 using np.zeros().
# array = np.zeros(10)

# 3.Compute the memory size* of any array. Note: You can do this by multiplying the length of the array by the size of one array element,
# which you can find using the .itemsize attribute.
# print(array.size * array.itemsize)


# 4.Retrieve the documentation of the numpy add function from the command line.
# print(np.info(np.add))

# 5.Create a vector with values ranging from 10 to 49 using np.arange().
new_array = np.arange(10,50)


# 6.Reverse a vector so the first element becomes last (Hint: Use slicing).
new_array[::-1]

# 7.Create a 3x3 matrix* with values ranging from 0 to 8 using np.reshape().
# ar = np.arange(9)
# ar.reshape(3,-1)

# 8.Find indices of non-zero elements from [1,2,0,0,4,0] using np.nonzero().
# ar1 = [1,2,0,0,4,0]

# print(np.nonzero(ar1))

# 9.Create a 3x3 identity matrix* using np.eye().
# ar_eye = np.eye(3,3)
# print(ar_eye)

# 10.Create a 5x5 matrix with row values ranging from 0 to 4. The output should be a matrix where each row is [0, 1, 2, 3, 4].
# ar = np.zeros((5,5))
# ar_1 = np.arange(5)
# ar += ar_1 
# print(ar)

# 11.Create a vector of size 10 with values ranging from 0 to 1, both excluded. You can use np.linspace.
# lin_array = np.linspace(0,1,12)[1:-1]
# print(lin_array)

# 12.Create a random vector of size 10 and sort it.
# ar = np.random.rand(10)
# print(sorted(ar))

# 13.Print the minimum and maximum representable value for each numpy scalar type* (int8, int32, int64, float32, float64). Use np.iinfo and np.finfo.
print(np.iinfo(np.int8))
print(np.iinfo(np.int32))
print(np.iinfo(np.int64))
print(np.finfo(np.float32))
print(np.finfo(np.float64))

# 14.How to convert a float (32 bits) array into an integer (32 bits) in place? Use np.ndarray.astype.
# float_array_32 =np.arange(5,dtype=float)
# print(float_array_32.dtype)
# float_array_32 = float_array_32.astype(int)
# print(float_array_32.dtype)

# 15.Subtract the mean* of each row of a matrix. Use np.mean with axis=1
# ar_eye = np.eye(3,3)
# print(ar_eye.mean(axis=1))

# 16.How to sort an array by the nth column? Use np.argsort.
# ar = np.arange(10)
# ar = ar.reshape((2,5))
# print(ar)
# print(ar.argsort())

# 17.How to swap two rows of an array? You can do this using array indexing.
# a = np.array([[4,3,1], [5,7,0], [9,9,3], [8,2,4]])
# print(a)

# a[[0, 2]] = a[[2, 0]]

# print(a)

# 18.Given an array C that is a bincount*, how to produce an array A such that np.bincount(A) == C? Use np.repeat.
# np.repeat(np.arange(len(C)), C) 
