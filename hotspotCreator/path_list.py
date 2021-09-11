from os import listdir
from os.path import isfile, join
images = ["Floors/"+f for f in listdir("../pictures/Floors") ]
images+= ["Rooms/"+f for f in listdir("../pictures/Rooms") ]
print(images)
with open("paths.txt","w") as f:
    for path in images:
        f.write(path +"\n")