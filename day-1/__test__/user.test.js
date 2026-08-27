import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { User } from "../models/user.model";


let mongoServer;

export const connect = async () =>{
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri)
};


export const disconnect = async () =>{
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
    await mongoServer.stop();
}


export const clearCollections = async () =>{
    const collection = mongoose.connection.collection;
    for(const key in collection){
        await collection[key].deleteMany({})
    }
}

beforeAll(async ()=> await connect());
afterAll(async ()=> await disconnect());
afterEach(async ()=> await clearCollections());


describe('user Model Test', () =>{
    test('should create and save user successfully', async ()=>{
        const userData = new User({
            name: "John Doe",
            email: "john@example.com"
        });
        const savedUser = await userData.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe('John Doe');
        expect(savedUser.email).toBe("john@example.com");
    });
});