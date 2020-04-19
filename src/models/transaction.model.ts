import { Item } from './item.model';

export interface Transaction{
    id: string;
    customEntries: number;
    items: Item[];
    totalQuantity: number;
    subtotal: number;
    tax: number;
    tips: number;
    total: number;
    date: any;
}