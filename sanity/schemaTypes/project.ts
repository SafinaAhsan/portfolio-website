export default{
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
name:"title",
type:"string",
title:"Title"
    },{
        name:"overview",
        type:"string",
        title:"Small Overview"   
    },
    {
        name: "video",
        type: "file",
        title: "Video",
        description: "Upload the video file",
        options: {
          accept: "video/mp4,video/webm,video/ogg"
        }
    }
]
}