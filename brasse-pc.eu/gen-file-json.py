import os
import json

folder_path = "src/assets/files/"
save_path = "src/assets/json/"
file_name = "files.json"

data = [{
    "mapp": folder_path
}]
files = []

# Kontrollera om mappen faktiskt existerar
if os.path.isdir(folder_path):
    # Lista filer i mappen
    files_in_folder = os.listdir(folder_path)
    
    # Loopa igenom och skriv ut filnamnen
    for file in files_in_folder:
        print(file)
        file = {"file": file}
        files.append(file)
        
else:
    print("Mappen existerar inte")

data.append({"files": files})

with open(save_path + file_name, "w") as json_file:
    json.dump(data, json_file)