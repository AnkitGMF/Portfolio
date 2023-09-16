import connect from '@/DB/dbconfig'
import Message from '@/Models/messageModel'
import { NextRequest,NextResponse } from 'next/server';

connect();

export async function POST(request:){
    try {
        const reqBody = await request.json()
        const {name,email,message} = reqBody;
        // Add Sanitization here

        const newMessage = new Message({
            name,
            email,
            message,
        })
        const savedMessage = await newMessage.save()
        console.log(savedMessage)

        return NextResponse.json({message:"Message Sent Successfully",success:true},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}