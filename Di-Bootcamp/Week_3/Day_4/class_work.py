
def colorize(text, color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    try:
        if color not in  colors:
            raise ValueError("not a color")
        if not isinstance(text,str):
            raise TypeError("not a string")
    except Exception as err:
        print(err)
    else:
        print("everythink oK!!!!")    
        
      
            
        
colorize(1,"blue")
colorize("abc","balck")   
colorize("abc","blue") 