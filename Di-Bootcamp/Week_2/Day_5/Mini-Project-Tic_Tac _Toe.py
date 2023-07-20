display = [["*","*","*","1","*","*","*","*","2","*","*","*","*","3","*","*","*"],
           ["1"," "," "," "," "," ","|"," "," "," ","|"," "," "," "," "," ","1"],
           ["*"," "," ","-","-","-","|","-","-","-","|","-","-","-"," "," ","*"],
           ["2"," "," "," "," "," ","|"," "," "," ","|"," "," "," "," "," ","2"],
           ["*"," "," ","-","-","-","|","-","-","-","|","-","-","-"," "," ","*"],
           ["3"," "," "," "," "," ","|"," "," "," ","|"," "," "," "," "," ","3"],
           ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]]



def display_board():

    for i in display:
        for j in i:
            print(j, end=" ")
        print("\n")

def player_input():

    print("the first player's move")
    first_player_1 = int(input("write row\n"))         
    print("the first player's move")
    first_player_2 = int(input("write colum\n"))
    cordinate1 = convert_input(first_player_1,first_player_2)
    display[cordinate1[0]][cordinate1[1]] = "x"
    display_board() 
    print("the second player's move")
    second_player_1 = int(input("write row\n"))
    print("the second player's move") 
    second_player_2 = int(input("write colum\n"))
    cordinate2 = convert_input(second_player_1,second_player_2) 
    display[cordinate2[0]][cordinate2[1]] = "y"     
    display_board()
        

def convert_input(x,y):
    all_values = []
    values_now = []
    if x == 3:
        x = 5
    if y == 3:
        y = 13
    if x == 2:
        x = 3
    if y == 2:
        y = 8
    if x == 1:
        x = 1
    if y == 1:
        y = 3 
    values_now.append(x)
    values_now.append(y)
    all_values.append(values_now)
    if all_values[0] > 0:
        for i in all_values: 
            if values_now in all_values:
                x = int(input("place busy i need new row\n"))
                y = int(input("place busy i need new colum\n"))
                values_now[0] = x
                values_now[1] = y         
                all_values.append(values_now)
                return [values_now[0],values_now[1]]
            else:
                all_values.append(values_now)              
                return [values_now[0],values_now[1]]
    # busy_all.append(values_now) 
    # return [values_now[0],values_now[1]]                      
               



def check_win():
    
    if display[1][3] == display[1][8] == display[1][13]== "x" or display[3][3] == display[3][8] == display[3][13]== "x" or  display[5][3] == display[5][8] == display[5][13] == "x" or display[1][3] == display[3][3] == display[5][3] == "x" or display[1][8] == display[3][8] == display[5][8] == "x" or display[1][13] == display[3][13] == display[5][13] == "x" or display[1][3] == display[3][8] == display[5][13]== "x" or display[5][3] == display[3][8] == display[1][13]== "x":
        return 1
    if display[1][3] == display[1][8] == display[1][13]== "y" or display[3][3] == display[3][8] == display[3][13]== "y" or  display[5][3] == display[5][8] == display[5][13] == "y" or display[1][3] == display[3][3] == display[5][3] == "y" or display[1][8] == display[3][8] == display[5][8] == "y" or display[1][13] == display[3][13] == display[5][13] == "y" or display[1][3] == display[3][8] == display[5][13]== "y" or display[5][3] == display[3][8] == display[1][13]== "y":
        return 2
        

def play():
    count = 0
    while True:
        count += 1
        display_board()
        player_input()
        check_win()
        if check_win() == 1:
            print("player 1 you win!")
            print("game over")
            break
        if check_win() == 2:
            print("player 2 you win!")
            print("game over")
            break
        if count >9:
            print("the game ends in a tie")   
 
    
play()    