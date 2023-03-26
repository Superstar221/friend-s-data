const fs = require('fs');

let data = JSON.parse(fs.readFileSync('data.json'));
let output ="";

data.map((item, index) => {
    const {name, description, clone_url, created_at} = item;
   // const outitem={name, description, clone_url, created_at};
    // output = output.concat("git clone ");
    // output = output.concat(clone_url);
    // output = output.concat("\n");
    output = "";
    output = output.concat("git init\n");
    output = output.concat("py contribute.py --repository=git@github.com:Superstar221/");
    if(index < 5)          output = output.concat(name+'.git -sd="2016/01/10, 18:54:33" -nw -ed="2016/12/03, 15:23:56"\n');
    else if(index < 10)    output = output.concat(name+'.git -sd="2017/01/08, 18:54:33" -nw -ed="2017/12/09, 15:23:56"\n');
    else if(index < 15)    output = output.concat(name+'.git -sd="2018/01/16, 18:54:33" -nw -ed="2018/12/13, 15:23:56"\n');
    else if(index < 20)    output = output.concat(name+'.git -sd="2019/01/13, 18:54:33" -nw -ed="2019/12/30, 15:23:56"\n');
    else if(index < 25)    output = output.concat(name+'.git -sd="2020/01/09, 18:54:33" -nw -ed="2020/12/14, 15:23:56"\n');
    else if(index < 30)    output = output.concat(name+'.git -sd="2021/01/11, 18:54:33" -nw -ed="2021/12/28, 15:23:56"\n');

    output = output.concat("git push https://github.com/Superstar221/"+name);
    console.log(output);
   fs.writeFile(name+'.bat', output, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    }); 
})
// fs.writeFile('1.bat', output, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
// });


