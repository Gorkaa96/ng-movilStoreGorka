import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../shared/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  pageTitle = 'New mobile';
  errorMessage: string;
  productForm: FormGroup;

  prodId:number;
  product: Product;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      colors: '',
      inches: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ''
    });

    // Read the product Id from the route parameter
    this.prodId = parseInt(this.activatedroute.snapshot.params['productId']);
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        this.product = this.productForm.value;
        this.product.id = this.prodId;
        
        this.productService.createProduct(this.product)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this.router.navigate(['']);
  }
  
}
