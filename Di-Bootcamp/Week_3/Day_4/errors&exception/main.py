try :
    firstNum = int(input("Give me a first number"))
    secondNum = int((input("Give me a first number")))
    calculation = firstNum/secondNum
    print(calculation)
    # if an error occurs in the try block, it will go directly to the except
except ZeroDivisionError as err:
    print("you cannot divide by 0", err)
except ValueError as err:
    print("You should give me a number", err)

# print("hello")

# try :
#     firstNum = int(input("Give me a first number"))
#     secondNum = int((input("Give me a first number")))
#     calculation = firstNum/secondNum
#     print(calculation)
#     # if an error occurs in the try block, it will go directly to the except
# except Exception as err:
#     print(err)

# def check () :
#     try :
#         firstNum = int(input("Give me a first number"))
#         secondNum = int((input("Give me a first number")))
#         calculation = firstNum/secondNum
#     except Exception as err:
#         print(err)
#         check()
#     else :
#         print("EVERYTHING OK", calculation)
#     finally : #whatever happens
#         print("In the finally")

# check()

def check () :
    try :
        firstNum = int(input("Give me a first number"))
        secondNum = int((input("Give me a first number")))
        calculation = firstNum/secondNum
    except Exception as err:
        print(err)
        check()
    else :
        print("EVERYTHING OK", calculation)
    finally : #whatever happens
        print("In the finally")

check()

# error happens during the execution of the code
# exception is an error that the developers trhows intentionally

# raising an exception
# raise TypeError("type problem in the code")
# print("hello")