class BankAccount : 
    def __init__(self, account_number) :
        self.account_number = account_number
        self.amount = 1000

    # def withdraw (self, amount_to_withdraw) :
    #     try : 
    #         if amount_to_withdraw > self.amount :
    #             raise ValueError("Not enough money")
    #         else :
    #             print("NO PROBLEM TO WITHDRAW")
    #             self.amount -= amount_to_withdraw
    #     except ValueError as err :
    #         print("AN ERROR HAPPENED WITH THE AMOUNT")
    #         self.withdraw(int(input("How much to withdraw")))


    def withdraw (self, amount_to_withdraw) :
        try : 
            if amount_to_withdraw > self.amount :
                raise ValueError("Not enough money")
            else :
                print("NO PROBLEM TO WITHDRAW")
                self.amount -= amount_to_withdraw
        except ValueError as err :
            print("AN ERROR HAPPENED WITH THE AMOUNT")
            self.withdraw(int(input("How much to withdraw")))


    # def withdraw (self, amount_to_withdraw) :
    #     try :
    #         while True :
    #             if amount_to_withdraw > self.amount :
    #                 amount_to_withdraw = int(input("How much to withdraw"))
    #             else :
    #                 self.amount -= amount_to_withdraw
    #                 break
    #     except :
    #         print("error")

    def __str__(self) :
        return f"The bank account number is {self.account_number}, it has ${self.amount} left"

john_bank_account = BankAccount("12738")
