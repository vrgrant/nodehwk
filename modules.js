const {people, ages} = require('./people');

console.log(people, ages);

//const os = require('os');

//console.log(os)

//console.log(os.platform(), os.
//homedir())

//writing files
const fs = require('fs')

fs.readFile('./docs/blog.txt',
    (err, data) =>{
        if(err){
            console.log(err)
        }
        console.log(data.toString())
})

fs.writeFile('./docs/blog.txt',
    'hello world', () =>{
        console.log('file was written')
})

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>
    {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })

} else {
    fs.rmdir('./assets', (err) =>{
        {
            if(err){
                console.log(err)
            }
        }
        console.log('folder deleted')
    });
}
//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}

