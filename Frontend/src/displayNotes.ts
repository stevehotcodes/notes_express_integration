function getAllNotes(){
    new Promise((resolve,reject)=>{
        fetch('http:localhost:3000/all',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                
            },
            method:'GET',
            
        }).then(res=>{
            resolve(res.json())
        }).catch(error=>{
            reject(error)
        })
    }).then(notesData=>{
        console.log(notesData)
    })
}