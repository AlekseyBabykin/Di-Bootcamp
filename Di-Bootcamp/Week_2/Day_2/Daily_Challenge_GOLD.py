#     ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~

age = input(" birth date DD/MM/YYYY\n")
age_list = age.split("/")
year = 2023 - int(age_list[2])
coef = year % 10
count = 1
if year % 4 != 0:
    print('The year is not a leap year')
elif year % 100 == 0:
    if year % 400 == 0:
        print('The year is a leap year')
        count += 1
    else:
        print('The year is not a leap year')
else:
    print('The year is a leap year')
    count += 1    
b = "i" * coef

for i in range(count):
    print("   ___"+ b +"___   \n", "   |:H:a:p:p:y:|\n", " __|___________|__\n", "|^^^^^^^^^^^^^^^^^|\n",
        "|:B:i:r:t:h:d:a:y:|\n", "|                 |\n", " ~~~~~~~~~~~~~~~~~~" )



   