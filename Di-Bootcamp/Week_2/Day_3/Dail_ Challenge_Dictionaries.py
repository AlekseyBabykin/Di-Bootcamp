# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

# a = input("write word\n")
# b = {}

# for i in range(len(a)):
#     if b.get(a[i]) == None:
#         b[a[i]] = []
#     b[a[i]].append(i)
# print(b)    

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.

# items_purchase = {
#   "Water": 1,
#   "Bread": 3,
#   "TV": 1000,
#   "Fertilizer": 20
# }
# wallet = 300
# you_can = []
# for i in range(len(items_purchase.items())):
#     if wallet - list(items_purchase.values())[i] > 0:
#         wallet -= list(items_purchase.values())[i]
#         you_can.append(list(items_purchase.keys())[i])
# print(you_can)         