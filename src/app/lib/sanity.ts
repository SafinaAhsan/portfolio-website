import {createClient} from "next-sanity"

const projectId = "atzcndp3"
const dataset = "production"
const apiVersion = "2024-04-30"

export const client = createClient ({
    projectId,
    dataset,
    apiVersion,
    useCdn:true
})
