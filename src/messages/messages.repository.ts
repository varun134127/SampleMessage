import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository{

    async findOne(id: string){

       const fileContents =  await readFile('messages.json','utf8')
       const messages = JSON.parse(fileContents);
       return messages[id];
    }

    async findAll(){

        const fileContents = await readFile('messages.json','utf8');
        const messages = JSON.parse(fileContents);
        return messages;

    }

    async Create(content: string){ 
        const fileContents = await readFile('messages.json','utf8');
        const messages = JSON.parse(fileContents);

        const id = Math.floor(Math.random()*999);
        messages[id] = {id, content};
        await writeFile('messages.json',JSON.stringify(messages));
    }
}