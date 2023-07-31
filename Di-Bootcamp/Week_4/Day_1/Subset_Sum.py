def subsetsum(numbers: list, target: int) -> bool:
    hashtable = set({})
    
    for curent_num in numbers:
        number_to_find = target - curent_num
        if number_to_find in hashtable:
            print("True", curent_num, number_to_find)
        hashtable.add(curent_num) 
    print("False")
    return False       
   
nums = [12, -7, 20, 1, 4, -10, -1]
subsetsum(nums, 1) # False
subsetsum(nums, 2) # True: 12,  -10
subsetsum(nums, 3) # True: 4,  -1
subsetsum(nums, 4) # False