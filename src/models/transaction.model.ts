import { Item } from './item.model';

export interface Transaction{
    id: string;
    customEntries: Object[];
    items: {};
    totalQuantity: number;
    subtotal: number;
    tax: number;
    tips: number;
    total: number;
    date: any;
}