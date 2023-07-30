from game import Game



def get_user_menu_choice():
    new_game= Game()
    while True:
        print("Menu:")
        print("(g) Plat a new game")
        print("(x) Shoe scores and exit")
        a = input(":    ")
        if a == "g":
            new_game.play()
        if a == "x":
            print(new_game.rezult)
            break    

get_user_menu_choice()
