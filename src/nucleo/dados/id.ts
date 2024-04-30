import { v4 as uuidv4 } from 'uuid';

export default class Id {
    static novo(): string {
        return `${this.geradorGuid()}`
    }

    private static geradorGuid(){
        return uuidv4();
    }
}

   //  novo(): string {
    //  return Math.random().toString(36).substring(2, 15)
    //