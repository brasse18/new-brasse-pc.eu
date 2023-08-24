import { NavigationFailureType } from 'vue-router';
import dataFile from '../assets/json/files.json';
import type { FileTyp } from './fileDataTyp';


export class FileHandler {
    private fileList: Array<FileTyp> = [];
    private mapp: string | undefined;


    constructor() {
        dataFile.forEach(item => {
            if ("mapp" in item) {
                this.mapp = item.mapp;
            } else if ("files" in item) {
                //console.log("Files:");
                // Loopa igenom "files" arrayen
                item.files.forEach(fileObj => {
                    //console.log("File:", fileObj.file, "mapp:", this.mapp );
                    const newItem: FileTyp = {name: fileObj.file, path: (this.mapp + fileObj.file), description: "asdasdasd"};
                    newItem.name = fileObj.file;
                    this.fileList.push(newItem);
                });
            }
        })
        //const newItem: fileTyp = { name: x.name, description: "", path: x.files };
        
    }

    public getData(): Array<FileTyp> {
        //console.log(this.fileList);
        return this.fileList;
    }
}