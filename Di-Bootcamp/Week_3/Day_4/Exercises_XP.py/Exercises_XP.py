# 🌟 Exercise 1 – Random Sentence Generator
# import random
# def get_words_from_file():
#     with open("sowpods.txt", "r") as file:
#         all_text = file.read().split("\n")
#         return all_text
    
# def get_random_sentence(length):
#     return " ".join(random.choices(get_words_from_file(), k = length)).lower()
    
  

# def main():
#     try:
#         a = int(input("how long you want the sentence to be?\n"))
#         if 2 <= a <= 20:
#             print("once seconds....")
#         if a is not isinstance(int) or a == None:
#             raise ValueError(" only number and not empty")    
#         else:
#             raise ValueError("value only  2 .....20 ")
#     except Exception as err:
#         print(err)        
#     else:
#         print(get_random_sentence(a))

# main()

# 🌟 Exercise 2: Working With JSON

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)
data["company"]["employee"]["birth_date"] = "03.08.1990"
print(data)
print(data["company"]["employee"]["payable"]["salary"])
with open("json_file", 'w') as file_obj:
    json.dump(data, file_obj)