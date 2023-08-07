import numpy as np
# 1Matrix manipulation - Swap the second and fourth rows of the data matrix.
# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)
# print(data)
# data[[1,3]] = data [[3,1]]
# print(data)

# 2.Normalization - Normalize all the elements in the data matrix such that they are scaled to range between 0 and 1. 
# Hint: to normalize, subtract the minimum and divide by the max-min.
# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)
# data  = (data - np.min(data)) / (np.max(data)-np.min(data))
# print(data)

# 3.Z-score normalization - Standardize the data matrix using Z-score normalization. That is, all the elements should be scaled to have a mean* of 0 and a standard deviation of 1. Z-score is calculated as (X - mean) / std.
# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)
# mean = np.mean(data,axis=1)
# std = np.std(data,axis=1)
# norm_data = (data - mean) / std
# print(norm_data)


# 4.Array splitting - Reshape the data matrix into a vector 
# (Hint: use np.ravel) and split this array into five equal-sized sub-arrays.
# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)
# c = np.array_split(data,5)
# data_ravel = np.ravel(data)
# print(data_ravel.reshape(5,-1))

# 5.Dot product - Create two vectors of size 5 with any values. Compute the dot product of the two vectors*.

# ar1 = np.array([3, 5, 6, 7, 8])
# ar2 = np.array([2, 4, 6, 8, 10])
# mult_ar = ar1 * ar2
# print(sum(mult_ar))

# 6.Matrix multiplication - Create another 3x3 matrix with any values (let’s call it data2). 
# Perform matrix multiplication (dot product of data (first 3x3 part) and data2).
# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)
# data2 = np.array( [[1410, 2198, 2517],
#     [1808, 2828, 3318],
#     [1284, 2098, 2366]])
# data2 *= data[:3, :3] 
# print(data2)

# 7.Inverse of a matrix - Create a 3x3 identity matrix*, multiply it with 2 and compute its inverse.

# ar = np.array( [[0.5, 0.0, 0.0],
#     [0.0, 0.5, 0.0],
#     [0.0, 0.0, 0.5]])

# ar = ar * ar * ar 
# print(ar[::-1])

# 8.Eigenvalues and eigenvectors - For the first 3x3 part of the data matrix, compute the eigenvalues and eigenvectors*.

# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)

# Eigenvalues , eigenvectors = np.linalg.eig(data[:3, :3])
# print(Eigenvalues)
# print(eigenvectors)

# 9.Find missing values - Replace random 5 elements in the data matrix with np.nan. Find the indices of the missing values.
# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)
# data2 = data
# data2 = data2.astype(float)
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# is_none = np.argwhere(np.isnan(data2))
# print(data2)
# count = is_none.size / 2
# print(count)

# 10.Replace missing values - Replace the missing values in the data matrix with the mean of the matrix (ignoring the missing values while computing the mean).


# data = np.array(np.random.randint(1, 100, size=25)).reshape(5,5)
# data2 = data
# data2 = data2.astype(float)
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# data2[np.random.randint(0, 5)][np.random.randint(0, 5)] = np.nan
# count_mean = np.nanmean(data2)
# print(count_mean)
# data2[np.isnan(data2)] = count_mean
# print(data2)