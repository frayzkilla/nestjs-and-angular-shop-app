import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { IProduct } from 'src/models/product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    products: IProduct[] = [];
    constructor(private readonly productsService: ProductsService) {}

    

    onModuleInit(): void {
        this.productsService.findAll().subscribe(prods => {
        this.products = prods.data;
        })
        /* axios
        .get<IProduct[]>('http://fakestoreapi.com/products?limit=10')
        .then(res => { 
            this.products = res.data;
        }) */
    }

    @Get()
    getAll(){
        return this.products;
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<IProduct> {
        return this.products[id];
      }

    @Post()
    create(@Body() body:IProduct){
        this.products.push(body);
        return this.products;
    }
}
