'use server'
import {prisma} from '@/app/lib/prisma';

export async function searchRecord(formData:FormData){
    const input = formData.get('query') as string

    if(!input) return[]

    const records = await prisma.equipment.findMany({
        where:{
            barcode:{
                contains: input,
                //mode: 'insensitive',
            },
        },
    })

    return records
}

