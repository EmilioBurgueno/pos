import { Item } from './item.model';

export interface Cart{
    items: Item[];
    customEntries: number;
    totalQuantity: number;
    subtotal: number;
    tax: number;
    tips: number;
    total: number;
}