import mongoose from 'mongoose'

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connect',()=>{
            console.log('Successfully Connected to MongoDB');
        })
        connection.on('error',(error)=>{
            console.log('Connection Failed');
            console.log(error);
            process.exit(); 
        })
    } catch (error) {
        console.log('Something went wrong!!');
        console.log(error);
    }
}