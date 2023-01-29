import { getDaily } from "./lib/mozzarella.js"
import { tweet } from "./lib/twitter.js"

const daily = await getDaily()
const dailyTweet = 
  `🍕 Today's pizza flavor is:

  ${daily.name.toUpperCase()}
  ${daily.phonetic}
  
  
  ${daily.description.text}
  ${daily.description.reference}`
await tweet(dailyTweet)

