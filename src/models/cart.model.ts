import { Item } from './item.model';

export interface Cart{
    items: {};
    customEntries: [];
    totalQuantity: number;
    subtotal: number;
    tax: number;
    tips: number;
    total: number;
}