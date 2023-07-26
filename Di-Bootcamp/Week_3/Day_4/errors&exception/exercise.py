# Exercise - Exception
# # Create a colorize(text, color) function that contain this tuple colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
# # If the color parameter is not present in the tuple, raise a ValueError exception
# # If the text parameter is not a string raise a TypeError Exception
# # make sure to catch the exception

def colorize(text, color) :
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    try :
        if color not in colors :
            raise ValueError("Color not in the tuple")
        if not isinstance(text, str) :
            raise TypeError("Text not a string")
    except Exception as err :
        print(err)
    else :
        print("everything ok")
        return
    
colorize(1, "blue") # --> TypeError
colorize("abc", "black") # --> ValueError
colorize("abc", "blue") #--> everything ok