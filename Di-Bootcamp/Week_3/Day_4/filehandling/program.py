# read the data
with open("chocolate.txt", "r")  as choco_file :
    all_text = choco_file.read() #read the file
    print(all_text)

with open("chocolate.txt", "r")  as choco_file :
    all_text = choco_file.readlines() #read the file and push inside a list
    # print(all_text[1]) #the second line of my file
    for index, line in enumerate(all_text):
        print(f"#{index+1} -- {line}")

with open("chocolate.txt", "a")  as choco_file :
    choco_file.write("Helloooo") #appending Hellooo at the end of the file

with open("chocolate.txt", "w")  as choco_file :
    choco_file.write("Helloooo") #replacing the whole file by Helllooo

with open("chocolate.txt", "r")  as choco_file :
    all_lines = choco_file.readlines() #read the lines and push them to a list
    all_lines.insert(2, "Helloooo\n") #insert hello at the specific position
    print(all_lines)
    choco_file.seek(0) #change the file position to 0
    print(choco_file.tell()) # check the file position
    choco_file.writelines(all_lines) #write the file with the new lines