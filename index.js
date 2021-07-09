const app = require('express')();
const bodyParser = require('body-parser');
//my changes dfdff
//fdsffdff dfggdgdfg
//fggdfgdgdg
//fdfdsfsfsf gdfggddfgf
app.use(bodyParser.json())

app.get('/', (req, res)=> {
res.send('This is my updated Nodejs projet');
});
//fdffsfsfsfdf
app.post('/getIndexes', (req, res)=> {
    var indexingQuery = `ALTER TABLE ${req.body.tablename} `;
    const columns  = req.body.columns;

    columns.forEach((element, index) => {
        if(index === 0) {
            indexingQuery = indexingQuery + ` ADD INDEX \`idx_${element}\`(\`${element}\`)`;
        } else {
            indexingQuery = indexingQuery + `, ADD INDEX \`idx_${element}\`(\`${element}\`)`;
        }
    });

    const output = {
        tableName: req.tableName,
        indexingQuery: indexingQuery + ';'
    }

    res.send(output)
    


})

app.listen(3000, ()=> console.log('Server is up and running'));
