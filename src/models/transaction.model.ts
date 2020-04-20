import { Item } from './item.model';

export interface Transaction{
    id: string;
    customEntries: {
        name: string;
        price: number;
    }
    items: Item[];
    totalQuantity: number;
    subtotal: number;
    tax: number;
    tips: number;
    total: number;
    date: any;
}