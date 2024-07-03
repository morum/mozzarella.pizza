import { Flavor, flavors } from "../data/flavours";
import crypto from "crypto";

function getIndexBasedOnDay(min: number, max: number) {
    const today = new Date()
    
    const dateSum = today.getDate() + today.getMonth() + today.getFullYear()
    const hash = crypto.createHash('sha256')
        .update(dateSum.toString())
        .digest('hex')

    const firstDigit = parseInt(hash[0], 16) % max

    min = Math.ceil(min); 
    max = Math.floor(max);
    const result = Math.min(max, Math.max(min, firstDigit))

    return result
}

export async function get() {

    const daily: Flavor = flavors[getIndexBasedOnDay(0, flavors.length - 1)]

    return new Response(JSON.stringify(daily), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
    
}