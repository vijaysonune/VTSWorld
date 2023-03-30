import { Injectable } from '@angular/core';
import { ProductInterface } from './Product.Interface';

@Injectable({
  providedIn: 'root'
})
export  class ProductServiceService {

  constructor() { }

  products : ProductInterface[] =   [
    { id:1, url: '../assets/products/tap.jpg', title: 'MS MATERIAL',details:'Ms ALL KIND OF PIPES, STEEL PATRA, GI WIRE, TAPPING SCREW, L DROP, TOWERBOLT, KEKDA HINJES, MS HINJES.' },
    { id:2, url: '../assets/products/water tank.jpg', title: 'WATER TANK' ,details:'ALL SIZES LIKE 5000, 10000 L TRS'},
    { id:3, url: '../assets/products/volves.jpg', title: 'DOOR HARDWARE' ,details:'HINJES, SCREW, PVC GATTU, TOWER BOLT, DOOR CHAIN, L DROP, DOOR KIT, DOOR CATCHER, DOOR STOPPER'},
    { id:4, url: '../assets/products/tank.jpg', title: 'SEPTIC TANK' ,details:'Rcc SEPTIC TANK AS PER THE LABOUR STRENGHT.'},
    { id:5, url: '../assets/products/ConstImage5.jpg', title: 'CURING SVSTEM' ,details:'CURING PIPES, KILTAN, BAARDAN.'},
    { id:6, url: '../assets/products/ConstImage6.jpg', title: 'P LIME POWDER' ,details:'20 KG, 50 KG PACKING .'},
    { id:7, url: '../assets/products/crushent.jpg', title: 'CRUSHCENT' ,details:'KHADI, CRUSHCENT, PLASTER SAND (M SAND).'},
    { id:8, url: '../assets/products/electrical-wires.jpg', title: 'BINDING WIRE' ,details:'ALL GAGUES AVAILABLE.'},
    { id:9, url: '../assets/products/preplaster.jpg', title: 'RMC' ,details:'ALL GRADES AVAILABLE.'},
    { id:10, url: '../assets/products/cement.jpg', title: 'CEMENT' ,details:'SHREE CHETTINADH, COROMANDAL, JSW.'},
    { id:11, url: '../assets/products/electricTool.jpg', title: 'ELECTRIC PIPES AND ACCESSORIES FOR SLAB' ,details:'DAIMOND PIPES, FAN BOXES, BROWN TAPE, ELBOW, SOCKET,SOLVENT ETC.'},
    { id:12, url: '../assets/products/machine.jpg', title: 'TOOLS AND MACHINE' ,details:'cumNG MACHINE, WELDING MACHINES ALL TYPES OF MACHINES AVAILABLE.'},
    { id:13, url: '../assets/products/ConstImage7.jpg', title: 'CONSTRUCTION CHEMICALS' ,details:'ADD MIXURES, SBR IN ALL BRANDS LIKE (DR FIXIT, BASF, MYK, FORSROK, CHEMEX, NIPPON, PARMA ETC.'},
    { id:14, url: '../assets/products/ConstImage7.jpg', title: 'FOAM SHEET' ,details:'ALL SIZE AVAILABLE.'},
    { id:15, url: '../assets/products/ConstImage7.jpg', title: 'ACC BLOCKS AND MORTAR' ,details:'INFRA BLOCKS, SIPOBOND CHEMICAL, VURA.'},
    { id:16, url: '../assets/products/brik.jpg', title: 'BRICKS' ,details:'FLY ASH BRICKS, RED BRICKS ALL SIZES AVAILABLE.'},     
    { id:17, url: '../assets/products/safety.jpg', title: 'SAFETY ITEMS' ,details:'SAFETY NET, SHOES, HAND GLOVES, REFLECTIVE JACKETS, ROUND MS PIPES FOR SAFETY NET, HELMAT ALL COMPANIES.'}, 
    { id:18, url: '../assets/contruction/nut.jpg', title: 'METAL & WOODEN BOX' ,details:'IALL SIZES CONCEALED METAL AND WOODEN BOXES.'}

  ];

  public getProducts() :  ProductInterface[]
  {
    return this.products;
  }

  public getProductsById(Id : number) 
  {
    return this.products.find(({ id }) => id == Id);
  }


}
