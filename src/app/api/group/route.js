import { group } from "@/detail";
import { NextResponse } from "next/server";


export function GET(){
    const list=group;
    return NextResponse.json(list)
}