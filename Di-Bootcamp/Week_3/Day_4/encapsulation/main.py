class BankAccount : 
    def __init__(self, account_number) :
        self.account_number = account_number
        self.__amount = 1000 #private __
        self._branch = "Tel Aviv" #protected
    
    # def set_amount (self, new_amount) :
    #     try :
    #         if new_amount < 2000 :
    #             self.__amount += new_amount
    #         else :
    #             raise ValueError("cannot add this much money")
    #     except Exception :
    #         print("ERROR")

   
    # getter -- return the value of the attribute
    @property
    def branch(self) :
        return self._branch

    # setter -- modify the value of the attribute
    @branch.setter
    def branch (self, new_branch) :
        try :
            if len(new_branch) > 3  :
                self._branch = new_branch
            else :
                raise ValueError("cannot add this much money")
        except Exception :
            print("ERROR")

    @property
    def amount(self) :
        return self.__amount

    # setter -- modify the value of the attribute
    @amount.setter
    def amount (self, new_amount) :
        try :
            if new_amount < 2000 :
                self.__amount += new_amount
            else :
                raise ValueError("cannot add this much money")
        except Exception :
            print("ERROR")

    @staticmethod
    def check () :
        print("hello")


john = BankAccount("12670")
# calling the getter
print(john.branch) #--> calling the getter method

# calling the setter
john.branch = "NY" #--> calling the setter method

john.amount = 3000







# john_bank_account.amount = 2000
# john_bank_account.set_amount(1500)

# print(john_bank_account.__amount) #not work
# john_bank_account.__amount = 200000

# john_bank_account._BankAccount__amount = 300000

# global attribute
# private attriubute __
# protected attribute _

# john_bank_account._branch = "Haifa"