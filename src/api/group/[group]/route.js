import { group } from "@/detail";
import { NextResponse } from "next/server";

export function GET(req, endpoint) {
  const list = group.filter((item) => group.id === endpoint.params.group);

  if (list.length === 0) {
    return NextResponse.json({ result: "no Data Found" });
  } else {
    return NextResponse.json({ result: {members:group.members} });
  }
}

 

