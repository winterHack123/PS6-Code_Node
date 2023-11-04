import { group } from "@/detail";
import { NextResponse } from "next/server";
const list=group;

export function GET(){
    return NextResponse(list.json())
}