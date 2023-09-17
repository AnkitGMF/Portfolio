import connect from '@/DB/dbconfig'
import Message from '@/Models/messageModel'
import { NextRequest,NextResponse } from 'next/server';
import validateAndSanitizeContactForm from '@/utils/validator';

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {name,email,message} = reqBody;

        const validatedAndSanitized = validateAndSanitizeContactForm(reqBody)
        if(validatedAndSanitized.isValid==false){
            return NextResponse.json({message:"Invalid Request",success:false},{status:400})
        }
        const newMessage = new Message({
            name,
            email,
            message
        })
        const savedMessage = await newMessage.save()

        return NextResponse.json({message:"Message Sent Successfully",success:true},{status:200})
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({error:error.message},{status:500})
    }
}