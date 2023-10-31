const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('koa-router');
const serveStatic = require('koa-static');
const cors = require('@koa/cors')

const path = require('path');
const fs = require('fs');

const app = new koa();


/*servir las paginas de angular */
app.use(serveStatic('./dist/gapsi_ecommerce'));


const router = new koaRouter();

/*metodos de los webservices*/



/*obtiene los datos del candidato */
router.get('/candidate', (ctx, next) => {
    console.log("in get candidate");

    ctx.body = {
        name: "Arturo Ruiz",
        age: 49,
        position: 'Senior Software Engineer'
    };

});

/*proporciona la version de la aplicacion*/
router.get('/version', (ctx, next) => {
    console.log("in get version");

    ctx.body = {
        version: "1.0.0"
    };

});

/*lista de proveedores */
router.get('/providers', (ctx, next) => {
    console.log("in get providers");
    try {
        ctx.body = JSON.parse(fs.readFileSync('bd.json'));
    } catch (error) {
        ctx.body = [];
    }
});


/*agrega un provedor. realiza una validacion simple de los atributos */
router.post('/providers', (ctx, next) => {
    console.log("in post providers");
    console.log(JSON.stringify(ctx.request.body));

    if (typeof ctx.request.body.nombre === 'undefined'
        || typeof ctx.request.body.razonSocial === 'undefined'
        || typeof ctx.request.body.direccion === 'undefined'
        || ctx.request.body.nombre === ''
        || ctx.request.body.razonSocial === ''
        || ctx.request.body.direccion === '') {
        ctx.status = 400;
        ctx.body = { msg: 'Revisar parametros' };
        return;
    }

    let currentContent;

    try {

        currentContent = JSON.parse(fs.readFileSync('bd.json'));

    } catch (error) {
        currentContent = [];
    }


    for (const element of currentContent) {
        if (element.nombre == ctx.request.body.nombre) {
            ctx.body = { msg: 'Ya existe un proveedor con ese nombre' };
            return;
        }
    }

    currentContent.push(ctx.request.body); ctx.request.body.nombre

    fs.writeFileSync('bd.json', JSON.stringify(currentContent));
    ctx.status = 200;
    ctx.body = { msg: 'Proveedor guardado' };
});

/*Borra el proveedor por nombre */
router.delete('/providers/:nombre', async (ctx) => {
    console.log("in delete provider " + ctx.params.nombre);
    let currentContent;

    try {
        currentContent = JSON.parse(fs.readFileSync('bd.json'));
    } catch (error) {
        return;
    }
    let afterDelete = [];

    for (const element of currentContent) {
        if (ctx.params.nombre !== element.nombre) {
            afterDelete.push(element);
        }
    }

    fs.writeFileSync('bd.json', JSON.stringify(afterDelete));
    ctx.status = 200;
    ctx.body = { msg: 'Proveedor eliminado' };


})


app.use(cors());
app.use(bodyParser({ enableTypes: ['json', 'text'] }));
app.use(router.routes());

/*app.use(async ctx => ctx.body= {'msg': 'hello world'});*/

app.listen(3000, () => {
    console.log('App is started on port 3000');
});