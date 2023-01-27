<script lang="ts">
    
    import Definition from "./Definition.svelte";
    import { Flavor, flavors } from "../data/flavours";
    import crypto from "crypto";

    function getIndexBasedOnDay(min: number, max: number) {
        const today = new Date()
        
        const dateSum = today.getDate() + today.getMonth() + today.getFullYear()
        const hash = crypto.createHash('sha256')
            .update(dateSum.toString())
            .digest('hex')
            console.log(hash[0])
        const firstDigit = parseInt(hash[0], 16) % max

        min = Math.ceil(min); 
        max = Math.floor(max);
        const result = Math.min(max, Math.max(min, firstDigit))

        return result
    }
    
    const daily: Flavor = flavors[getIndexBasedOnDay(0, flavors.length - 1)]

</script>

<h1 class="sm:text-8xl text-6xl w-full text-center mb-3">{daily.name}</h1>
<h3 class="sm:text-2xl text-xl font-light italic w-full text-center text-gray-400 font-body">{daily.phonetic}</h3>
<div class="my-6">
    <Definition description={daily.description.text} ref={daily.description.reference}/>
</div>