import type { Item } from '../components/ItamObjekt';
import { postData } from '../components/APIHandler';
import dataFile from '../assets/json/data.json';
import { getCookie } from '../components/CookiHandler';



export class DataHandler {
    public itemList: Array<Item> = [];

    constructor() {
        dataFile.forEach(x => {
            const newItem: Item = { name: x.name, cost: Number(x.cost), url: x.url };
            this.itemList.push(newItem);
        })
    }

    public getData(): Array<Item> {
        return this.itemList;
    }

    public addItem(item: Item) {
        this.itemList.push(item);
        this.saveData();
    }

    public delItem(index: number) {
        if (index === undefined) {
            console.log("Index is undifind");
        } else {
            this.itemList.splice(index, 1);
            console.log("del nr: " + index + " To server");
            this.saveData();
        }
    }

    public editItem(index: number, item: Item) {
        this.itemList[index] = item;
        this.saveData();
    }

    public saveData() {
        postData(JSON.parse(JSON.stringify(this.itemList)), getCookie("token"));
    }
}
