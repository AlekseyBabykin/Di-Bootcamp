family = {
    "last_name" : "Smith",
    "members" : 5,
    "has_dog" : True
}

# >>> family.values()
# dict_values(['Smith', 5, True])
# >>> family.keys()
# dict_keys(['last_name', 'members', 'has_dog'])
# >>> family.items()
# dict_items([('last_name', 'Smith'), ('members', 5), ('has_dog', True)])

# for element in family.items() :
#     print(element)

# ('last_name', 'Smith')
# ('members', 5)
# ('has_dog', True)

for key, value in family.items() :
    print(key)
    print(value)

# last_name
# Smith
# members
# 5
# has_dog
# True